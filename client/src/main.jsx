import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { persistor, store } from './redux/store.js'
import { PersistGate } from 'redux-persist/integration/react'
import ThemeProvider from './components/utils/ThemeProvider.jsx'
import { Provider } from 'react-redux'

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <PersistGate persistor={persistor} loading={null}>
    <ThemeProvider>
        <App />
      </ThemeProvider>
    </PersistGate>
  </Provider>
)
