// 1. Product array
const products = [
    {
      id: "fc-1888",
      name: "flux capacitor",
      averagerating: 4.5
    },
    {
      id: "fc-2050",
      name: "power laces",
      averagerating: 4.7
    },
    {
      id: "fs-1987",
      name: "time circuits",
      averagerating: 3.5
    },
    {
      id: "ac-2000",
      name: "low voltage reactor",
      averagerating: 3.9
    },
    {
      id: "jj-1969",
      name: "warp equalizer",
      averagerating: 5.0
    }
  ];
  
  // 2. Populate the Product Name select options dynamically
  const productSelect = document.querySelector('select[name="productName"]');  // Get the select element
  products.forEach(product => {
    const option = document.createElement('option');
    option.value = product.id;  // Set the value of the option
    option.textContent = product.name;  // Set the name to display in the dropdown
    productSelect.appendChild(option);  // Append option to select
  });
  
  // 3. Track number of reviews in localStorage
  // Get the current review count from localStorage or set it to 0 if it doesn't exist
  let reviewCount = localStorage.getItem('reviewCount');
  if (!reviewCount) {
    reviewCount = 0;
  }
  
  // Increment the review count when the form is successfully submitted
  const reviewForm = document.querySelector('form');  // Get the form element
  reviewForm.addEventListener('submit', (event) => {
    event.preventDefault();  // Prevent form submission to allow review counting
    reviewCount++;
    localStorage.setItem('reviewCount', reviewCount);  // Update the review count in localStorage
  
    // Redirect to the thank you page or the next step (review.html)
    window.location.href = 'review.html';  // Adjust the redirect URL if necessary
  });
  
  // 4. Show the review count on the review page (review.html)
  document.addEventListener('DOMContentLoaded', () => {
    const reviewCounter = document.getElementById('reviewCounter');
    reviewCounter.textContent = `Total Reviews Submitted: ${reviewCount}`;
  });