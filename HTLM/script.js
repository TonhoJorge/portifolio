function toggleList() {
    var button = document.getElementById("toggleButton");
    var list = document.getElementById("linkList");
  
    if (list.style.display === "none") {
      list.style.display = "block";
      button.textContent = "Menos";
    } else {
      list.style.display = "none";
      button.textContent = "Mais...";
    }
  }
  