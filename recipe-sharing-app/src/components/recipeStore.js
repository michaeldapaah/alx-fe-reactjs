import { create } from 'zustand';

const useRecipeStore = create(set => ({
  recipes: [],
  favorites: [], // Stores user\u2019s favorite recipes

  // Add a new recipe
  addRecipe: (newRecipe) => set(state => ({
    recipes: [...state.recipes, { id: Date.now(), ...newRecipe }]
  })),

  // Add recipe to favorites
  addFavorite: (recipeId) => set(state => ({
    favorites: state.favorites.includes(recipeId)
      ? state.favorites
      : [...state.favorites, recipeId]
  })),

  // Remove recipe from favorites
  removeFavorite: (recipeId) => set(state => ({
    favorites: state.favorites.filter(id => id !== recipeId)
  })),

  // Generate recommendations based on favorites
  recommendations: [],
  generateRecommendations: () => set(state => {
    const recommended = state.recipes.filter(recipe =>
      state.favorites.includes(recipe.id) && Math.random() > 0.5
    );
    return { recommendations: recommended };
  }),
}));

export default useRecipeStore;
