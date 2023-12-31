document.addEventListener('DOMContentLoaded', () => {
  const apiUrl = 'https://api.adzuna.com/v1/api';
  const appId = '4baabc0a';
  const appKey = '9900272350dcb254d0ee836780091275';

  const jobQueryInput = document.getElementById('jobQuery');
  const locationInput = document.getElementById('location');
  const searchBtn = document.getElementById('searchBtn');
  const cardContainer = document.querySelector('.card-container');

  // Event listener for the search button
  searchBtn.addEventListener('click', () => {
    const jobQuery = jobQueryInput.value;
    const location = locationInput.value;

    // Construct API URL with parameters
    const apiUrlWithParams = `${apiUrl}/jobs/us/search/1?app_id=${appId}&app_key=${appKey}&what=${jobQuery}&where=${location}`;

    // Fetch job search results
    fetch(apiUrlWithParams, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      }
    })
      .then(response => response.json())
      .then(data => {
        // Clear previous results
        cardContainer.innerHTML = '';

        // Display each job listing as a card
        data.results.forEach(job => {
          const jobCard = document.createElement('div');
          jobCard.classList.add('card');

          const jobTitle = document.createElement('p');
          jobTitle.textContent = job.title;
          jobCard.appendChild(jobTitle);

          const jobLocation = document.createElement('p');
          jobLocation.textContent = job.location.display_name;
          jobCard.appendChild(jobLocation);

          const jobSalary = document.createElement('p');
          jobSalary.textContent = `$${job.salary_min} per year`;
          jobCard.appendChild(jobSalary);

          const jobDescription = document.createElement('p');
          jobDescription.textContent = job.description;
          jobCard.appendChild(jobDescription);

          cardContainer.appendChild(jobCard);
        });

        // Reset input fields
        jobQueryInput.value = '';
        locationInput.value = '';
      })
      .catch(error => {
        console.log('Error:', error);
      });
  });

  // Event listener for the form submission
  const form = document.getElementById('form');
  form.addEventListener('submit', (e) => {
    e.preventDefault(); // Prevent form submission

    // Get form input values
    const name = form.elements.name.value;
    const email = form.elements.email.value;
    const phone = form.elements.phone.value;
    const message = form.elements.message.value;

    // Create an object to store the form data
    const formData = {
      name: name,
      email: email,
      phone: phone,
      message: message
    };

    console.log(formData);

    // Reset input fields
    form.reset();
  });
});
