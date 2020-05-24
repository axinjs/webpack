import avatar from '../statics/images/aa.jpeg'

export default function createAvatar(){
  var img = new Image
  img.src = avatar
  img.classList.add('avatar')
  var root = document.getElementById('root')
  root.append(img)  
}

