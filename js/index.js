var ieUnsupported = document.getElementById("ie-unsupported")
var pageContent = document.getElementById("page-content")
var currentBrowser = navigator.userAgent.toLowerCase()

if (currentBrowser.indexOf("trident") > -1) {
    pageContent.style.display = "none"
    ieUnsupported.style.display = "block"
} else {
    pageContent.style.display = "block"
    ieUnsupported.style.display = "none"

    ieUnsupported.parentNode.removeChild(ieUnsupported)
}

