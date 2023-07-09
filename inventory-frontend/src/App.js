
import {Products} from "./components/Products";
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import { ProductsCreate } from "./components/ProductsCreate";
import { Orders } from "./components/Orders";

function App() {
  return <BrowserRouter>
    <Routes>
      <Route path="/" exact element={<Products />} />
      <Route path="/create" exact element={<ProductsCreate />} />
      <Route path="/orders" exact element={<Orders />} />
    </Routes>
  </BrowserRouter>;
}

// function App() {
//   return <Products />

// }

export default App;
