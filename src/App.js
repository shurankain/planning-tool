import './App.css';
import NotesGrid from './components/NotesGrid'
import SideBar from './components/SideBar'
import EditNoteModal from "./components/modals/EditNoteModal";
import {Provider} from 'react-redux'
import store from './store'
import AddNoteModal from "./components/modals/AddNoteModal";
import TasksView from "./components/modals/TasksView";

function App() {
  return (
    <Provider store={store}>
      <div className='app'>
        <NotesGrid/>
        <SideBar/>
        <EditNoteModal/>
        <AddNoteModal/>
        <TasksView/>
      </div>
    </Provider>
  );
}

export default App;
