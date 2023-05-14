import "bootstrap/dist/css/bootstrap.min.css"
import Navbar from "./components/Navbar";
import NotesList from './components/NotesList';
import NotFound from './components/NotFound';
import NoteDetails from './components/NoteDetails';

import {
  BrowserRouter,
  Routes, // instead of "Switch"
  Route,
} from "react-router-dom";
import AddNote from "./components/AddNote";

/*Using Routes instead of Switch in react-router v6*/

/*https://stackoverflow.com/questions/69843615/switch-is-not-exported-from-react-router-dom*/
/* wrap the entire HTML with BrowserRouter */
function App() {
  return (
    <BrowserRouter>
      <div>
        <Navbar/>
        <div>
            <Routes>
              <Route path="/" element={ <NotesList />} />
              <Route path="/add" element={ <AddNote />} />
              <Route path="/notes/:id" element={ <NoteDetails />} />
              <Route path="*" element={ <NotFound />} />
            </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
