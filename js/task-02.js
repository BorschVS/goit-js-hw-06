const ingredients = ["Potatoes", "Mushrooms", "Garlic", "Tomatos", "Herbs", "Condiments"];

const ingredientsList = document.querySelector("#ingredients");

const list = ingredients.map((ingredient) => {
  const listItemEl = document.createElement("li");
  listItemEl.classList.add("item");
  listItemEl.textContent = ingredient;
  return listItemEl;
});

ingredientsList.append(...list);

console.log(ingredientsList);
