document.getElementById("btn-bmi").addEventListener("click", function (event) {
  event.preventDefault();
  let weight = document.getElementById("weight").value;
  let height = document.getElementById("height").value;
  height = height / 100;
  let bmi = weight / (height * height);
  const underweight = document.getElementById("underweight");
  const healthy = document.getElementById("healthy");
  const overweight = document.getElementById("overweight");
  const obese = document.getElementById("obese");
  if (bmi < 18.5) {
    underweight.style.backgroundColor = "blue";
    healthy.removeAttribute("style");
    overweight.removeAttribute("style");
    obese.removeAttribute("style");
  } else if (bmi < 24.9) {
    healthy.style.backgroundColor = "green";
    underweight.removeAttribute("style");
    overweight.removeAttribute("style");
    obese.removeAttribute("style");
  } else if (bmi < 29.9) {
    overweight.style.backgroundColor = "#9BEC00";
    healthy.removeAttribute("style");
    underweight.removeAttribute("style");
    obese.removeAttribute("style");
  } else {
    obese.style.backgroundColor = "red";
    healthy.removeAttribute("style");
    overweight.removeAttribute("style");
    underweight.removeAttribute("style");
  }
});
function clearForm() {
  document.getElementById("weight").value = "";
  document.getElementById("height").value = "";
  document.getElementById("age").value = "";
  document.getElementById("activity").selectedIndex = 0;
  document.getElementById("gender").selectedIndex = 0;
}
