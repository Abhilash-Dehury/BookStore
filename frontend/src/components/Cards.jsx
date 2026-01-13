import React from "react";
const Cards = ({ item }) => {
  return (
    <>
      <div className="mb-10 mt-10 card bg-base-100 w-92 p-2 shadow-xl hover:shadow-2xl hover:scale-105 duration-300 cursor-pointer transition-all">
        <figure className="h-48 w-full overflow-hidden">
          <img
            src={item.image}
            alt="Books"
            className="h-full w-full object-cover"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">
            {item.name}
            <div className="badge badge-secondary text-white">
              {item.category}
            </div>
          </h2>
          <p>{item.title}</p>
          <div className="card-actions flex justify-between mt-4">
            <div className="badge badge-outline">${item.price}</div>
            <div className="cursor-pointer px-2 py-1 border hover:bg-pink-500 hover:text-white rounded-lg duration-300">
              Bye Now
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Cards;
