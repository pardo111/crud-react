import { useEffect, useState } from "react";
import axios from "axios";

const ModalEditProduct = ({ idEdit, setShowModal, getAllProducts }) => {
  const [dataProduct, setDataProduct] = useState({
    nombre: "",
    descripcion: "",
    precio: 0,
  });

  const apiUrl = "http://localhost/products/api.php";
  const config = {
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
  };

  const getProduct = async () => {
    try {
      const res = await axios.get(`${apiUrl}/productos/${idEdit}`, config);
      setDataProduct(res.data);
    } catch (error) {
      console.error("Error al obtener el producto:", error);
    }
  };

  const handleChange = (e) => {
    setDataProduct({ ...dataProduct, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`${apiUrl}/productos/${idEdit}`, dataProduct, config);
      getAllProducts();
      setShowModal(false);
    } catch (error) {
      console.error("Error al actualizar el producto:", error);
    }
  };

  useEffect(() => {
    if (idEdit) getProduct();
  }, [idEdit]);

  return (
    <>
      <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
        <div className="relative w-1/2 my-6 mx-auto">
          <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
            <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
              <h3 className="text-3xl font-semibold">Editar producto</h3>
              <button
                onClick={() => setShowModal(false)}
                className="p-1 ml-auto bg-transparent border-0 text-black opacity-1 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
              >
                ×
              </button>
            </div>
            <div className="flex items-center justify-center w-full">
              <form onSubmit={handleSubmit} className="w-4/5 mx-auto py-4">
                <div className="flex flex-wrap -m-2">
                  <div className="p-2 w-1/2">
                    <label
                      htmlFor="nombre"
                      className="leading-7 text-sm text-gray-600"
                    >
                      Nombre
                    </label>
                    <input
                      type="text"
                      id="nombre"
                      name="nombre"
                      value={dataProduct.nombre}
                      onChange={handleChange}
                      className="w-full bg-gray-100 rounded border border-gray-300 focus:ring-2 focus:ring-indigo-200 text-gray-700 py-1 px-3"
                      required
                    />
                  </div>
                  <div className="p-2 w-1/2">
                    <label
                      htmlFor="precio"
                      className="leading-7 text-sm text-gray-600"
                    >
                      Precio
                    </label>
                    <input
                      type="number"
                      id="precio"
                      name="precio"
                      value={dataProduct.precio}
                      onChange={handleChange}
                      className="w-full bg-gray-100 rounded border border-gray-300 focus:ring-2 focus:ring-indigo-200 text-gray-700 py-1 px-3"
                      required
                    />
                  </div>
                  <div className="p-2 w-full">
                    <label
                      htmlFor="descripcion"
                      className="leading-7 text-sm text-gray-600"
                    >
                      Descripción
                    </label>
                    <textarea
                      id="descripcion"
                      name="descripcion"
                      value={dataProduct.descripcion}
                      onChange={handleChange}
                      className="w-full bg-gray-100 rounded border border-gray-300 focus:ring-2 focus:ring-indigo-200 text-gray-700 py-1 px-3 h-32"
                      required
                    />
                  </div>
                  <div className="p-2 w-full">
                    <button
                      type="submit"
                      className="flex mx-auto text-white bg-indigo-500 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded"
                    >
                      Actualizar Producto
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
    </>
  );
};

export default ModalEditProduct;
