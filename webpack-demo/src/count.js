function count(){
  var div = document.createElement('div')
  div.setAttribute('id', 'count')
  div.innerHTML = 1
  div.onclick = function () {
    div.innerHTML = parseInt(div.innerHTML, 10) + 1 // 按照十进制解析+1
  }
  document.body.appendChild(div)
}

export default count
