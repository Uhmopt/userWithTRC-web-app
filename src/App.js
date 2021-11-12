import { BrowserRouter as Router } from 'react-router-dom'
import './App.css'
import 'toastr/build/toastr.min.css'
import { ConfirmProvider } from 'material-ui-confirm'
import routes from './routes'
import PrivateRoute from './routes/Private'
import AdminRoute from './routes/Admin'
import PublicRoute from './routes/Public'
import SplitRoute from './routes/Split'

const base = process.env.PUBLIC_URL || '/'
function App() {
  return (
    <ConfirmProvider>
      <Router basename={base}>
        {routes.map((route) => {
          if (route.auth && route.fallback) {
            return <SplitRoute key={route.path} {...route} />
          } else if (route.auth && route.admin) {
            return <AdminRoute key={route.path} {...route} />
          } else if (route.auth && !route.admin) {
            return <PrivateRoute key={route.path} {...route} />
          }
          return <PublicRoute key={route.path} {...route} />
        })}
      </Router>
    </ConfirmProvider>
  )
}

export default App
