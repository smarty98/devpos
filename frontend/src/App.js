import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import Homepage from './Pages/Homepage';
import POSpage from './Pages/POSpage';

function App() {
  return (
    <Router>
    <Routes>
    <Route path="/" element={<Homepage/>}/>
    <Route path="/pos" element={<POSpage/>}/>
    </Routes>
    </Router>
  );
}

export default App;
