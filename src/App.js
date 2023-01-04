import './App.css';
import Login from '../src/components/Login'
import SubmitTicket from '../src/components/SubmitTicket'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
      <Route path="/" element={<Login/>}/> 
      <Route path="/submitTicket" element={< SubmitTicket/>}/> 
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
