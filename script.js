const apiUrl = 'https://api.adzuna.com/v1/api';
const appId = '4baabc0a';
const appKey = '9900272350dcb254d0ee836780091275';

const jobQueryInput = document.getElementById('jobQuery');
const locationInput = document.getElementById('location');
const searchBtn = document.getElementById('searchBtn');
const cardContainer= document.getElementsByClassName("card-container");

searchBtn.addEventListener('click', () => {
  const jobQuery = jobQueryInput.value;
  const location = locationInput.value;

  // Construct API URL
  const apiUrlWithParams = `${apiUrl}/jobs/gb/search/1?app_id=${appId}&app_key=${appKey}&what=${jobQuery}&where=${location}`;

  // Fetch job search results
  fetch(apiUrlWithParams)
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
        jobLocation.textContent = job.location.area;
        jobCard.appendChild(jobLocation);

        const jobDescription = document.createElement('p');
        jobDescription.textContent = job.description;
        jobCard.appendChild(jobDescription);

        const jobSalary = document.createElement('p');
        jobSalary.textContent = `Ksh ${job.salary_min}`;
        jobCard.appendChild(jobSalary);

        cardContainer.appendChild(jobCard);
      });
    })
    .catch(error => {
      console.log('Error:', error);
    });
});
