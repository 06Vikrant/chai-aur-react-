import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'


// function MyApp() {
//   return (
//     <div>
//       <h2>welcome to chai aur react series</h2>
//     </div>
//   )
// }

// Custom react component
// const ReactElement = {
//   type: 'a',
//   props: {
//       href: 'https://react.dev',
//       target: '_blank'
//   },
//   children: 'Click me to visit react website'
// }

// const anotherElement = (
//   <a href="https://react.dev" target='_blank'></a>
// )

const userName = 'chai aur react'
 const reactElement = React.createElement(
  // 1st param: HTML tag
  'a',
  // 2nd param: add props like href
  {
    href: 'https://react.dev',
    target: '_blank'
  },
  // 3rd param: add text
  'click me to visit react website',

  // parsing the user name param
  userName
 )

ReactDOM.createRoot(document.getElementById('root')).
render(
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>

  // *************OR********* //

  // MyApp()
  // anotherElement
  reactElement
)
