import _ from 'lodash';
import './style.css'
import Icon from './kidaha.svg';
import printMe from './print.js';
function component() {
  var element = document.createElement('div');
	var btn = document.createElement('button');
  // Lodash, now imported by this script
	element.innerHTML = _.join(['Hello', 'webpack'], ' ');
	btn.innerHTML = 'Click me and check the console!';
	btn.onclick = printMe;
	element.classList.add('hello');
	element.appendChild(btn);
	// 将图像添加到我们现有的 div。
  var myIcon = new Image();
  myIcon.src = Icon;
  element.appendChild(myIcon);
  return element;
}

document.body.appendChild(component());