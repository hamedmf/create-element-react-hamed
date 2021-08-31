const hamedReact = {}

hamedReact.CreateElement = function (tag, props, ...etc) {

    const element = document.createElement(tag);
    let { style, className, children, ...attributes } = props;


    if(etc.length) children = etc
  
    children.forEach(value => {
        element.append(value)
    }
    );
    if(style){

        for (key in style) {
            element.style[key] = style[key]
        }
    }
     
    if(className){
        element.className = className
    }

    for (key in attributes) {
        element.setAttribute(key, attributes[key])
    }

    return element
}

window.hamedReact = hamedReact;