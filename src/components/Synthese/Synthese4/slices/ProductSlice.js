import { createSlice } from "@reduxjs/toolkit";
import { products } from "../data/data";

const productSlice = createSlice({
  name: "products",
  initialState: {
    products: products,
    filteredProducts: products,
    category: "toutes",
    ChiffreAffaire: 0,
  },
  reducers: {
    FiltreProducts: (state, action) => {
      const category = action.payload;
      state.category = category;

      if (category === "toutes") {
        state.filteredProducts = state.products;
      } else {
        state.filteredProducts = state.products.filter(
          (pro) => pro.nom === category
        );
      }
    },

    CalculeChiffreAffaire: (state, action) => {
      const categorie = action.payload;
      state.category = categorie;

      if (categorie === "toutes") {
        state.ChiffreAffaire = state.products.reduce(
          (total, product) =>
            total +
            product.prix *
              product.ventes_mensuelles.reduce(
                (sum, ventes) => sum + ventes,
                0
              ),
          0
        );
      } else {
        state.ChiffreAffaire = state.products
          .filter((product) => product.categorie === categorie)
          .reduce(
            (total, product) =>
              total +
              product.prix *
                product.ventes_mensuelles.reduce(
                  (sum, ventes) => sum + ventes,
                  0
                ),
            0
          );
      }
    },
  },
});

export const { FiltreProducts, CalculeChiffreAffaire } = productSlice.actions;
export default productSlice.reducer;
