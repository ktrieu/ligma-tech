from aiohttp import web, ClientSession

session = ClientSession()

FIGMA_URL = "https://figma.com"


async def handle(request):
    figma_response = await session.get(f"{FIGMA_URL}{request.rel_url}")
    if figma_response.content_type == "text/html":
        return web.Response(body=await figma_response.text(), content_type="text/html")
    else:
        response_content = await figma_response.read()
        return web.Response(
            body=response_content, content_type=figma_response.content_type,
        )


if __name__ == "__main__":
    app = web.Application()
    app.add_routes([web.get("/{tail:.*}", handle)])
    web.run_app(app)
