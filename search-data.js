const menuItems = [
  // Desayuno (Breakfast)
  { name: "Mangu con Los Tres Golpes", description: "Mashed plantains with fried salami, fried cheese, and eggs", category: "Desayuno", type: "menu", link: "menu.html" },
  { name: "Mangu Sencillo", description: "Mashed plantains with sauteed onions and a side of your choice", category: "Desayuno", type: "menu", link: "menu.html" },
  { name: "Huevos Revueltos Dominicanos", description: "Scrambled eggs with peppers, onions, tomatoes, and salami", category: "Desayuno", type: "menu", link: "menu.html" },
  { name: "Avena Dominicana", description: "Creamy Dominican-style oatmeal with cinnamon, vanilla, and evaporated milk", category: "Desayuno", type: "menu", link: "menu.html" },
  { name: "Salami Frito", description: "Crispy pan-fried Dominican salami slices", category: "Desayuno", type: "menu", link: "menu.html" },
  { name: "Los Tres Golpes", description: "Fried salami, fried cheese, and eggs — the classic Dominican breakfast trio", category: "Desayuno", type: "menu", link: "menu.html" },

  // Almuerzo (Lunch)
  { name: "Pollo Guisado", description: "Braised chicken in Dominican sofrito sauce, served with rice and beans", category: "Almuerzo", type: "menu", link: "menu.html" },
  { name: "Carne Guisada", description: "Slow-braised Dominican beef stew in sofrito sauce, served with rice", category: "Almuerzo", type: "menu", link: "menu.html" },
  { name: "La Bandera Dominicana", description: "The Dominican flag plate — rice, beans, stewed meat, and salad", category: "Almuerzo", type: "menu", link: "menu.html" },
  { name: "Res Guisada", description: "Dominican-style braised beef stew with potatoes and carrots over rice", category: "Almuerzo", type: "menu", link: "menu.html" },
  { name: "Ensalada de Pollo", description: "Creamy Dominican chicken salad with vegetables", category: "Almuerzo", type: "menu", link: "menu.html" },
  { name: "Habichuelas", description: "Savory Dominican stewed red beans in sofrito sauce", category: "Almuerzo", type: "menu", link: "menu.html" },
  { name: "Arroz Blanco", description: "Fluffy white rice cooked Dominican style", category: "Almuerzo", type: "menu", link: "menu.html" },
  { name: "Tostones", description: "Twice-fried green plantain slices with garlic sauce", category: "Almuerzo", type: "menu", link: "menu.html" },
  { name: "Platano Frito", description: "Sweet fried ripe plantains, golden and caramelized", category: "Almuerzo", type: "menu", link: "menu.html" },
  { name: "Queso Frito", description: "Golden pan-fried Dominican white cheese with oregano", category: "Almuerzo", type: "menu", link: "menu.html" },
  { name: "Empanadas (3 pcs)", description: "Crispy turnovers filled with seasoned beef or chicken", category: "Almuerzo", type: "menu", link: "menu.html" },
  { name: "Yuca Frita", description: "Fried yuca served with a tangy garlic-citrus mojo sauce", category: "Almuerzo", type: "menu", link: "menu.html" },
  { name: "Torrejas de Yuca Fritas", description: "Crispy fried yuca fritters with a golden crust, served with a side of garlic sauce", category: "Almuerzo", type: "menu", link: "menu.html" },

  // Cena (Dinner)
  { name: "Chivo Guisado", description: "Slow-braised goat seasoned with oregano and peppers, served with rice", category: "Cena", type: "menu", link: "menu.html" },
  { name: "Chicharron de Pollo", description: "Crispy Dominican fried chicken bites with lime, served with tostones", category: "Cena", type: "menu", link: "menu.html" },
  { name: "Pescado Frito", description: "Whole fried red snapper with tostones, salad, and garlic dipping sauce", category: "Cena", type: "menu", link: "menu.html" },
  { name: "Mofongo", description: "Mashed fried plantains with garlic, topped with your choice of protein", category: "Cena", type: "menu", link: "menu.html" },

  // Bebidas (Drinks)
  { name: "Morir Soñando", description: "Classic Dominican orange juice and milk blend — creamy and refreshing", category: "Bebidas", type: "menu", link: "menu.html" },
  { name: "Tamarindo", description: "Refreshing tamarind juice drink, sweet and tangy", category: "Bebidas", type: "menu", link: "menu.html" },
  { name: "Champola", description: "Creamy guanabana (soursop) juice blended with milk and sugar", category: "Bebidas", type: "menu", link: "menu.html" },
  { name: "Jugo de Chinola", description: "Fresh-squeezed passion fruit juice", category: "Bebidas", type: "menu", link: "menu.html" },
  { name: "Batida de Lechosa", description: "Creamy papaya smoothie blended with milk and sugar", category: "Bebidas", type: "menu", link: "menu.html" },
  { name: "Cafe Dominicano", description: "Rich, bold Dominican-style espresso", category: "Bebidas", type: "menu", link: "menu.html" },

  // Postres (Desserts)
  { name: "Habichuelas con Dulce", description: "Sweet creamy bean dessert with milk, cinnamon, and raisins", category: "Postres", type: "menu", link: "menu.html" },
  { name: "Flan", description: "Classic Dominican caramel custard flan", category: "Postres", type: "menu", link: "menu.html" },
  { name: "Flan de Coco", description: "Silky coconut custard with caramel sauce", category: "Postres", type: "menu", link: "menu.html" },
  { name: "Tres Leches", description: "Sponge cake soaked in three milks, topped with whipped cream", category: "Postres", type: "menu", link: "menu.html" },
  { name: "Majarete", description: "Traditional Dominican corn pudding with cinnamon", category: "Postres", type: "menu", link: "menu.html" },
  { name: "Cake", description: "Homemade Dominican-style celebration cake", category: "Postres", type: "menu", link: "menu.html" },
];

const pages = [
  { name: "Home", link: "index.html", type: "page" },
  { name: "About", link: "about.html", type: "page" },
  { name: "Menu", link: "menu.html", type: "page" },
  { name: "Contact", link: "contact.html", type: "page" },
];

const searchData = [...menuItems, ...pages];

// Log to console for testing
console.log("Menu Items:", menuItems.length);
console.log("Pages:", pages.length);
console.log("Total Search Data:", searchData);
