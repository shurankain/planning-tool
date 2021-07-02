import './App.css';
import NotesGrid from './components/NotesGrid'
import HeaderBar from './components/HeaderBar'

function App() {
  return (
    <div className="App">
      <HeaderBar/>
      <NotesGrid/>
    </div>
  );
}

export default App;
