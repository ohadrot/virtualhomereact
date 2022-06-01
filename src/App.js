import logo from './logo.svg';
import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import {Link} from 'react-router-dom'
import Page1 from './Componente/Page1';
import Page2 from './Componente/Page2';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Link to='/'><button>page1</button></Link>
      <Link to='/page2'><button>page2</button></Link>
      <Routes>
        <Route path='/' element ={<Page1/>}/>
        <Route path='/page2' element={<Page2/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
