import { ModalContext } from '@contexts/ModalContext'
import 'react-day-picker/dist/style.css'
import ReactDOM from 'react-dom/client'
import App from './App'
import './scss/global.scss'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <ModalContext>
    <App />
  </ModalContext>,
)
