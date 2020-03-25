import _ from 'lodash';
import './style.css';
//import Icon from './Icon.png';
import printMe from './print.js';

function component() {
    const element = document.createElement('div');
    const btn = document.createElement('button');

    element.innerHTML = _.join(['Hello', 'webpack'], ' ');

    btn.innerHTML = 'Click me and check the console!';
    btn.onclick = printMe;

    element.appendChild(btn);

    //element.classList.add('hello');

    // Add the image to our existing div
    //const myIcon = new Image();
    //myIcon.src = Icon;

    //element.appendChild(myIcon);

    return element;
}

let element = component(); // Store the element  to re-render on print.js changes
document.body.appendChild(element);

if (module.hot) {
    module.hot.accept('./print.js', function() {
        console.log('Accept the updated printMe module!');
        document.body.removeChild(element);
        element = component(); // Re-render the "component" to update the click handler
        document.body.appendChild(element);
    })
}