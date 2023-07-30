import React, { useState } from 'react'

const AddProduct = (props) => {
  const [inputValue, setInputValue] = useState({name: "", price: 0  })

  const onChangeInput = (e) => {
    const {name, value} = e.target;
    setInputValue({...inputValue, [name]: value})
  } 

  const submit = (e) => {
    e.preventDefault();

    if (inputValue.name == "") {
      alert("Khong de trong name product")
    }
    else if (inputValue.price == "") {
      alert("Khong de trong price product")
    }
    else if (inputValue.price <= 0) {
      alert("price product phai > 0")
    }
    else {
      props.add(inputValue)
    }
  }
  return (
    <div>
        <h1>Add Product</h1>
        <form onSubmit={submit}>
            <input type="text" name="name" placeholder="Name" onChange={onChangeInput}/>
            <input type="number" name="price" placeholder="Price" onChange={onChangeInput}/>
            <input type="submit" placeholder="Add"  />
        </form>
    </div>
  )
}

export default AddProduct