const HEADER_LOGO_SELECTOR = 'svg[viewBox=\"0 0 38 57\"]'
const HEADER_NEW_LOGO_SRC = '/static-override/ligma.svg'

function replaceHeaderLogo() {
    const headerLogoSvg = document.querySelector(HEADER_LOGO_SELECTOR)
    if (headerLogoSvg) {
        const newLogo = document.createElement(
            'img',
        )
        newLogo.src = HEADER_NEW_LOGO_SRC
        newLogo.width = 37
        newLogo.height = 67
        headerLogoSvg.replaceWith(newLogo)
    }
}

const FOOTER_LOGO_SELECTOR = 'img[src=\"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI3MyIgaGVpZ2h0PSIyNiIgY2xhc3M9InN2ZyI+CiAgPHBhdGggZD0iTS41MiAwdjIwLjE2bDIuNi4wMXYtOS42aDYuMjVWOC4wM0gzLjExdi01LjVoOC4xNVYwSC41MnptMTUuNCA0LjFhMS43IDEuNyAwIDEgMCAwLTMuNCAxLjcgMS43IDAgMCAwIDAgMy40em0tMS4zMSAyLjUzdjEzLjU0aDIuNlY2LjYzaC0yLjZ6Ii8+CiAgPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNMjYuODIgNi4yNGMtMy40NCAwLTUuODQgMi45MS01Ljg0IDYuMzdzMi40IDYuMzcgNS44NCA2LjM3YzEuNTggMCAyLjg4LS42IDMuODMtMS42djEuOGE0LjA3IDQuMDcgMCAwIDEtNC4wNiA0LjEyYy0uODMgMC0xLjY1LS4zMi0yLjMtLjc4bC0xLjMgMi4yNWE2LjY1IDYuNjUgMCAwIDAgMTAuMjYtNS42VjYuNjRoLTIuNnYxLjIxYy0uOTUtMS0yLjI1LTEuNi0zLjgzLTEuNnptLTMuMjUgNi4zN2MwLTIuMTUgMS42NC0zLjg0IDMuNTQtMy44NCAxLjkgMCAzLjUzIDEuNyAzLjUzIDMuODQgMCAyLjE1LTEuNjQgMy44My0zLjUzIDMuODMtMS45IDAtMy41NC0xLjY4LTMuNTQtMy44M3oiLz4KICA8cGF0aCBkPSJNNDIuNTkgOC43N2EyLjgzIDIuODMgMCAwIDAtMi43OCAyLjg0djguNTZoLTIuNlY2LjYzaDIuNnYxLjI0YTQuMSA0LjEgMCAwIDEgMy4zNC0xLjYzYzEuODIgMCAzLjIyLjkgNC4wMiAyLjI4YTQuOTggNC45OCAwIDAgMSA0LjEzLTIuMjhjMi45NSAwIDQuOCAyLjM4IDQuOCA1LjMzdjguNmgtMi41OFYxMS42YTIuODMgMi44MyAwIDAgMC0yLjc4LTIuODQgMi44MyAyLjgzIDAgMCAwLTIuNzggMi44NHY4LjU2aC0yLjZWMTEuNmEyLjgzIDIuODMgMCAwIDAtMi43Ny0yLjg0eiIvPgogIDxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgZD0iTTY5LjkzIDguMTdhNi4yNyA2LjI3IDAgMCAwLTQuNTctMS45M2MtMy44NiAwLTYuNiAzLjI2LTYuNiA3LjE2IDAgMy45IDIuNzQgNy4xNiA2LjYgNy4xNmE2LjMgNi4zIDAgMCAwIDQuNTctMS45M3YxLjU0aDIuNTlWNi42M2gtMi42djEuNTR6bS04LjU4IDUuMjNjMC0yLjU4IDEuOTgtNC42MyA0LjI5LTQuNjMgMi4zIDAgNC4yOSAyLjA1IDQuMjkgNC42M3MtMS45OCA0LjYyLTQuMjkgNC42MmMtMi4zIDAtNC4yOS0yLjA0LTQuMjktNC42MnoiLz4KPC9zdmc+Cg==\"]'

function replaceFooterLogo() {
    const footerLogoImg = document.querySelector(FOOTER_LOGO_SELECTOR)
    if (footerLogoImg) {
        const newLogo = document.createElement('img')
        newLogo.src = '/static-override/ligma_text.svg'
        newLogo.width = 100
        newLogo.height = 36
        newLogo.style.marginBottom = '24px'
        footerLogoImg.replaceWith(newLogo)
    }
}

const ICON_SELECTOR = 'link[rel=icon]'
const APPLE_ICON_SELECTOR = 'link[rel=apple-touch-icon]'
const SHORTCUT_ICON_SELECTOR = 'link[rel=\"shortcut icon\"]'

function removeBySelector(selector) {
    const nodes = document.querySelectorAll(selector)
    nodes.forEach((e) => { e.parentNode.removeChild(e) })
}

function replaceFavicon() {
    removeBySelector(ICON_SELECTOR)
    removeBySelector(APPLE_ICON_SELECTOR)
    removeBySelector(SHORTCUT_ICON_SELECTOR)
    const newLink = document.createElement('link')
    newLink.rel = 'icon'
    newLink.type = 'image/svg+xml'
    newLink.href = HEADER_NEW_LOGO_SRC
    document.querySelector('head').appendChild(newLink)
}

document.addEventListener("DOMContentLoaded", function() {
    const observer = new MutationObserver(() => {
        replaceHeaderLogo()
        replaceFooterLogo()
        replaceFavicon()
    })
    
    observer.observe(document.body, {
        childList: true,
        attributes: true,
        subtree: true
    })
  });
