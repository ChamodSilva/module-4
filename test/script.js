class GridCard {
    constructor(containerId) {
      this.container = document.getElementById(containerId);
      this.cards = [];
    }
  
    addCard(imageCap, cardText) {
      const card = document.createElement("div");
      card.classList.add("col-12", "col-md-6", "col-lg-3");
  
      const cardContent = document.createElement("div");
      cardContent.classList.add("card");
  
      const imageCapDiv = document.createElement("div");
      imageCapDiv.classList.add("card-img-top");
      imageCapDiv.textContent = imageCap;
      imageCapDiv.style.backgroundColor = "#ddd"; // Placeholder styling
      imageCapDiv.style.height = "150px";
      imageCapDiv.style.display = "flex";
      imageCapDiv.style.justifyContent = "center";
      imageCapDiv.style.alignItems = "center";
  
      const cardBody = document.createElement("div");
      cardBody.classList.add("card-body");
  
      const cardTextP = document.createElement("p");
      cardTextP.classList.add("card-text");
      cardTextP.textContent = cardText;
  
      cardBody.appendChild(cardTextP);
      cardContent.appendChild(imageCapDiv);
      cardContent.appendChild(cardBody);
      card.appendChild(cardContent);
  
      this.container.appendChild(card);
      this.cards.push(card);
    }
  
    createGrid(cardData) {
      if (!this.container) {
        console.error("Container element not found.");
        return;
      }
      this.container.classList.add("row");
  
      cardData.forEach((data) => {
        this.addCard(data.imageCap, data.cardText);
      });
    }
  
    clearGrid() {
      this.cards.forEach((card) => {
        this.container.removeChild(card);
      });
      this.cards = [];
    }
  }
  
  // Example usage
  document.addEventListener("DOMContentLoaded", () => {
    const gridContainer = new GridCard("cardContainer");
  
    const cardData = [
      { imageCap: "Image cap", cardText: "Some quick example text to build on the card title and make up the bulk of the card's content." },
      { imageCap: "Image cap", cardText: "Some quick example text to build on the card title and make up the bulk of the card's content." },
      { imageCap: "Image cap", cardText: "Some quick example text to build on the card title and make up the bulk of the card's content." },
      { imageCap: "Image cap", cardText: "Some quick example text to build on the card title and make up the bulk of the card's content." },
      { imageCap: "Image cap", cardText: "Some quick example text to build on the card title and make up the bulk of the card's content." },
      { imageCap: "Image cap", cardText: "Some quick example text to build on the card title and make up the bulk of the card's content." },
      { imageCap: "Image cap", cardText: "Some quick example text to build on the card title and make up the bulk of the card's content." },
      { imageCap: "Image cap", cardText: "Some quick example text to build on the card title and make up the bulk of the card's content." },
    ];
  
    gridContainer.createGrid(cardData);
  });