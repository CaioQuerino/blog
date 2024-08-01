document.querySelectorAll(".icon-heart").forEach(icon => {
    icon.addEventListener("click", () => {
      icon.classList.toggle("filled");
    });
  
    icon.addEventListener("mouseover", () => {
      if (!icon.classList.contains("filled")) {
        icon.src = "assets/img/button-favorite.svg";
      }
    });
  
    icon.addEventListener("mouseout", () => {
      if (!icon.classList.contains("filled")) {
        icon.src = "assets/img/icon-heart.svg";
      }
    });
  });
  