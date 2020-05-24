import avatar from '../statics/images/aa.jpeg'
import style from '../statics/style/m.scss'
import createAvatar from './m2'

createAvatar()

var img = new Image
img.src = avatar
img.classList.add(style.avatar)
var root = document.getElementById('root')
root.append(img)