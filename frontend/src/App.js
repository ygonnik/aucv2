import React, {useContext, useState, useEffect} from 'react';
import {BrowserRouter} from 'react-router-dom';
import AppRouter from './components/AppRouter';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import { observer } from 'mobx-react-lite';
import { Context } from './index';
import {check} from './http/userAPI'
import {fetchUsersNicknames, fetchMessages} from '../src/http/userAPI'
const App = observer(() => {
    const {user} = useContext(Context)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
      check().then(data => {
        user.setUser(data)
        user.setIsAuth(true)
        fetchMessages(user.user.id)
        .then(data => {
          user.setMessages(data)
        }).then(fetchUsersNicknames()
        .then(data => {
          let interlocutors = []
          let interlocutorsId = []

          for (let message of user.messages) {
            if (!interlocutorsId.includes(message.user2Id)) {
                interlocutors.push({
                  id: message.user2Id,
                  nickname: data.find(user => user.id === message.user2Id).nickname})
                interlocutorsId.push(message.user2Id)
            }
          }
          user.setInterlocutors(interlocutors)}))
        
      }).finally(() => setLoading(false))
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
