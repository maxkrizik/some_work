class SeaProducts {
    constructor(group, type, amount, image) {
        this.group = group;
        this.type = type;
        this.amount = amount;
        this.image = image;
    }

    // Method to create a product DOM element
    getProductDiv(isInitial = false, index) {
        const productDiv = document.createElement("div");

       // Add product image
        const imageElement = document.createElement("img");
        imageElement.style.width = "100px"; // Set image size
        imageElement.alt = `${this.group} - ${this.type}`;
        imageElement.onerror = () => {
            // If image loading fails, set a default image
            imageElement.src = "https://ej.uz/errimg1";
        };
        imageElement.src = this.image;
        productDiv.appendChild(imageElement);   
    
        // Add product description
        const description = document.createElement("p");
        description.textContent = `${this.group} - ${this.type} (${this.amount})`;
        productDiv.appendChild(description);

        // Add buttons only for new items
        if (!isInitial) {
            const increaseButton = this.createButton("+", () => {
                this.increaseAmount(description, index);
            });
            productDiv.appendChild(increaseButton);

            productDiv.appendChild(document.createTextNode(' '));

            const decreaseButton = this.createButton("-", () => {
                this.decreaseAmount(description, index);
            });
            productDiv.appendChild(decreaseButton);

            productDiv.appendChild(document.createTextNode(' '));

            const removeButton = this.createButton("Dzēst", () => {
                this.removeProduct(productDiv, index);
            });
            productDiv.appendChild(removeButton);
        }

        return productDiv;
    }

    // Method to create a button
    createButton(text, onClickHandler) {
        const button = document.createElement("button");
        button.textContent = text;
        button.className = "regulet"; // Add class "regulet"
        button.onclick = onClickHandler;
        return button;
    }

    // Arrow function to increase the amount of product
    increaseAmount = (descriptionElement, index) => {
        this.amount++;
        descriptionElement.textContent = `${this.group} - ${this.type} (${this.amount})`;
    }

    // Method to decrease the amount of product
    decreaseAmount(descriptionElement, index) {
        if (this.amount > 0) {
            this.amount--;
            descriptionElement.textContent = `${this.group} - ${this.type} (${this.amount})`;
        }
    }

    // Method to remove a product
    removeProduct(productDiv, index) {
        productDiv.parentNode.removeChild(productDiv);
    }
}

// Save data to local storage
function saveSeaProductsToLocalStorage(seaProducts) {
    localStorage.setItem('seaProducts', JSON.stringify(seaProducts));
}

// Load data from local storage
function loadSeaProductsFromLocalStorage() {
    const seaProductsJSON = localStorage.getItem('seaProducts');
    return seaProductsJSON ? JSON.parse(seaProductsJSON) : [];
}

// Update the list of products based on saved data
function updateSeaProductListFromLocalStorage() {
    const seaProducts = loadSeaProductsFromLocalStorage();
    const seaProductList = document.getElementById("seaProductList");
    seaProductList.innerHTML = ""; // Clear the list before adding updated products
    seaProducts.forEach((productData, index) => {
        const { group, type, amount, image, deleted } = productData;
        if (!deleted) {
            const newProduct = new SeaProducts(group, type, amount, image);
            const newProductDiv = newProduct.getProductDiv(true, index); // Pass true to mark the element as initial
            newProductDiv.classList.add("product-item");
            seaProductList.appendChild(newProductDiv);
        }
    });
}

// Function to add a sea product
function addSeaProduct() {
    const groupSelect = document.getElementById("group");
    const group = groupSelect.options[groupSelect.selectedIndex].text; // Get the text of the selected option

    const type = document.getElementById("type").value.trim();
    const amount = document.getElementById("amount").value.trim();
    const image = document.getElementById("image").value.trim();

   // Check for empty fields and negative quantity
    if (!type || !amount || !image || amount < 0) {
        alert("Visiem laukiem ir jābūt aizpildītiem un daudzums nevar būt mazāks par 0!");
        return; // Stop function execution if there are empty fields or negative quantity
    }

    // Create a new instance of a sea product
    const newProduct = new SeaProducts(group, type, amount, image);
    // Get the DOM element of the new product
    const newProductDiv = newProduct.getProductDiv();

    // Add a class to the new product
    newProductDiv.classList.add("product-item");

    // Add the new product to the list
    document.getElementById("seaProductList").appendChild(newProductDiv);

    // Clear input fields after adding
    document.getElementById("type").value = "";
    document.getElementById("amount").value = "";
    document.getElementById("image").value = "";

    // After adding the product, save the updated list to local storage
    saveSeaProductsToLocalStorage(getSeaProductsData());
}

