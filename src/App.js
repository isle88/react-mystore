import { BrowserRouter, Route, Routes } from 'react-router-dom';

import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Products from './components/Products';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
     <Header/>
     <Routes>
      <Route path='/' element={<Products />} />
     </Routes>
     <Footer />
    </div>
    </BrowserRouter>
  );
}

export default App;
