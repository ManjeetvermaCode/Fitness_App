//index.js is the file where we connect our project to the DOM
import  ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'

import App from './App'
const root=ReactDOM.createRoot(document.getElementById('root'))

root.render(
    <BrowserRouter>
        <App/>

    </BrowserRouter>
)