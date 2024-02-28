// checking whether my array uses local storage
const itemsArray = localStorage.getItem("items")
  ? JSON.parse(localStorage.getItem("items"))
  : [];

console.log(itemsArray);

// event listener for our button
document.querySelector("#enter").addEventListener("click", () => {
  const item = document.getElementById("item");

  // helper function
  createItem(item);
});

// function to create todo list items
const createItem = (item) => {
  itemsArray.push(item.value);

  // storing items in local memory
  localStorage.setItem("items", JSON.stringify(itemsArray));

  // reload the page whenever an item is created
  location.reload();
};

// display items list on screen
const displayItems = () => {
  let items = "";
  for (let i = 0; i < itemsArray.length; i++) {}
};
// Making a date of the current Day
const displayDate = () => {
  let date = new Date();
  //   console.log(date);

  // splitting the date values up into an array
  date = date.toString().split(" ");

  // getting the day, month and year from new Date
  document.querySelector("#date").innerHTML =
    date[1] + " " + date[2] + " " + date[3];
};

// load the functions whenever the window load up
window.onload = function () {
  displayDate();
};
const button = document.getElementById("enter");
