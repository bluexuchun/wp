import _ from 'lodash';
import './style.css';
import Bg from './bg.jpg';
import Data from './data.xml';
import printMe from './print.js';

function component(){
  var element = document.createElement('div');
  var btn = document.createElement('button');

  // Lodash (目前通过一个script脚本引入) 对于执行这一行是必需的
  element.innerHTML = _.join(['hello','webpack'],' ');
  element.classList.add('hello');

  btn.innerHTML = 'click me and check the console!'
  btn.onclick = printMe;

  element.appendChild(btn);

  // 将图片添加到div中
  var bg = new Image();
  bg.src = Bg;

  let dataAry = ['1','2','3'];
  console.log([...dataAry]);

  element.appendChild(bg);

  console.log(Data)

  return element;
}

document.body.appendChild(component());
