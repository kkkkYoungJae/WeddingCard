import { ModalContext } from '@contexts/ModalContext'
import '@scss/global.scss'
import FullScreenMessage from '@shared/FullScreenMessage'
import { Suspense } from 'react'
import 'react-day-picker/dist/style.css'
import ReactDOM from 'react-dom/client'
import { QueryClient, QueryClientProvider } from 'react-query'
import App from './App'

const queryClient = new QueryClient()

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <QueryClientProvider client={queryClient}>
    <ModalContext>
      <Suspense fallback={<FullScreenMessage type="loading" />}>
        <App />
      </Suspense>
    </ModalContext>
  </QueryClientProvider>,
)
