// Get input elements and calculate button
const magnitudeInput = document.getElementById('magnitude');
const depthInput = document.getElementById('depth');
const calculateBtn = document.getElementById('calculate');
const resultDiv = document.getElementById('result');

// Add event listener to calculate button
calculateBtn.addEventListener('click', function() {
  // Get input values and calculate hazard level
  const magnitude = magnitudeInput.value;
  const depth = depthInput.value;
  const hazardLevel = calculateHazardLevel(magnitude, depth);
  
  // Display result
  resultDiv.textContent = `The earthquake hazard level is ${hazardLevel}.`;
});

// Function to calculate hazard level based on magnitude and depth
function calculateHazardLevel(magnitude, depth) {
  // Hazard level is determined by the following formula
  const hazardLevel = (magnitude - 5) * (depth / 10);
  
  // Round hazard level to one decimal place
  return hazardLevel.toFixed(1);
}
