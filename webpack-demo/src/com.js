// function getComponentbak(){
//   return import(/* webpackChunkName: "loadsh" */'lodash').then(({ default: _}) => {
//     var element = document.createElement('div')
//     element.innerHTML = _.join(['jsxin', 'hello'], '-')
//     return element
//   })
// }

// async function getComponent() {
//   const { default: _ } = await import(/* webpackChunkName: "loadsh" */'lodash')
//     const element = document.createElement('div')
//     element.innerHTML = _.join(['jsxin', 'hello'], '-')
//     return element
// }

// document.addEventListener('click', () => {
//   getComponent().then(element => {
//     document.body.appendChild(element)
//   })
// })

document.addEventListener('click', () => {
  import(/* webpackPrefetch: true */'./click.js').then(({ default: _ }) => {
    _()
  })
})