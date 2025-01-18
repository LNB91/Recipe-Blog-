// script.js

// Mock data for recipes (can be replaced with server data)
const recipes = [
    {
      title: "Spaghetti Carbonara",
      ingredients: "Spaghetti, Eggs, Pancetta, Parmesan Cheese, Black Pepper",
      instructions: "Cook pasta. Fry pancetta. Mix eggs and cheese. Combine everything.",
      image: "https://media.istockphoto.com/id/946666292/photo/spaghetti-carbonara-with-garlic-bread.jpg?s=612x612&w=0&k=20&c=6UUbu6Jg76oGx5_I8WoGNMEg6PJ85iBKugODacLF6Ps=",
    },
    {
      title: "Chicken Curry",
      ingredients: "Chicken, Curry Powder, Coconut Milk, Garlic, Onion, Ginger",
      instructions: "Cook chicken. Saute spices. Add coconut milk. Simmer.",
      image: "https://media.istockphoto.com/id/1436886319/photo/thai-red-chicken-curry-at-a-southeast-asian-restaurant-in-sydney.jpg?s=612x612&w=0&k=20&c=3CtnErr7IDDLcAsy7A4H5B5uoUdhef4Uilm6qClF5XM=",
    },
  ];
  
  // Render recipes on homepage
  const recipeList = document.getElementById('recipe-list');
  function renderRecipes() {
    recipeList.innerHTML = '';
    recipes.forEach((recipe) => {
      const recipeCard = document.createElement('div');
      recipeCard.classList.add('recipe-card');
      recipeCard.innerHTML = `
        <img src="${recipe.image}" alt="${recipe.title}">
        <h3>${recipe.title}</h3>
        <p><strong>Ingredients:</strong> ${recipe.ingredients}</p>
        <p><strong>Instructions:</strong> ${recipe.instructions}</p>
      `;
      recipeList.appendChild(recipeCard);
    });
  }
  
  // Handle form submission for adding a new recipe
  const recipeForm = document.getElementById('recipe-form');
  recipeForm.addEventListener('submit', (e) => {
    e.preventDefault();
  
    const title = document.getElementById('title').value;
    const ingredients = document.getElementById('ingredients').value;
    const instructions = document.getElementById('instructions').value;
    const image = document.getElementById('image').files[0]
      ? URL.createObjectURL(document.getElementById('image').files[0])
      : 'https://via.placeholder.com/300';
  
    const newRecipe = { title, ingredients, instructions, image };
    recipes.push(newRecipe);
    renderRecipes();
  
    recipeForm.reset();
  });
  
  // Initial render
  renderRecipes();
  