import { create } from 'zustand';

const useRecipeStore = create((set) => ({
  recipes: [], // Stores all recipes
  filteredRecipes: [], // Stores search results
  searchTerm: "",

  setSearchTerm: (term) =>
    set((state) => {
      console.log("Search term updated:", term);
      return { searchTerm: term };
    }),

  addRecipe: (newRecipe) =>
    set((state) => {
      const updatedRecipes = [...state.recipes, { id: Date.now(), ...newRecipe }];
      console.log("Recipes after adding:", updatedRecipes);
      return { recipes: updatedRecipes, filteredRecipes: updatedRecipes }; // Make sure filteredRecipes updates
    }),

  filterRecipes: () =>
    set((state) => {
      const filtered = state.recipes.filter(recipe =>
        recipe.title.toLowerCase().includes(state.searchTerm.toLowerCase())
      );
      console.log("Filtered Recipes:", filtered);
      return { filteredRecipes: filtered };
    }),
}));

export default useRecipeStore;
