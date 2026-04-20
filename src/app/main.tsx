import { createRoot } from 'react-dom/client'
import '../shared/styles/index.scss'
import { App } from './ui/App'

createRoot(document.getElementById('root')!).render(<App />)
