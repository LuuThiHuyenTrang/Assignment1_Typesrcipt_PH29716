import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/Home";
import { useEffect, useState } from "react";
import axios from "axios";
import DetailPage from "./pages/Detail";
import Dashboard from "./pages/Admin/Dashboard";
import Product from "./pages/Admin/Product";
import AddProduct from "./pages/Admin/AddProduct";
import UpdateProduct from "./pages/Admin/UpdateProduct";

function App() {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  const allPro = async () => {
    await axios.get("http://localhost:3000/products").then(({ data }) => {
      setProducts(data);
    });
  };
  useEffect(() => {
    allPro();
  }, []);

  const deletePro = async (id) => {
    const confirm = window.confirm("Are you sure you want to delete?");
    if (confirm) {
      await axios.delete(`http://localhost:3000/products/${id}`).then(() => {
        alert("Delete Successfully");
        setProducts(products.filter((pro) => pro.id !== id));
      });
    }
  };

  const addPro = async (product) => {
    await axios.post(`http://localhost:3000/products`, product);
    allPro();
    navigate("/admin/product");
    alert("Product added successfully");
  };

  const editPro = async (id, product) => {
    await axios.put(`http://localhost:3000/products/${id}`, product);
    allPro();
    navigate("/admin/product");
    alert("Product update successfully");
  };
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage products={products} />} />
        <Route
          path="/detail/:id"
          element={<DetailPage products={products} />}
        />
        <Route path="/admin/dashboard" element={<Dashboard />} />
        <Route
          path="/admin/product"
          element={<Product products={products} delete={deletePro} />}
        />
        <Route
          path="/admin/product/add"
          element={<AddProduct add={addPro} />}
        />
        <Route
          path="/admin/product/update/:id"
          element={<UpdateProduct edit={editPro} />}
        />
      </Routes>
    </div>
  );
}

export default App;
