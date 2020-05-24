// 使用import...from 方式引入
import avatar from '../statics/images/aa.jpeg'
// import '../statics/style/index.css'
import '../statics/style/index.scss'

var img = new Image
img.src = avatar
img.classList.add('avatar')
var root = document.getElementById('root')
root.append(img)