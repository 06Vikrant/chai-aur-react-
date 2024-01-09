function customRender(reactElement, container) {
    // // creating an element
    // const domElement = document.createElement(reactElement.type)
    // // adding the children
    // domElement.innerHTML = reactElement.children
    // // setting attributes
    // domElement.setAttribute('href', reactElement.props.href)
    // domElement.setAttribute('_target', reactElement.props.target)
    // // appending children to the container
    // container.appendChild(domElement)

    /* MODULAR CODE i.e, refactor*/
    const domElement = document.createElement(reactElement.type)
    domElement.innerHTML = reactElement.children
    // looping through the attributes
    for(const prop in reactElement.props) {
        // if prop has an children then 
        if (prop === 'children') continue;
        domElement.setAttribute(prop, reactElement.props[prop])
    }
    container.appendChild(domElement);

}


// React under the hood
const reactElement = {
    type: 'a',
    props: {
        href: 'https://react.dev',
        target: '_blank'
    },
    children: 'Click me to visit react website'
}

const container = document.querySelector('#root');

// render the element
// (what to inject, where to inject)
customRender(reactElement, container)