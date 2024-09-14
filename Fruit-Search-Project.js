// FRUIT_SEARCH_PROJECT

const input = document.querySelector("#fruit-search");
const suggestions = document.querySelector(".suggestions ul");

// FRUITS ARRAY LIST
const fruits = [
  "Apple",
  "Apricot",
  "Avocado 🥑",
  "Banana",
  "Bilberry",
  "Blackberry",
  "Blackcurrant",
  "Blueberry",
  "Boysenberry",
  "Currant",
  "Cherry",
  "Coconut",
  "Cranberry",
  "Cucumber",
  "Custard apple",
  "Damson",
  "Date",
  "Dragonfruit",
  "Durian",
  "Elderberry",
  "Feijoa",
  "Fig",
  "Gooseberry",
  "Grape",
  "Raisin",
  "Grapefruit",
  "Guava",
  "Honeyberry",
  "Huckleberry",
  "Jabuticaba",
  "Jackfruit",
  "Jambul",
  "Juniper berry",
  "Kiwifruit",
  "Kumquat",
  "Lemon",
  "Lime",
  "Loquat",
  "Longan",
  "Lychee",
  "Mango",
  "Mangosteen",
  "Marionberry",
  "Melon",
  "Cantaloupe",
  "Honeydew",
  "Watermelon",
  "Miracle fruit",
  "Mulberry",
  "Nectarine",
  "Nance",
  "Olive",
  "Orange",
  "Clementine",
  "Mandarine",
  "Tangerine",
  "Papaya",
  "Passionfruit",
  "Peach",
  "Pear",
  "Persimmon",
  "Plantain",
  "Plum",
  "Pineapple",
  "Pomegranate",
  "Pomelo",
  "Quince",
  "Raspberry",
  "Salmonberry",
  "Rambutan",
  "Redcurrant",
  "Salak",
  "Satsuma",
  "Soursop",
  "Star fruit",
  "Strawberry",
  "Tamarillo",
  "Tamarind",
  "Yuzu",
];

// BEGINNING OF SEARCH FUNCTION
// grabs keys inputed
function searchHandler(e) {
  let item = e.target.value;

  return item;
}

// END OF SEARCH HANDLER FUNCTION

// START OF SHOWSUGGESTION() FUNCTION
function showSuggestions(results, inputVal) {}

// END OFSHOWSUGGESTION(FUNCTION)

function useSuggestion(e) {
  let item = e.target.value;

  // Searches any letter typed in the search bar
  const includes = (results, inputKeyword) =>
    results.toLowerCase().includes(inputKeyword.toLowerCase());

  const includesFilter = (inputKeyword) => {
    list = fruits.filter((results) => includes(results, inputKeyword));
    return list;
    // END OF INCLUDES FILTER
  };
  if (item) {
    includesFilter(item);
  }
  return item;
}

input.addEventListener("keyup", searchHandler);
suggestions.addEventListener("click", useSuggestion);

// fruits Array generated to create fruit list
fruits.forEach(function (item) {
  const newLi = document.createElement("li");
  newLi.appendChild(document.createTextNode(item));
  fruitsList = input.appendChild(newLi);
});
