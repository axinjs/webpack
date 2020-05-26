// import '../statics/style/btn.css'

// var btn = document.createElement('button')
// btn.innerHTML = '新增'
// document.body.appendChild(btn)
// btn.onclick = function(){
//   var div = document.createElement('div')
//   div.innerHTML = 'item'
//   document.body.appendChild(div)
// }

import count from './count'
import number from './number'

count()
number()

if(module.hot){
  module.hot.accept('./number', ()=>{
    document.body.removeChild(document.getElementById('number'))
    number()
  })
}