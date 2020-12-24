from aiohttp import web


async def handle(request):
    print(request)
    return web.Response(text="HAIL SATAN")


if __name__ == "__main__":
    app = web.Application()
    app.add_routes([web.get("/", handle)])
    web.run_app(app)
