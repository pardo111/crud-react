import Card from "./partials/Card";
import ModalEditProduct from "../components/modalEditProduct";
import axios from "axios";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";

const Catalogo = () => {
  const [dataProducts, setDataProducts] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [idEdit, setIdEdit] = useState(null);

  const apiUrl = "http://localhost/products/api.php";
  const config = {
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
  };

  const deleteProduct = async (id) => {
    Swal.fire({
      title: "¿Estás seguro de que deseas eliminar este producto?",
      text: "No podrás deshacer esta acción",
      icon: "warning",
      showDenyButton: false,
      showCancelButton: true,
      confirmButtonText: "Sí, eliminar",
      cancelButtonText: "Cancelar",
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          await axios.delete(
            `http://localhost/products/api.php/productos/${id}`
          );
          Swal.fire("Eliminado", "El producto ha sido eliminado", "success");

          getAllProducts();
        } catch (error) {
          console.error("Error eliminando el producto:", error);
          Swal.fire("Error", "No se pudo eliminar el producto", "error");
        }
      } else if (result.isDismissed) {
        Swal.fire("Cancelado", "No se eliminó el producto", "info");
      }
    });
  };

  const getAllProducts = async () => {
    try {
      const res = await axios.get(`${apiUrl}/productos`, config);
      setDataProducts(res.data);
    } catch (error) {
      console.error("Error al obtener productos:", error);
    }
  };

  const openModalEdit = (id) => {
    setIdEdit(id);
    setShowModal(true);
  };

  useEffect(() => {
    getAllProducts();
  }, []);

  return (
    <div>
      <section className="text-gray-400 bg-gray-900 body-font">
        <div className="container px-5 py-24 mx-auto">
          
          <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 items-center justify-center">
            {dataProducts.map((product) => (
              <Card
                key={product.id}
                dataKey={product.id}
                img={
                  product.img ||
                  "https://programacion.net/files/article/20161110041116_image-not-found.png"
                }
                imgAlt="Producto"
                title={product.nombre}
                description={product.descripcion}
                price={product.precio}
                clickEdit={() => openModalEdit(product.id)}
                clickDelete={() => {
                  deleteProduct(product.id);
                }}
              />
            ))}
          </div>
        </div>
      </section>
      {showModal && (
        <ModalEditProduct
          idEdit={idEdit}
          setShowModal={setShowModal}
          getAllProducts={getAllProducts}
        />
      )}
    </div>
  );
};

export default Catalogo;