// Function to increase the quantity of a product
function increaseAmount(descriptionElement) {
    const currentAmount = parseInt(descriptionElement.textContent.match(/\d+/)[0]);
    descriptionElement.textContent = descriptionElement.textContent.replace(/\d+/, currentAmount + 1);
    // After modifying the product quantity, update the local storage
    saveSeaProductsToLocalStorage(getSeaProductsData());
}

// Function to decrease the quantity of a product
function decreaseAmount(descriptionElement) {
    const currentAmount = parseInt(descriptionElement.textContent.match(/\d+/)[0]);
    if (currentAmount > 0) {
        descriptionElement.textContent = descriptionElement.textContent.replace(/\d+/, currentAmount - 1);
    }
    // After modifying the product quantity, update the local storage
    saveSeaProductsToLocalStorage(getSeaProductsData());
}

// Function to remove a product
function removeProduct(item, index) {
    // Remove the corresponding product data from local storage
    const seaProducts = getSeaProductsData();
    saveSeaProductsToLocalStorage(seaProducts); // Save the updated product data

    item.remove(); // Remove the element from the DOM
}

// Function to save the updated product data to local storage
function saveUpdatedSeaProducts() {
    const seaProductList = document.getElementById("seaProductList");
    const seaProducts = Array.from(seaProductList.children).map(child => {
        return {
            group: child.dataset.group,
            type: child.dataset.type,
            amount: parseInt(child.dataset.amount),
            image: child.dataset.image
        };
    });
    saveSeaProductsToLocalStorage(seaProducts); // Save it to local storage
}

// Function to add an item to a section
function addToSection(item, sectionId) {
    const sectionDiv = document.getElementById(sectionId);
    sectionDiv.appendChild(item);
    const seaProducts = getSeaProductsData(); // Get sea product data
    saveSeaProductsToLocalStorage(seaProducts); // Save data to local storage
}

// Function to extract sea product data from the product list for saving to local storage
function getSeaProductsData() {
    const seaProductList = document.getElementById("seaProductList");
    const productItems = seaProductList.querySelectorAll(".product-item");
    const seaProducts = [];
    productItems.forEach(item => {
        const group = item.querySelector("p").textContent.split(" - ")[0];
        const type = item.querySelector("p").textContent.split(" - ")[1].split(" (")[0];
        const amount = parseInt(item.querySelector("p").textContent.match(/\d+/)[0]);
        const image = item.querySelector("img").src;
        seaProducts.push({ group, type, amount, image });
    });
    return seaProducts;
}

// Function to display products in the "saldeti" section
function sal() {
    document.getElementById("scheme").style.display = "none";
    document.getElementById("structure").style.display = "none";
    document.getElementById("links1").style.display = "none";
    const productList = document.getElementById("seaProductList");
    const productItems = productList.querySelectorAll(".product-item");

    const saldetiDiv = document.getElementById("saldeti");
    // Clear the content of the "saldeti" section
    saldetiDiv.innerHTML = "" + "<h2>Saldēti</h2>";

    // Iterate through each product in the list
    productItems.forEach(item => {
        const group = item.querySelector("p").textContent.split(" - ")[0]; // Get the product group value
        // If the product group contains "Saldēti", add it to the "saldeti" section
        if (group.includes("Saldēti")) {
            saldetiDiv.appendChild(item.cloneNode(true)); // Clone the element to avoid modifying the original list
        }
    });

    // Show the "saldeti" section
    saldetiDiv.style.display = "block";

    // Hide the product manipulation buttons
    const productItemsInSaldeti = saldetiDiv.querySelectorAll(".product-item");
    productItemsInSaldeti.forEach(item => {
        const buttons = item.querySelectorAll("button");
        buttons.forEach(button => {
            button.style.display = "none";
        });
    });

    // Hide other sections
    document.getElementById("ins").style.display = "none";
    document.getElementById("panel").style.display = "none";
    document.getElementById("atdzeseti").style.display = "none";
    document.getElementById("zaveti").style.display = "none";
}

