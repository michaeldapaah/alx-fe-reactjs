import React from 'react';
import { Link } from 'react-router-dom';
import useRecipeStore from './recipeStore';

const RecipeList = () => {
  const recipes = useRecipeStore(state => state.recipes);
  const favorites = useRecipeStore(state => state.favorites);
  const addFavorite = useRecipeStore(state => state.addFavorite);
  const removeFavorite = useRecipeStore(state => state.removeFavorite);

  return (
    <div>
      {recipes.map(recipe => (
        <div key={recipe.id}>
          <h3>{recipe.title}</h3>
          <p>{recipe.description}</p>
          <Link to={`/recipes/${recipe.id}`}>View Details</Link>
          {favorites.includes(recipe.id) ? (
            <button onClick={() => removeFavorite(recipe.id)}>Remove from Favorites</button>
          ) : (
            <button onClick={() => addFavorite(recipe.id)}>Add to Favorites</button>
          )}
        </div>
      ))}
    </div>
  );
};

export default RecipeList;
