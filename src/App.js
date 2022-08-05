import { Routes, Route } from "react-router-dom";
import Home from './tabs/Home';
import Contact from './tabs/contact';
import Divers from './tabs/divers';
import Education from './tabs/education';
import Experience from './tabs/experience';
import Skills from './tabs/skills';

function App() {
  return (
    <div>
      <Routes>
          <Route path='/' element={<Home />}>
            <Route path='Experience' element={<Experience />}></Route>
            <Route path='Education' element={<Education />}></Route>
            <Route path='Skills' element={<Skills />}></Route>
            <Route path='Divers' element={<Divers />}></Route>
            <Route path='Contact' element={<Contact />}></Route>
          </Route>
        </Routes>
    </div>
  );
}

export default App;
