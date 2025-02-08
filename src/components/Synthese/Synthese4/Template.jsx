import React from "react";
import { useNavigate } from "react-router-dom";
import { FaCaretLeft } from "react-icons/fa6";
import { useDispatch, useSelector } from "react-redux";
import { FiltreProducts, CalculeChiffreAffaire } from "./slices/ProductSlice";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from "recharts";

export default function Template() {
  const products = useSelector((state) => state.products.products);
  const filteredProducts = useSelector(
    (state) => state.products.filteredProducts
  );
  const ChiffreAffaire = useSelector((state) => state.ChiffreAffaire);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const mois = [
    "Jan",
    "Fév",
    "Mar",
    "Avr",
    "Mai",
    "Juin",
    "Juil",
    "Août",
    "Sep",
    "Oct",
    "Nov",
    "Déc",
  ];

  // 🔹 Données pour le graphique en ligne
  const lineChartData = mois.map((m, index) => {
    let point = { mois: m };
    filteredProducts.forEach((product) => {
      point[product.nom] = product.ventes_mensuelles[index];
    });
    return point;
  });

  // 🔹 Données pour le graphique circulaire (chiffre d'affaires)
  const pieChartData = filteredProducts.map((product) => ({
    name: product.nom,
    value:
      product.ventes_mensuelles.reduce((acc, vente) => acc + vente, 0) *
      product.prix,
  }));

  const colors = [
    "#8884d8",
    "#82ca9d",
    "#FFBB28",
    "#FF8042",
    "#0088FE",
    "#00C49F",
  ];

  return (
    <div className="min-h-screen px-6 py-4">
      <button
        onClick={() => navigate("/")}
        className="btn flex items-center justify-center rounded-lg p-3 border border-gray-100 bg-opacity-30 backdrop-blur-lg backdrop-filter shadow-lg hover:bg-gray-100 hover:text-gray-900 duration-300 transition-all my-4"
      >
        <span className="text-xl">
          <FaCaretLeft />
        </span>
        <span>Home</span>
      </button>

      <div className="w-full bg-gray-900 sm:flex md:flex md:flex-row sm:flex-row lg:grid lg:grid-cols-[1fr_3fr] gap-4">
        {/* Catégories */}
        <div className="border border-gray-100 backdrop-blur sm:mb-4 bg-gray-100 bg-opacity-30 rounded-sm p-2">
          <h1 className="text-gray-100 text-center text-xl mt-4 mb-2">
            Catégories
          </h1>
          <ul className="text-gray-300 flex flex-col gap-2 mt-4 text-center">
            <li
              value="toutes"
              onClick={() => dispatch(FiltreProducts("toutes"))}
              className="border border-gray-200 rounded-xl px-6 py-2 hover:bg-gray-200 hover:text-gray-900 duration-300 transition-all"
            >
              Tous
            </li>
            {products.map((product) => (
              <li
                key={product.reference}
                onClick={() => {
                  dispatch(FiltreProducts(product.nom));
                  dispatch(CalculeChiffreAffaire(product.nom));
                }}
                className="border border-gray-200 rounded-xl px-6 py-2 hover:bg-gray-200 hover:text-gray-900 duration-300 transition-all"
              >
                {product.nom}
              </li>
            ))}
          </ul>
        </div>

        {/* Liste des produits */}
        <div className="border border-gray-100 backdrop-blur bg-gray-100 bg-opacity-30 rounded-sm py-2 px-4">
          <h1 className="text-2xl text-gray-100 mt-4 mb-2 text-center font-bold">
            Liste des Produits
          </h1>
          <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-3">
            {filteredProducts.map((pro) => (
              <div
                key={pro.reference}
                className="card w-full bg-gray-100 bg-opacity-30 text-gray-100 shadow-xl"
              >
                <figure className="w-full h-48 overflow-hidden">
                  <img
                    className="w-full h-full object-cover"
                    src={pro.image}
                    alt={pro.nom}
                  />
                </figure>
                <div className="card-body">
                  <h2 className="card-title">{pro.nom}</h2>
                  <p className="font-semibold">{pro.prix} Dh</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-3">
        {/* Diagramme en ligne */}
        <div className="border w-full border-gray-100 backdrop-blur sm:mb-4 bg-gray-100 bg-opacity-30 rounded-sm p-2 mt-4">
          <h2 className="text-xl font-bold text-gray-100 text-center mb-4">
            Évolution des ventes mensuelles
          </h2>
          <ResponsiveContainer width="100%" height={400}>
            <LineChart
              data={lineChartData}
              margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="mois" />
              <YAxis />
              <Tooltip />
              <Legend />
              {filteredProducts.map((product, index) => (
                <Line
                  key={index}
                  type="monotone"
                  dataKey={product.nom}
                  stroke={colors[index % colors.length]}
                  strokeWidth={2}
                />
              ))}
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* Diagramme circulaire */}
        <div className="border w-full border-gray-100 backdrop-blur sm:mb-4 bg-gray-100 bg-opacity-30 rounded-sm p-2 mt-4">
          <h2 className="text-xl font-bold text-gray-100 text-center mb-4">
            Répartition du chiffre d'affaires
          </h2>
          <ResponsiveContainer width="100%" height={400}>
            <PieChart>
              <Pie
                data={pieChartData}
                dataKey="value"
                nameKey="name"
                cx="50%"
                cy="50%"
                outerRadius={150}
                label
              >
                {pieChartData.map((_, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={colors[index % colors.length]}
                  />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}
