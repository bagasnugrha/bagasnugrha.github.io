import Contact from './components/Contact';
import Navbar from './components/Navbar'
import Profile from './components/Profile';
import Projects from './components/Projects';

function App() {
  return (
    <>
      <div className="grid gap-y-10">
        <Navbar/>
        <Profile/>
        <Projects/>
        <Contact/>
      </div>
    </>
  );
}

export default App;