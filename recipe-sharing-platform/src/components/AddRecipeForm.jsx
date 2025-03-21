import { useState } from "react";

const AddRecipeForm = ({ onAddRecipe }) => {
  const [title, setTitle] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [steps, setSteps] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validation: Ensure all fields are filled
    if (!title || !ingredients || !steps) {
      setError("All fields are required.");
      return;
    }

    // Create a new recipe object
    const newRecipe = {
      id: Date.now(), // Unique ID
      title,
      ingredients: ingredients.split(",").map((item) => item.trim()), // Convert to array
      steps,
      image: "https://via.placeholder.com/150", // Default image
    };

    // Pass new recipe to parent component (e.g., update state)
    onAddRecipe(newRecipe);

    // Clear form fields
    setTitle("");
    setIngredients("");
    setSteps("");
    setError("");
  };

  return (
    <div className="max-w-lg mx-auto bg-white p-6 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-4 text-center">Add a New Recipe</h2>
      {error && <p className="text-red-500 text-center">{error}</p>}
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Recipe Title */}
        <input
          type="text"
          placeholder="Recipe Title"
          className="w-full p-2 border rounded-md"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        {/* Ingredients */}
        <textarea
          placeholder="Ingredients (comma-separated)"
          className="w-full p-2 border rounded-md"
          value={ingredients}
          onChange={(e) => setIngredients(e.target.value)}
        ></textarea>

        {/* Preparation Steps */}
        <textarea
          placeholder="Preparation Steps"
          className="w-full p-2 border rounded-md"
          value={steps}
          onChange={(e) => setSteps(e.target.value)}
            >
            </textarea>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 transition duration-200"
            >
              Add Recipe
            </button>
          </form>
        </div>
      );
    };
    
    export default AddRecipeForm;
    