import './App.css';
import Login from './components/login';
import chatRoom from './components/chatroom';

import { Route, Switch, BrowserRouter } from 'react-router-dom';
// import AppProvider from './context/AppProvider';
import AuthProvider from './context/AuthProvider';
function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        {/* <AppProvider> */}
          <Switch>
            <Route component={Login} path='/login' />
            <Route component={chatRoom} path='/' />
          </Switch>
        {/* </AppProvider> */}
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
