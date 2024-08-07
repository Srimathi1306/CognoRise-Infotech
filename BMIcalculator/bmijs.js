function calculateBMI(weightKg, heightM) {
  const bmi = weightKg / (heightM * heightM);
  let category;
  if (bmi < 18.5) {
    category = "Underweight";
  } else if (bmi >= 18.5 && bmi < 24.9) {
    category = "Normal weight";
  } else if (bmi >= 25 && bmi < 29.9) {
    category = "Overweight";
  } else if (bmi >= 30 && bmi < 34.9) {
    category = "Obesity Class I (Moderate)";
  } else if (bmi >= 35 && bmi < 39.9) {
    category = "Obesity Class II (Severe)";
  } else if (bmi >= 40) {
    category = "Obesity Class III (Very severe or morbidly obese)";
  } else {
    category = "Invalid data";
  }

  return { bmi: bmi.toFixed(2), category };
}

document.getElementById("btn").addEventListener("click", function () {
  const weight = parseFloat(document.getElementById("we").value);
  const height = parseFloat(document.getElementById("he").value);

  if (isNaN(weight) || isNaN(height) || weight <= 0 || height <= 0) {
    alert("Please enter valid weight and height values.");
    return;
  }

  const result = calculateBMI(weight, height);
  document.getElementById("category-output").innerHTML =
    "<strong>" + result.category + "</strong>";
  const box = document.getElementById("box");
  // Reference to the body element
  let color;
  switch (result.category) {
    case "Underweight":
      color = "#ADD8E6"; // Light Blue
      break;
    case "Normal weight":
      color = "#90EE90"; // Light Green
      break;
    case "Overweight":
      color = "#feff78"; // Light Yellow
      break;
    case "Obesity Class I (Moderate)":
      color = "#FFDAB9"; // Light Peach
      break;
    case "Obesity Class II (Severe)":
      color = "#FFCCCB"; // Light Pink
      break;
    case "Obesity Class III (Very severe or morbidly obese)":
      color = "#FFB6C1"; // Light Red
      break;
    default:
      color = "white";
      break;
  }

  // Apply the same background color to both box and body

  box.style.backgroundColor = color;
});
