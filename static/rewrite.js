function replaceHeaderLogo() {
    const headerLogoSvg = document.querySelector('a[aria-current=page] > svg')
    if (headerLogoSvg) {
        const newLogo = document.createElement(
            'img',
        )
        newLogo.src = '/static-override/ligma.svg'
        newLogo.width = 37
        newLogo.height = 67
        headerLogoSvg.replaceWith(newLogo)
    }
}

function replaceFooterLogo() {
    const footerLogoImg = document.querySelector('a[aria-current=page] > img[alt=Figma]')
    if (footerLogoImg) {
        const newLogo = document.createElement('img')
        newLogo.src = '/static-override/ligma_text.svg'
        newLogo.width = 100
        newLogo.height = 36
        newLogo.style.marginBottom = '24px'
        footerLogoImg.replaceWith(newLogo)
    }
}

const observer = new MutationObserver(() => {
    replaceHeaderLogo()
    replaceFooterLogo()
})

observer.observe(document, {
    childList: true,
    attributes: true,
    subtree: true
})