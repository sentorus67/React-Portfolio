// Bringing in the required import from 'react-router-dom'
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { Outlet } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  // The Outlet component will conditionally swap between the different pages according to the URL
  return (
    <>
    <Header/>
    
    <main className="mx-3" >
      <Outlet />
    </main>

    <div>
      <Footer/>
    </div>

    </>
  );
}

export default App;
