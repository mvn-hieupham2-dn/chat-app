import './App.css';
import Login from './components/login';
import chatRoom from './components/ChatRoom';

import { Route, Switch, BrowserRouter } from 'react-router-dom';
import AppProvider from './Context/AppProvider';
import AuthProvider from './Context/AuthProvider';
import AddRoomModal from './components/Modals/AddRoomModal';
import InviteMemberModal from './components/Modals/InviteMemberModal';

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <AppProvider>
          <Switch>
            <Route component={Login} path='/login' />
            <Route component={chatRoom} path='/' />
          </Switch>
          <AddRoomModal/>
          <InviteMemberModal />
        </AppProvider>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
