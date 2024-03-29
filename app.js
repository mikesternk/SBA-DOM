// checking whether my array uses local storage
const itemsArray = localStorage.getItem("items")
  ? JSON.parse(localStorage.getItem("items"))
  : [];

console.log(itemsArray);

// event listener for our button
document.getElementById("enter").addEventListener("click", () => {
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
  for (let i = 0; i < itemsArray.length; i++) {
    items += `<div class="item">
                <div class="input-controller">
                    <!-- disabling the text area until another condition is met (for editing)-->
                    <textarea disabled>${itemsArray[i]}</textarea>
                    <div class="edit-controller">
                        <i class="fa-solid fa-check deleteBtn"></i>
                        <i class="fa-solid fa-pen-to-square editBtn"></i>
                    </div>
                </div>
                <div class="update-controller">
                    <button class="saveBtn">Save</button>
                    <button class="cancelBtn">Cancel</button>
                </div>
            </div>`;
  }
  document.querySelector(".to-do-list").innerHTML = items;

  // making event listeners for each instance
  activateDeleteListeners();
  activateEditListeners();
  activateSaveListeners();
  activateCancelListeners();
};

// function for the delete icon
const activateDeleteListeners = () => {
  const deleteBtn = document.querySelectorAll(".deleteBtn");
  deleteBtn.forEach((db, i) => {
    db.addEventListener("click", () => {
      deleteItem(i);
    });
  });
};
const deleteItem = (i) => {
  itemsArray.splice(i, 1);
  localStorage.setItem("items", JSON.stringify(itemsArray));
  location.reload();
};

// function for the edit icon
const activateEditListeners = () => {
  const editBtn = document.querySelectorAll(".editBtn");

  // accessing the save/edit buttons
  const updateController = document.querySelectorAll(".update-controller");

  // accessing the textarea
  const inputs = document.querySelectorAll(".input-controller textarea");
  editBtn.forEach((eb, i) => {
    eb.addEventListener("click", () => {
      // displaying the buttons for save/edit
      updateController[i].style.display = "block";

      // allowing user input in the input fields
      inputs[i].disabled = false;
    });
  });
};

// function for the save button
const activateSaveListeners = () => {
  const saveBtn = document.querySelectorAll(".saveBtn");
  const inputs = document.querySelectorAll(".input-controller textarea");
  saveBtn.forEach((sb, i) => {
    sb.addEventListener("click", () => {
      updateItem(inputs[i].value, i);
    });
  });
};
const updateItem = (text, i) => {
  // setting the list index to user input
  itemsArray[i] = text;
  localStorage.setItem("items", JSON.stringify(itemsArray));
  location.reload();
};

// function for the cancel button
const activateCancelListeners = () => {
  const cancelBtn = document.querySelectorAll(".cancelBtn");
  const updateController = document.querySelectorAll(".update-controller");
  const inputs = document.querySelectorAll(".input-controller textarea");
  cancelBtn.forEach((cb, i) => {
    cb.addEventListener("click", () => {
      // hiding the save and cancel buttons
      updateController[i].style.display = "none";

      // removing the editing capability of the text area
      inputs[i].disabled = true;
    });
  });
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
  displayItems();

  // saving name to local storage
  const nameInput = document.querySelector("#name");
  const username = localStorage.getItem("username") || "";

  nameInput.value = username;

  nameInput.addEventListener("change", (event) => {
    localStorage.setItem("username", event.target.value);

    // addElement(nameInput);
  });
};
const button = document.getElementById("enter");

// function to add name element to html
const addElement = (aName) => {
  // create a
};
