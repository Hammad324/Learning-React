const customReactElement = {
    type: 'a',
    props: {
        href: 'https://google.com',
        target: '_blanck' 
    },
    children: 'Click me to visit google.'
}

const root = document.querySelector('#root');

function customElement(customReactElement, mainContainer) {
    const element = document.createElement(customReactElement.type);
    element.innerHTML = customReactElement.children;
    for (let prop in customReactElement.props) {
        element.setAttribute(prop, customReactElement.props[prop])
    }
    mainContainer.appendChild(element)
}


customElement(customReactElement, root);