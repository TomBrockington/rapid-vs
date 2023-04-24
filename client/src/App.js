import { Route, Routes } from 'react-router-dom';
// Analytics
import ReactGA from 'react-ga';
// Components
import Homepage from './pages/home/HomePage';

function App() {
  ReactGA.initialize('G-5TSPX20DLD');
  ReactGA.pageview('/');

  return (
    <>
      <Routes>
        <Route path='/' element={<Homepage />} index />
      </Routes>
    </>
  );
}

export default App;
