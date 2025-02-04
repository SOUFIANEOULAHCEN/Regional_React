import React from "react";
import { products } from "./data/data";
import { useNavigate } from "react-router-dom";
import { FaCaretLeft } from "react-icons/fa6";

export default function Template() {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen px-6 py-4">
      <button
        onClick={() => {
          navigate("/");
        }}
        className="btn  flex items-center justify-center rounded-lg p-3 border border-gray-100 bg-opacity-30 backdrop-blur-lg backdrop-filter shadow-lg hover:bg-gray-100 hover:text-gray-900 duration-300 transition-all my-4"
      >
        <span className="text-xl">
          <FaCaretLeft />
        </span>
        <span>Home</span>
      </button>
      <div className=" w-full bg-gray-900 grid grid-cols-[1fr_3fr] gap-4  ">
        <div className="border border-gray-100 backdrop-blur bg-gray-100 bg-opacity-30 rounded-sm p-2">
          <h1 className="text-gray-100 text-center text-xl mt-4 mb-2">
            Categories
          </h1>
          <ul className="text-gray-300 flex flex-col gap-2 mt-4 text-center">
            {products.map((product) => (
              <li
                className="border border-gray-200 rounded-xl px-6 py-2 hover:bg-gray-200 hover:text-gray-900 duration-300 transition-all"
                key={product.reference}
              >
                {product.nom}
              </li>
            ))}
          </ul>
        </div>
        <div className="border border-gray-100 backdrop-blur bg-gray-100 bg-opacity-30 rounded-sm py-2 px-4">
          <h1 className="text-2xl text-gray-100 mt-4">Liste des Produits</h1>
          <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-3">
            {/* liste des Cards */}

            <div className="card bg-base-100 w-full shadow-xl">
              <figure>
                <img
                  src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                  alt="Shoes"
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title">Shoes!</h2>
                <p>If a dog chews shoes whose shoes does he choose?</p>
                <div className="card-actions justify-end">
                  <button className="btn btn-primary">Buy Now</button>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
