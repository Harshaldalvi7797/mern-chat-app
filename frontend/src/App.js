import React from 'react'
import "./App.css";
import { Button, ButtonGroup } from '@chakra-ui/react'
import { Route } from "react-router-dom";
import Homepage from './Pages/Homepage';
import Chatpage from './Pages/Chatpage';
const App = () => {
  return (
    <React.Fragment>
      <div className="App">
        <Route path="/" component={Homepage} exact />
        <Route path="/chats" component={Chatpage} />
      </div>
    </React.Fragment>
  )
}
export default App
