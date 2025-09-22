document.addEventListener("DOMContentLoaded", () => {
  const recipes = [
    // === Breakfast ===
    {
      title: "Avocado Toast",
      category: "breakfast",
      image: "images/AvAcadoToast.jpg",
      description: "A quick, nourishing toast topped with creamy avocado,rich in healthy fats and fiber—perfect for breakfast or a light snack.",
      ingredients: ["1 slice whole-grain bread (toasted)",
                     "½ ripe avocado",
                      "½ tsp lemon juice",
                      "Pinch of sea salt",
                      "Pepper"],
      steps: ["Toast the slice of whole-grain bread until golden brown.", 
             "In a small bowl, mash the avocado with lemon juice, salt, and pepper.",
             "Spread the avocado mixture evenly over the toast.",
             "Add optional toppings for extra flavor and nutrition.",
             "Serve fresh and enjoy!"],
      nutrition: { Calories: "220 kcal",
                    Protein: "5 g",
                    Carbs: "22 g", 
                    Fat: "13 g" }
    },
    {
      title: "Chia Seed Pudding",
      category: "breakfast",
      image: "images/raspberry-Chia-Seed-Pudding.jpg",
      description: "A creamy, fiber-rich pudding made with chia seeds and almond milk topped with seasonal fruits. Perfect for a light breakfast or snack.",
      ingredients : ["3 tbsp chia seeds", 
                    "1 cup unsweetened almond milk", 
                    "1 tsp honey or maple syrup (optional)",
                    "¼ tsp vanilla extract",
                    "½ cup seasonal fruit (berries, mango, kiwi, etc.)"],
      steps: ["Mix chia seeds, almond milk, sweetener, and vanilla in a jar or bowl", 
              "Stir well, let sit for 10 minutes, then stir again.",
              "Cover and refrigerate 2-4 hours (or overnight).",
              "Top with fruit before serving."],
      nutrition: { Calories: "220 kcal",
                   Protein: "6 g",
                   Carbs: "24 g",
                   Fat: "9 g" }
    },
    {
      title: "Breakfast Burrito",
      category: "breakfast",
      image: "images/breakfast-burrito.jpg",
      description: "A hearty, protein-packed breakfast burrito made with scrambled eggs, black beans, avocado, and fresh salsa wrapped in a whole-grain tortilla.",
      ingredients: ["1 whole-grain tortilla",
                   "2 eggs (scrambled)",
                  "½ cup cooked black beans", 
                  "¼ avocado (sliced or mashed)", 
                  "2 tbsp fresh salsa",
                  "1 tsp olive oil (for cooking eggs)",
                  "Pinch of salt & pepper"],
      steps: ["Heat oil in a pan, scramble eggs with salt and pepper.",
              "Warm the tortilla in a pan or microwave.",
              "Layer black beans, scrambled eggs, avocado, and salsa onto tortilla.",
              "Roll into a burrito, tucking in sides as you go.",
              "Serve warm."],
      nutrition: { Calories: "220 kcal", Protein: "7 g", Carbs: "40 g", Fat: "4 g" }
    },

    // === Lunch ===
    {
      title: "Quinoa Salad",
      category: "lunch",
      image: "images/Quinoa Salad.jpg",
      description: "A light, refreshing salad packed with protein-rich quinoa, colorful vegetables, and a zesty lemon dressing. Perfect for lunch or a healthy side dish.",
      ingredients: ["1 cup cooked quinoa (about ⅓ cup dry)",
                    "½ cup cherry tomatoes, halved",
                    "¼ cucumber, diced",
                    "¼ cup bell pepper, diced",
                    "2 tbsp red onion, finely chopped",
                    "1 tbsp olive oil",
                    "1 tbsp lemon juice",
                    "Salt & black pepper, to taste",
                    "Fresh parsley or cilantro for garnish"],
      steps: ["Cook quinoa according to package directions and let cool.",
              "In a bowl, combine quinoa, tomatoes, cucumber, bell pepper, onion, and feta.", 
              "Whisk together olive oil, lemon juice, salt, and pepper.",
              "Toss salad with dressing and garnish with herbs.",
               "Serve chilled or at room temperature."],
      nutrition: { Calories: "320 kcal", Protein: "10 g", Carbs: "38 g", Fat: "14 g" }
    },
    {
      title: "Lentil Soup",
      category: "lunch",
      image: "images/Lentil-Soup .jpg",
      description: "A hearty, protein-rich soup made with lentils, vegetables, and warming spices. Perfect for a nourishing lunch or dinner.",
      ingredients: ["½ cup dried lentils (rinsed)", 
                    "1 cup vegetable broth (or water)",
                    "½ carrot, diced",
                    "½ celery stalk, diced",
                    "¼ onion, chopped",
                    "1 small garlic clove, minced",
                    "½ tbsp olive oil",
                    "Salt & black pepper, to taste",
                    "Fresh parsley or lemon wedge for garnish"],
      steps: ["Heat olive oil in a pot, sauté onion, garlic, carrot, and celery until softened.",
              "Add lentils, broth, cumin, salt, and pepper. Bring to a boil.", 
              "Reduce heat, cover, and simmer for 25-30 minutes until lentils are tender.",
              "Garnish with parsley or a squeeze of lemon."],
         
      nutrition: { Calories: "280 kcal", Protein: "16 g", Carbs: "40 g", Fat: "6 g" }
    },
    {
      title: "Mediterranean Chickpea Salad",
      category: "lunch",
      image: "images/MediterraneanChickpeaSalad.jpg",
      description: "A refreshing, protein-packed salad with chickpeas, fresh vegetables, and a tangy olive oil-lemon dressing. Great as a light meal or side dish.",
      ingredients: ["1 cup canned chickpeas (rinsed & drained)",
                    "½ cup cucumber, diced",
                    "½ cup cherry tomatoes, halved",
                    "2 tbsp red onion, finely chopped",
                    "2 tbsp kalamata olives, sliced",
                    "1 tbsp olive oil",
                    "1 tbsp lemon juice",
                    "¼ tsp dried oregano",
                    "¼ tsp dried oregano",
                    "Fresh parsley for garnish"],
      steps: ["In a bowl, combine chickpeas, cucumber, tomatoes, onion, olives, and feta.", 
              "Whisk together olive oil, lemon juice, oregano, salt, and pepper.",
              "Pour dressing over salad, toss gently.",
              "Garnish with parsley and serve chilled."],
      nutrition: { Calories: "350 kcal", Protein: "12 g", Carbs: "34 g", Fat: "18 g" }
    },

    // === Dinner ===
    {
      title: "Grilled Salmon",
      category: "dinner",
      image: "images/GrilledSalmon.jpg",
      description: "A simple and flavorful dish made with fresh salmon fillet, seasoned with herbs and lemon, then grilled to perfection. High in protein and heart-healthy omega-3 fats.",
      ingredients: ["1 salmon fillet (about 4-6 oz)", 
                    "1 tsp olive oil",
                    "½ lemon (juice + wedges for serving)", 
                    "½ garlic clove, minced",
                    "Pinch of salt & black pepper",
                    "Fresh dill or parsley for garnish"],
      steps: ["Preheat grill (or grill pan) to medium-high heat.", 
              "Brush salmon with olive oil, season with garlic, lemon juice, salt, and pepper.",
              "Place salmon skin-side down on the grill, cook 4-5 minutes per side (depending on thickness).",
              "Remove from grill, garnish with herbs and lemon wedges.",
              "Serve hot with veggies or salad."],
      nutrition: { Calories: "350 kcal", Protein: "34 g", Carbs: "2 g", Fat: "22 g" }
    },
    {
      title: "Whole-Grain Pasta with Veggies",
      category: "dinner",
      image: "images/Whole-GrainPastawithVeggies.jpg",
      description: "A wholesome, fiber-rich pasta dish made with whole-grain noodles, sautéed vegetables, and a light tomato sauce. Perfect for a balanced dinner.",
      ingredients: ["1 cup cooked whole-grain pasta (about 2 oz dry)",
                    "½ cup spinach (fresh or sautéed)",
                    "½ cup mushrooms, sliced", 
                    "¼ cup zucchini or bell pepper, diced",
                    "½ cup light tomato sauce (low-sodium)",
                    "1 tsp olive oil" ,
                    "Pinch of salt, black pepper & Italian herbs"],
          
      steps: ["Cook whole-grain pasta according to package directions, drain.",
              "In a pan, heat olive oil and sauté mushrooms, zucchini, and spinach until tender.", 
              "Add tomato sauce, season with herbs, salt, and pepper.",
              "Toss in cooked pasta until well coated.",
              "Serve warm, topped with parmesan if desired."],
      nutrition: { Calories: "360 kcal", Protein: "14 g", Carbs: "60 g", Fat: "9 g" }
    },
    {
      title: "Cauliflower Fried Rice",
      category: "dinner",
      image: "images/CauliflowerFriedRice.jpg",
      description: "A low-carb, veggie-packed alternative to traditional fried rice, made with cauliflower rice, colorful vegetables, and light seasonings.",
      ingredients: ["1½ cups cauliflower rice (fresh or frozen)", 
                    "½ cup mixed vegetables (peas, carrots, bell peppers)",
                    "1 egg (lightly beaten)",
                    "1 garlic clove, minced",
                    "1 tsp soy sauce or tamari (low-sodium)",
                    "1 tsp sesame oil or olive oil",
                    "Pinch of salt & black pepper",
                    "Green onions for garnish"],
      steps: ["Heat oil in a pan, sauté garlic and mixed vegetables until tender.",
              "Add cauliflower rice, stir-fry for 5-7 minutes.",
              "Push mixture to the side, scramble the egg in the pan, then mix through.",
              "Add soy sauce, season with salt and pepper.",
              "Garnish with green onions and serve warm."],
      nutrition: { Calories: "180 kcal", Protein: "8 g", Carbs: "16 g", Fat: "9 g" }
    },

    // === Snacks ===
    {
      title: "Rice Cakes with Toppings",
      category: "snack",
      image: "images/RiceCakes.jpg",
      description: "A light, crunchy snack base that can be topped with healthy spreads and fresh ingredients for quick energy.",
      ingredients: ["2 plain rice cakes", 
                    "2 tbsp hummus or almond butter",
                    "Sliced cucumber, tomato, or banana (depending on topping choice)"],
      steps: ["Spread hummus or almond butter on rice cakes.", 
              "Add sliced veggies or fruit on top.",
              "Serve immediately."],
      nutrition: { Calories: "150 kcal", Protein: "4 g", Carbs: "22 g", Fat: "5 g" }
    },
    {
      title: "Trail Mix",
      category: "snack",
      image: "images/TrailMix.jpg",
      description: "Healthy hummus served with carrot and cucumber sticks.",
      ingredients: ["2 tbsp almonds", 
                    "2 tbsp walnuts or cashews",
                    "1 tbsp pumpkin or sunflower seeds",
                    "2 tbsp unsweetened dried fruit (raisins, cranberries, apricots)"],
      steps: ["Mix all ingredients in a bowl.",
              "Store in an airtight container for snacking."],
      nutrition: { Calories: "220 kcal", Protein: "6 g", Carbs: "20 g", Fat: "14 g" }
    },
    {
      title: "Kale Chips",
      category: "snack",
      image: "images/KaleChips.jpg",
      description: "Crispy, crunchy kale leaves baked with olive oil and a touch of salt—a healthy alternative to potato chips.",
      ingredients: ["2 cups kale leaves (stems removed)",
                    "1 tsp olive oil",
                    "Pinch of sea salt"],
      steps: ["Preheat oven to 325°F (160°C).",
              "Wash and dry kale thoroughly, tear into bite-sized pieces.",
              "Toss with olive oil and salt.",
              "Spread on a baking sheet in a single layer.",
              "Bake 10-15 minutes until crisp."],
      nutrition: { Calories: "70 kcal", Protein: "3g", Carbs: "7 g", Fat: "4g" }
    },

    // === Drinks ===
    {
      title: "Green Smoothie",
      category: "drink",
      image: "images/GreenSmoothie.jpg",
      description: "A refreshing, nutrient-packed smoothie made with leafy greens, fruit, and a hint of ginger for an energizing start to the day.",
      ingredients: ["1 cup spinach (fresh)",
                    "1 small banana", 
                    "½ cup pineapple chunks (fresh or frozen)",
                    "½ cup unsweetened almond milk (or water)",
                    "½ tsp fresh ginger (grated, optional)"],
      steps: ["Add all ingredients to a blender.",
              "Blend until smooth and creamy.",
              "Pour into a glass and serve chilled."],
      nutrition: { Calories: "180 kcal", Protein: "4 g", Carbs: "38 g", Fat: "3 g" }
    },
    {
      title: "Iced Lemon Tea",
      category: "drink",
      image: "images/LemonIceTea.jpg",
      description: "A refreshing, antioxidant-rich tea served chilled with fresh lemon. A perfect hydrating drink for hot days.",
      ingredients: ["1 black or green tea bag",
                    "1 cup hot water",
                    "1-2 tsp honey or maple syrup (optional)",
                    "2-3 lemon slices",
                    "Ice cubes"],
      steps: ["Steep tea bag in hot water for 3-5 minutes.",
              "Remove tea bag and stir in honey if using.", 
              "Let tea cool, then pour over a glass filled with ice.",
              "Add lemon slices and stir.",
              "Serve chilled."],
      nutrition: { Calories: "30 kcal", Protein: "0 g", Carbs: "8 g", Fat: "0 g" }
    },
    {
      title: "Protein Shake",
      category: "drink",
      image: "images/ProteinShake.jpg",
      description: "A creamy, high-protein shake that's perfect for post-workout recovery or a quick meal replacement.",
      ingredients: ["1 scoop protein powder (whey or plant-based)",
                    "1 cup unsweetened almond milk (or milk of choice)", 
                    "1 small banana (or ½ cup berries)", 
                    "1 tbsp peanut butter or almond butter",
                    "1 tsp chia seeds (optional)",
                    "Ice cubes (as needed)"],
      steps: ["Add all ingredients to a blender.", 
              "Blend until smooth and creamy.",
              "Pour into a glass and serve immediately."],
      nutrition: { Calories: "300 kcal", Protein: "25 g", Carbs: "30 g", Fat: "8 g" }
    }
  ];

  const recipeContainer = document.getElementById("recipe-container");
  const modal = document.getElementById("recipeModal");
  const modalTitle = document.getElementById("modalTitle");
  const modalImage = document.getElementById("modalImage");
  const modalDescription = document.getElementById("modalDescription");
  const modalIngredients = document.getElementById("modalIngredients");
  const modalSteps = document.getElementById("modalSteps");
  const modalNutrition = document.getElementById("modalNutrition");
  const closeBtn = document.querySelector(".close");

  // Display recipe cards
  function displayRecipes(recipesToShow) {
    recipeContainer.innerHTML = "";
    recipesToShow.forEach(recipe => {
      const card = document.createElement("div");
      card.classList.add("recipe-card");
      card.innerHTML = `
        <img src="${recipe.image}" alt="${recipe.title}">
        <h3>${recipe.title}</h3>
        <p>${recipe.description}</p>
      `;
      card.addEventListener("click", () => openModal(recipe));
      recipeContainer.appendChild(card);
    });
  }

  // Open modal
  function openModal(recipe) {
    modalTitle.textContent = recipe.title;
    modalImage.src = recipe.image;
    modalDescription.textContent = recipe.description;

    // Ingredients
    modalIngredients.innerHTML = "";
    recipe.ingredients.forEach(ingredient => {
      const li = document.createElement("li");
      li.textContent = ingredient;
      modalIngredients.appendChild(li);
    });

    // Steps
    modalSteps.innerHTML = "";
    recipe.steps.forEach(step => {
      const li = document.createElement("li");
      li.textContent = step;
      modalSteps.appendChild(li);
    });

    // Nutrition Info as Table
    modalNutrition.innerHTML = `
      <thead>
        <tr>
          <th>Nutrient</th>
          <th>Amount</th>
        </tr>
      </thead>
      <tbody></tbody>
    `;

    const tbody = modalNutrition.querySelector("tbody");
    for (const [key, value] of Object.entries(recipe.nutrition)) {
      const row = document.createElement("tr");
      row.innerHTML = `<td>${key}</td><td>${value}</td>`;
      tbody.appendChild(row);
    }

    modal.style.display = "block";
  }

  // Close modal
  closeBtn.onclick = () => {
    modal.style.display = "none";
  };
  window.onclick = (event) => {
    if (event.target === modal) modal.style.display = "none";
  };

  // Search & Filter
  const searchInput = document.getElementById("searchInput");
  const categoryFilter = document.getElementById("categoryFilter");

  function filterRecipes() {
    const searchText = searchInput.value.toLowerCase();
    const category = categoryFilter.value;
    const filtered = recipes.filter(recipe =>
      recipe.title.toLowerCase().includes(searchText) &&
      (category === "all" || recipe.category === category)
    );
    displayRecipes(filtered);
  }

  searchInput.addEventListener("input", filterRecipes);
  categoryFilter.addEventListener("change", filterRecipes);

  // Initial display
  displayRecipes(recipes);
});
