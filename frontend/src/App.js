import React, {useContext, useState, useEffect} from 'react';
import {BrowserRouter} from 'react-router-dom';
import AppRouter from './components/AppRouter';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import { observer } from 'mobx-react-lite';
import { Context } from './index';
import {check} from './http/userAPI'
const App = observer(() => {
    const {user} = useContext(Context)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
      check().then(data => {
        user.setUser(true)
        user.setIsAuth(true)
        console.log('authtrue')
      }).finally(() => setLoading(false))
    }, [])

    if (loading) {
      return (
      <div class="d-flex justify-content-center position-absolute top-50 start-50 translate-middle">
        <div class="spinner-border" role="status"/>
      </div>
      )
    }

    return (
      <BrowserRouter>
        <NavBar />
        <AppRouter />
        <Footer />
      </BrowserRouter>
    );
});

export default App;
