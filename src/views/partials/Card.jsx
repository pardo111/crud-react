const Card = ({ img, imgAlt, title, description, price, clickEdit, clickDelete, dataKey }) => {
  return (
    <div
      id={dataKey}
      className="p-4 md:w-1/3 sm:mb-0 mb-6 hover:scale-105 transition duration-300 hover:text-cyan-300"
    >
      <div className="rounded-lg h-64 overflow-hidden">
        <img
          alt={imgAlt}
          className="object-cover object-center h-full w-full"
          src={img}
        />
      </div>
      <h1 className="text-3xl font-medium title-font mt-5 truncate" title={title}>
  {title}
</h1>      <h2 className="text-xl font-medium title-font mt-5 truncate">{price}</h2>
      <p className="text-base leading-relaxed mt-2 truncate">{description}</p>
<div className=" flex flex-row flex-wrap justify-around pt-3 ">
<button
        className="px-6 py-3 bg-green-600 hover:bg-green-400 text-white hover:scale-105 transition duration-300 w-1/3"
        onClick={clickEdit}
      ><i class="fa-solid fa-pen-to-square pr-3"></i>
        Editar Producto
      </button>
      <button
        className="px-6 py-3 bg-red-600 hover:bg-red-400 text-white hover:scale-105 transition duration-300 w-1/3"
        onClick={clickDelete}
      >      <i class="fa-solid fa-trash pr-3"></i>
        Borrar Producto
      </button>
</div>
    </div>
  );
};

export default Card;