// Function to display the "panel" section
function panel() {
    document.getElementById("ins").style.display = "none";
    document.getElementById("scheme").style.display = "none";
    document.getElementById("structure").style.display = "none";
    document.getElementById("links1").style.display = "none";
    document.getElementById("panel").style.display = "block";
    hideButtonsAndOtherSectionsExcept("panel");

    const productList = document.getElementById("seaProductList");
    const productItems = productList.querySelectorAll(".product-item");

    productItems.forEach((item, index) => {
        const existingButtons = item.querySelectorAll("button");
        existingButtons.forEach(button => {
            button.remove();
        });

        const descriptionElement = item.querySelector("p");

        const increaseButton = document.createElement("button");
        increaseButton.textContent = "+";
        increaseButton.className = "regulet"; // Add the class "regulet"
        increaseButton.onclick = () => {
            increaseAmount(descriptionElement, index);
        };
        item.appendChild(increaseButton);

        item.appendChild(document.createTextNode(' '));

        const decreaseButton = document.createElement("button");
        decreaseButton.textContent = "-";
        decreaseButton.className = "regulet"; // Add the class "regulet"
        decreaseButton.onclick = () => {
            decreaseAmount(descriptionElement, index);
        };
        item.appendChild(decreaseButton);

        item.appendChild(document.createTextNode(' '));

        const removeButton = document.createElement("button");
        removeButton.textContent = "Dzēst";
        removeButton.className = "regulet"; // Add the class "regulet"
        removeButton.onclick = () => {
            removeProduct(item, index);
        };
        item.appendChild(removeButton);
    });
}

// Function to move products containing "Atdzesēti" to the "atdzeseti" section
function atdz() {
    document.getElementById("ins").style.display = "none";
    document.getElementById("scheme").style.display = "none";
    document.getElementById("structure").style.display = "none";
    document.getElementById("links1").style.display = "none";
    const productList = document.getElementById("seaProductList");
    const productItems = productList.querySelectorAll(".product-item");

    const atdzesetiDiv = document.getElementById("atdzeseti");
    atdzesetiDiv.innerHTML = "" + "<h2>Atdzesēti</h2>";

    productItems.forEach(item => {
        const group = item.querySelector("p").textContent.split(" - ")[0];
        if (group.includes("Atdzesēti")) {
            const clonedItem = item.cloneNode(true);
            addToSection(clonedItem, "atdzeseti");
        }
    });

    document.getElementById("atdzeseti").style.display = "block";
    hideButtonsAndOtherSectionsExcept("atdzeseti");
}

// Function to move products containing "Žāvēti" to the "zaveti" section
function zav() {
    document.getElementById("ins").style.display = "none";
    document.getElementById("scheme").style.display = "none";
    document.getElementById("structure").style.display = "none";
    document.getElementById("links1").style.display = "none";
    const productList = document.getElementById("seaProductList");
    const productItems = productList.querySelectorAll(".product-item");

    const zavetiDiv = document.getElementById("zaveti");
    zavetiDiv.innerHTML = "" + "<h2>Žāvēti</h2>";

    productItems.forEach(item => {
        const group = item.querySelector("p").textContent.split(" - ")[0];
        if (group.includes("Žāvēti")) {
            const clonedItem = item.cloneNode(true);
            addToSection(clonedItem, "zaveti");
        }
    });

    document.getElementById("zaveti").style.display = "block";
    hideButtonsAndOtherSectionsExcept("zaveti");
}

// Function to hide buttons and other sections except the specified one
function hideButtonsAndOtherSectionsExcept(sectionId) {
    const productItemsInSection = document.querySelectorAll(`#${sectionId} .product-item`);
    productItemsInSection.forEach(item => {
        const buttons = item.querySelectorAll("button");
        buttons.forEach(button => {
            button.style.display = "none";
        });
    });

    const sections = ["panel", "saldeti", "atdzeseti", "zaveti"];
    sections.forEach(section => {
        if (section !== sectionId) {
            document.getElementById(section).style.display = "none";
        }
    });
}

// Hiding all sections
function home() {
    document.getElementById("panel").style.display = "none";
    document.getElementById("saldeti").style.display = "none";
    document.getElementById("instrukcija").style.display = "none";
    document.getElementById("atdzeseti").style.display = "none";
    document.getElementById("zaveti").style.display = "none";
    document.getElementById("links1").style.display = "none";
    document.getElementById("scheme").style.display = "none";
    document.getElementById("structure").style.display = "none";
    document.getElementById("ins").style.display = "none";
}

// Function to show block-scheme
function sch() {
    document.getElementById("panel").style.display = "none";
    document.getElementById("saldeti").style.display = "none";
    document.getElementById("instrukcija").style.display = "none";
    document.getElementById("atdzeseti").style.display = "none";
    document.getElementById("zaveti").style.display = "none";
    document.getElementById("links1").style.display = "none";
    document.getElementById("scheme").style.display = "block";
    document.getElementById("structure").style.display = "none";
    document.getElementById("ins").style.display = "none";
}

