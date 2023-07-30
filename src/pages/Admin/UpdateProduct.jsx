import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const UpdateProduct = (props) => {
  const { id } = useParams();
  const [product, setProduct] = useState({});

  useEffect(() => {
    axios.get(`http://localhost:3000/products/${id}`).then(({ data }) => {
      setProduct(data);
    });
  }, []);

  const [inputValue, setInputValue] = useState({
    name: product.name,
    price: product.price,
  });

  const onChangeInput = (e) => {
    const { name, value } = e.target;
    setInputValue({ ...inputValue, [name]: value });
  };

  const submit = (e) => {
    e.preventDefault();
    if (inputValue.name == "") {
      alert("Khong de trong name product");
    } else if (inputValue.price == "") {
      alert("Khong de trong price product");
    } else if (inputValue.price <= 0) {
      alert("price product phai > 0");
    } else {
      props.edit(id, inputValue);
    }
  };
  return (
    <div>
      <h1>Update Product</h1>
      <form onSubmit={submit}>
        <input
          type="text"
          name="name"
          placeholder="Name"
          onChange={onChangeInput}
          defaultValue={product?.name}
        />
        <input
          type="number"
          name="price"
          placeholder="Price"
          onChange={onChangeInput}
          defaultValue={product?.price}
        />
        <input type="submit" placeholder="Add" />
      </form>
    </div>
  );
};

export default UpdateProduct;
