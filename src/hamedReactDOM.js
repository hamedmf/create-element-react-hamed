const hamedReactDOM = {}
hamedReactDOM.render = function (element, root) {
    root.appendChild(element)
}
window.hamedReactDOM = hamedReactDOM