// Function to show block-structure
function str() {
    document.getElementById("panel").style.display = "none";
    document.getElementById("saldeti").style.display = "none";
    document.getElementById("instrukcija").style.display = "none";
    document.getElementById("atdzeseti").style.display = "none";
    document.getElementById("zaveti").style.display = "none";
    document.getElementById("links1").style.display = "none";
    document.getElementById("scheme").style.display = "none";
    document.getElementById("structure").style.display = "block";
    document.getElementById("ins").style.display = "none";
}

// Initial hiding of sections
document.getElementById("panel").style.display = "none";
document.getElementById("saldeti").style.display = "none";
document.getElementById("instrukcija").style.display = "none";
document.getElementById("atdzeseti").style.display = "none";
document.getElementById("zaveti").style.display = "none";
document.getElementById("links1").style.display = "none";

// Array containing initial sea product data
const initialSeaProducts = [
    { group: "Saldēti", type: "Astoņkāja vārīti taustekļi", amount: 10, image: "https://ej.uz/image1_zivis" },
    { group: "Saldēti", type: "Takoyaki bumbiņas ar astoņkājiem", amount: 5, image: "https://ej.uz/image2_zivis" },
    { group: "Saldēti", type: "Foreles ikri saldēti", amount: 7, image: "https://ej.uz/image3_zivis"},
    { group: "Saldēti", type: "Laša ikri Ketas", amount: 15, image: "https://ej.uz/image4_zivis"},
    { group: "Saldēti", type: "Sniega krabja gaļa", amount: 4, image: "https://ej.uz/image5_zivis"},
    { group: "Atdzesēti", type: "Austeru nazis", amount: 5, image: "https://ej.uz/image6_zivis"},
    { group: "Atdzesēti", type: "Jūras karūsa Dorada atdzesēta", amount: 2, image: "https://ej.uz/image7_zivis"},
    { group: "Atdzesēti", type: "Jūrasasaris", amount: 11, image: "https://ej.uz/image8_zivis"},
    { group: "Atdzesēti", type: "Karpa ķidāta", amount: 1, image: "https://ej.uz/image9_zivis"},
    { group: "Žāvēti", type: "Vobla", amount: 13, image: "https://ej.uz/image11_zivis"},
];

// Function to clear local storage and reload the page
function goback() {
    localStorage.removeItem('seaProducts'); // Clearing data from local storage
    location.reload(); // Reloading the page
}

// Function to show links and hide other blocks
function shlinks() {
    document.getElementById("panel").style.display = "none";
    document.getElementById("saldeti").style.display = "none";
    document.getElementById("instrukcija").style.display = "none";
    document.getElementById("atdzeseti").style.display = "none";
    document.getElementById("zaveti").style.display = "none";
    document.getElementById("links1").style.display = "block";
    document.getElementById("structure").style.display = "none";
    document.getElementById("scheme").style.display = "none";
    document.getElementById("ins").style.display = "none";
}

function instr() {
    document.getElementById("panel").style.display = "none";
    document.getElementById("saldeti").style.display = "none";
    document.getElementById("instrukcija").style.display = "none";
    document.getElementById("atdzeseti").style.display = "none";
    document.getElementById("zaveti").style.display = "none";
    document.getElementById("links1").style.display = "none";
    document.getElementById("structure").style.display = "none";
    document.getElementById("scheme").style.display = "none";
    document.getElementById("ins").style.display = "block";
}

// Function executed when the window loads
window.onload = function() {
    updateSeaProductListFromLocalStorage(); // Update sea product list from local storage

    // Accessing the sea product list element
    const seaProductList = document.getElementById("seaProductList");

    // Looping through each initial sea product data
    initialSeaProducts.forEach((productData) => {
        const { group, type, amount, image } = productData;

        // Checking if an element with the same data already exists in the list
        const existingProducts = seaProductList.querySelectorAll(".product-item");
        let alreadyExists = false;
        existingProducts.forEach(existingProduct => {
            const existingType = existingProduct.querySelector("p").textContent.split(" - ")[1].split(" (")[0];
            if (existingType === type) {
                alreadyExists = true;
            }
        });

        // If an element with the same data does not exist, and it's not marked for deletion, add a new element
        if (!alreadyExists && !productData.deleted) {
            const newProduct = new SeaProducts(group, type, amount, image);
            const newProductDiv = newProduct.getProductDiv(true); // Pass true to mark the element as initial
            newProductDiv.classList.add("product-item");
            seaProductList.appendChild(newProductDiv);
        }
    });
}