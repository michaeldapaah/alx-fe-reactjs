import { useEffect, useState } from "react";
import { Link } from "react-router-dom"; // \u2705 Fix: Correct import

const HomePage = () => {
    const [recipes, setRecipes] = useState([]);

    useEffect(() => {
        fetch("/data.json")
            .then((response) => {
                console.log("Response received:", response); 
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
                return response.json();
            })
            .then((data) => setRecipes(data.recipes)) 
            .catch((error) => console.error("Error loading recipes", error));
    }, []);

    return (
        <div className="min-h-screen bg-gray-100 p-6">
            <h1 className="text-3xl font-bold text-center mb-6 text-gray-900">
                Recipe Sharing Platform
            </h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {recipes.map((recipe, index) => (
                    <div
                        key={recipe.id || index}
                        className="bg-white shadow-lg rounded-lg p-4 transition-transform transform hover:scale-105"
                    >
                        <img
                            src={recipe.image}
                            alt={recipe.name} // \u2705 Fix: Ensure correct property name
                            className="w-full h-48 object-cover rounded-md"
                        />
                        <h2 className="text-xl font-semibold mt-3">{recipe.name}</h2> 
                        <p className="text-gray-700 mt-2">{recipe.description || "No description available."}</p> 
                        <Link to={`/recipe/${recipe.id}`} className="mt-4 block text-center bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">
                            View Recipe
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default HomePage;
