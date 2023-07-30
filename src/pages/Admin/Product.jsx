import React from "react";
import { Link } from "react-router-dom";

const Product = (props) => {
  const deletePro = (id) => {
    props.delete(id);
  };

  return (
    <div>
      Product
      <h1>ListProduct</h1>
      <Link to={"/admin/product/add"}>
        {" "}
        <button>Add</button>
      </Link>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Price</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {props.products.map((pro, index) => {
            return (
              <tr key={index + 1}>
                <td>{pro.id}</td>
                <td>{pro.name}</td>
                <td>{pro.price}</td>
                <td>
                  <Link to={"/admin/product/update/" + pro.id}>
                    {" "}
                    <button>Edit</button>
                  </Link>
                  <button onClick={() => deletePro(pro.id)}>Delete</button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Product;
