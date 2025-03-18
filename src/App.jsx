import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css'
import NavBar from './components/navbar/navbar'; 
import ItemListContainer from './components/itemlist-container/ItemListContainer';

function App() {
  return (
    <>
    <BrowserRouter>
     <NavBar />
     {/* <ItemListContainer/> */}
     <Routes>
        
        <Route path="/" element={<ItemListContainer/>} />
        <Route path="/categoria/:categoria" element={<ItemListContainer />} /> 
        <Route path="*" element={<p>404 ROUTE NOT FOUND</p>} />
      </Routes>
    </BrowserRouter>
    </>
); 
}

export default App
