import './App.css';
import NotesGrid from './components/NotesGrid'
import SideBar from './components/SideBar'
import {Provider} from 'react-redux'
import store from './store'
import {Fragment} from "react";

function App() {
  return (
    <Provider store={store}>
      <div className='app'>
        <NotesGrid/>
        <SideBar/>
      </div>
    </Provider>
  );
}

export default App;
