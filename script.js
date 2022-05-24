// ....

function newWindow() {
  var input = document.getElementById("burgerName").value;
  if (
    input === "The Pickle Bacon" ||
    input === "The Turkey & Egg" ||
    input === "The All American"
  ) {
    window.location.href = "order.html";
  } else {
    alert("Enter Burger name");
  }
}

document.getElementById("submit").addEventListener("click", (e) => {
  e.preventDefault();
  newWindow();
});

// year

const year = new Date().getFullYear();

document.getElementById("year").innerHTML =
  "© Copyright " + year + " The Burger King";
