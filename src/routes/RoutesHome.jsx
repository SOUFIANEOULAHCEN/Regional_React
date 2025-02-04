import React, { useState, useEffect } from "react";
import { Link, Outlet } from "react-router-dom";

const RoutesHome = () => {
  const [showButton, setShowButton] = useState(true);
  const [loading, setLoading] = useState(false);

  const handleClick = () => {
    setShowButton(false);
    setLoading(true);
  };

  useEffect(() => {
    let timer;
    if (loading) {
      timer = setTimeout(() => {
        setLoading(false);
      }, 2000);
    }
    return () => clearTimeout(timer); // Nettoyer le timer
  }, [loading]);

  return (
    <div className="min-h-screen bg-gray-900 flex justify-center items-center">
      {showButton ? (
        <div className="grid grid-cols-2 gap-4 w-4/5">
          {/* <Link
            to="/Posts"
            className="btn bg-gray-100 text-gray-900 shadow-lg font-semibold px-4 py-2 rounded-lg hover:bg-gray-300 hover:text-gray-950 hover:scale-[1.05] duration-300 transition"
            onClick={handleClick}
          >
            Gestion des Posts
          </Link> */}

          <Link
            to="/Synthese3"
            className="btn bg-gray-100 text-gray-900 shadow-lg font-semibold px-4 py-2 rounded-lg hover:bg-gray-300 hover:text-gray-950 hover:scale-[1.02] duration-300 transition"
            onClick={handleClick}
          >
           Application de Gestion de Playlists Vidéos
          </Link>

          <Link
            to="/Synthese4"
            className="btn bg-gray-100 text-gray-900 shadow-lg font-semibold px-4 py-2 rounded-lg hover:bg-gray-300 hover:text-gray-950 hover:scale-[1.02] duration-300 transition"
            onClick={handleClick}
          >
           Analyse des ventes du magasin
          </Link>
        </div>
      ) : loading ? (
        <div className="flex items-center justify-center h-screen z-50">
          <div className="flex items-center space-x-4">
            <div className="animate-spin rounded-full h-4 w-4 border-t-2 border-b-2 border-white"></div>
            <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-white"></div>
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-white"></div>
          </div>
          <span className="text-gray-100">Chargement en cours...</span>
        </div>
      ) : (
        <Outlet />
      )}
    </div>
  );
};

export default RoutesHome;
