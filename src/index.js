import 'babel-polyfill'
import dva from 'dva-react-router-3'
import './reset.css'
// 1. Initialize
export const app = dva()

// 2. Model
app.model(require('./models/app.js'))

// 3. Router
app.router(require('./router'))

// 4. Start
app.start('#root')
