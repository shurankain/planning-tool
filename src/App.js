import './App.css';
import NotesGrid from './components/NotesGrid'
import SideBar from './components/SideBar'
import EditNoteModal from "./components/modals/EditNoteModal";
import {Provider} from 'react-redux'
import store from './store'
import {Fragment} from "react";

function App() {
  return (
    <Provider store={store}>
      <div className='app'>
        <NotesGrid/>
        <SideBar/>
        <EditNoteModal/>
      </div>
    </Provider>
  );
}

export default App;
