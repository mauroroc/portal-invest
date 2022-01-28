import { Routes, Route } from 'react-router-dom'
import Carteira from './Views/Carteira';
import Home from "./Views/Home";
import Tickers from './Views/Tickers';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/carteiras" element={<Carteira />} />
      <Route path="/tickers/:id" element={<Tickers />} />
    </Routes>
  );
}

export default App;
