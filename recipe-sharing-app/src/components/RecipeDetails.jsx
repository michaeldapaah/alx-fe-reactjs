import { useParams, Link } from "react-router-dom";
import useRecipeStore from "../store/recipeStore";
import DeleteRecipeButton from "./DeleteRecipeButton";

const RecipeDetails = () => {
  const { id } = useParams();
  const recipe = useRecipeStore((state) =>
    state.recipes.find((r) => r.id === parseInt(id))
  );

  if (!recipe) return <p>Recipe not found!</p>;

  return (
    <div>
      <h1>{recipe.title}</h1>
      <p>{recipe.description}</p>
      <Link to={`/edit/${recipe.id}`}>
        <button>Edit</button>
      </Link>
      <DeleteRecipeButton recipeId={recipe.id} />
      <br />
      <Link to="/">Back to Home</Link>
    </div>
  );
};

export default RecipeDetails;
