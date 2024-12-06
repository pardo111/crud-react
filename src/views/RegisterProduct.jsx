import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const RegisterProduct = () => {
  const navigate =  useNavigate();
  const apiUrl = "http://localhost/products/api.php";
  let config = {
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
  };
  const [dataProducts, setDataProducts] = useState({
    name: "",
    description: "",
    price: 0,
  });

  const handelChange = (e) =>{
    //Actualizando el valor segun propiedad y valor que proviene del  
    setDataProducts({...dataProducts, [e.target.name]: e.target.value});
}

const handelSubmit = async (e) =>{
    e.preventDefault();
    console.log(dataProducts);
    await axios.post(`${apiUrl}/productos`, dataProducts, config)
    .then(response =>{
        console.log(response);  
        navigate("/catalogo");
     })
    .catch(err =>{
        console.log(err);
    })
}

  return (
    <div className="">
      {/* <!-- component -->
<!-- The component code starts  --> */}
      <div className="hero from-cyan-600 via-blue-300 to-purple-500 bg-gradient-to-br m-0 h-screen flex flex-col items-center justify-center ">
        <div className="heading mx-auto text-center">
          <h1 className="mx-auto my-5 text-center sm:text-4xl text-3xl font-bold text-white">
            Registrar Producto
          </h1>
        </div>
        <div className="form-portion bg-stone-100 sm:w-[80%] w-[90%] mx-auto">
          <form onSubmit={handelSubmit} className="p-5 mt-5">
            <div className="initials flex md:flex-row flex-col justify-evenly">
              <label htmlFor="name" className="text-xl md:mb-0 mb-1">
                Nombre :
              </label>
              <input
                type="text"
                name="name"
                id=""
                placeholder="Ingresa el nombre del producto aqui"
                className="md:w-[35%] w-1/1 px-4 py-2 md:mb-0 mb-3 rounded-xl"
                onChange={handelChange}
                required
              />

              <label htmlFor="price" className="text-xl md:mb-0 mb-1">
                precio :
              </label>
              <input
                type="number"
                name="price"
                id=""
                placeholder="Ingresa el precio aqui"
                className="md:w-[35%] w-1/1 px-4 py-2 rounded-xl"
                onChange={handelChange}
                required
              />
            </div>
            <div className="md:p-5 p-1 sm:mt-1 mt-1">
              <div className="mt-5">
                <label htmlFor="description" className="text-xl">
                  Descripcion :{" "}
                </label>
                <br />
                <textarea
                  name="description"
                  rows="5"
                  placeholder="La descripcion del producto va aqui"
                  className="w-[100%] px-4 py-2 rounded-xl appearance-none text-heading text-md"
                  autoComplete="off"
                  spellCheck="false"
                  onChange={handelChange}
                  required
                ></textarea>
              </div>
            </div>
            <div className="btn mt-2 w-[100%] bg-transparent flex items-center">
              <button
                type="submit"
                className="px-4 py-2 mx-auto rounded-xl text-center text-xl bg-black text-white hover:text-black hover:bg-white  hover:shadow-xl transition duration-300"
              >
                Registrar Producto
              </button>
            </div>
          </form>
        </div>
      </div>
      {/* <!-- The component code ends --> */}
    </div>
  );
};

export default RegisterProduct;
