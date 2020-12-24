from aiohttp import web, ClientSession
from transform import transform_html, transform_js

session = ClientSession()

FIGMA_URL = "https://figma.com"

HTML_CONTENT_TYPE = "text/html"
JS_CONTENT_TYPE = "application/javascript"
JSON_CONTENT_TYPE = "application/json"


async def handle(request):
    figma_response = await session.get(f"{FIGMA_URL}{request.rel_url}")
    if figma_response.content_type == HTML_CONTENT_TYPE:
        return web.Response(
            body=transform_html(await figma_response.text()),
            content_type=HTML_CONTENT_TYPE,
        )
    elif (
        figma_response.content_type == JS_CONTENT_TYPE
        or figma_response.content_type == JSON_CONTENT_TYPE
    ):
        return web.Response(
            body=transform_js(await figma_response.text()),
            content_type=figma_response.content_type,
        )
    else:
        response_content = await figma_response.read()
        return web.Response(
            body=response_content, content_type=figma_response.content_type,
        )


if __name__ == "__main__":
    app = web.Application()
    app.add_routes([web.get("/{tail:.*}", handle)])
    web.run_app(app, port=80)
