import './App.css';
import NotesGrid from './components/NotesGrid'
import SideBar from './components/SideBar'
import EditNoteModal from "./components/modals/EditNoteModal";
import {Provider} from 'react-redux'
import store from './store'
import AddNoteModal from "./components/modals/AddNoteModal";

function App() {
  return (
    <Provider store={store}>
      <div className='app'>
        <NotesGrid/>
        <SideBar/>
        <EditNoteModal/>
        <AddNoteModal/>
      </div>
    </Provider>
  );
}

export default App;
