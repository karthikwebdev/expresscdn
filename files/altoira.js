(()=>{
    let vendorFile = document.createElement( 'script' )
    vendorFile.type = 'module'
    vendorFile.crossOrigin = true
    vendorFile.src = "https://expresscdn.herokuapp.com/altoira/index.js"
    let jsFile = document.createElement( 'link')
    jsFile.rel = "modulepreload"
    jsFile.href = "https://expresscdn.herokuapp.com/altoira/vendor.js"
    let cssFile = document.createElement( 'link')
    cssFile.rel= "stylesheet"
    cssFile.href = "https://expresscdn.herokuapp.com/altoira/index.css"
    document.head.appendChild(vendorFile);
    document.head.appendChild(jsFile);
    document.head.appendChild(cssFile);
})()