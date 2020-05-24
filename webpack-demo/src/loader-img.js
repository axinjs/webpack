// 使用import...from 方式引入
import avator from '../statics/images/aa.jpeg'

var img = new Image
img.src = avator
var root = document.getElementById('root')
root.append(img)