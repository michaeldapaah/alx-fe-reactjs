import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";


function RecipeDetail(){

    const{ id } = useParams();
    const [recipe, setRecipe] = useState(null);

    useEffect(()=> {
        fetch('data.json')
            .then((response) => response.json())
            .then((data) => {
                const foundRecipe = data.recipes.find((r) => r.id.toString() === id);
                setRecipe(foundRecipe);
            })
            .catch((error) => console.error('Error fetching recipe', error));
    }, [id]);

    if (!recipe) {
        return <div className="text-center text-gray-500 mt-10">Loading recipe....</div>
    }
    return (
        <div className="max-w-3xl mx-auto p-6 bg-white shadow-lg rounded-lg mt-10">
            <h1 className="text-3xl font-bold mb-4">{recipe.name}</h1>
            <img src={recipe.image} alt={recipe.name} className="w-full h-64 object-cover rounded-lg mb-4" />
            <h2 className="text-xl font-semibold mt-4">Ingredients</h2>
            <ul className="list-disc ml-6 text-gray-700">
                {recipe.ingredients.map((ingredients, index) => (
                    <li key={index}>{ingredients}</li>
                ))}
            </ul>
            <h2 className="text-xl font-semibold mt-4">Instructions</h2>
            <p className="text-gray-700">{recipe.instructions}</p>
        </div>
    )
}

export default RecipeDetail;
