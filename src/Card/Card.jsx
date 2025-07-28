const Card = ({ title, image, Price, Desc, children, rating, category }) => {
  return (
    
    <div className="product-card bg-white rounded-lg shadow-md flex flex-col h-[550px] overflow-hidden">
      <div className="card-image h-48 flex items-center justify-center p-4">
        <img src={image} alt={title} className="max-h-full object-contain" />
      </div>
      <div className="card-details flex flex-col flex-grow px-4 pb-2">
        <h2 className="text-lg font-semibold line-clamp-2 mb-1">{title}</h2>

        {Desc}

        {rating != null && (
          <div className="text-yellow-500 text-sm font-medium mt-1">
            {rating} ★
          </div>
        )}
          <div className="font-semibold ">
            <p>Category : {category}</p>
            </div>

        <div className="text-lg font-bold mt-5">{Price}</div>

        <div className="mt-auto">{children}</div>
      </div>
    </div>
    
  );
};

export default Card;
