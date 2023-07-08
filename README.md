# JobSwipe
JobSwipe is a comprehensive job search platform designed specifically for users in the United States..

## Description: 
The application utilizes the Adzuna API to fetch job listings based on user search criteria. With a user-friendly interface and powerful search capabilities, JobSwipe aims to simplify the job search process and connect job seekers with their ideal employment opportunities.

## Table of Contents

- [Features](#features)
- [Project Setup Instructions](#project-setup-instructions)
- [API Integration](#api-integration)
- [Live Site](#live-site)
- [Technologies Used](#technologies-used)
- [Author](#author)
- [License](#license)

## Features
- Search for job listings based on job title and location.
- Display job listings with relevant details like title, location, salary, and description/
- User-friendly interface with a responsive design
- Contact form to get in touch with the JobSwipe team.


## Project Setup Instructions
1. Clone the repository: git clone https://github.com/your-username/jobswipe.git
2. Change to the project directory:cd jobswipe
3. Install the project dependencies:npm install
4. Set up the API credentials:
   - Sign up for an account on the Adzuna developer portal.
   - Obtain your appId and appKey.
3. Open the index.html file in a web browser.

## API Integration
JobSwipe integrates with the Adzuna API to fetch job search results. The API endpoint used is:
https://api.adzuna.com/v1/api/jobs/us/search/1?app_id={appId}&app_key={appKey}&what={jobQuery}&where={location}
To use the app with the API, you will need to obtain an appId and appKey from Adzuna and replace them in the API endpoint URL.

## Live Site
The live site for this project is hosted on GitHub Pages. You can access it by following this link: [JobSwipe Live Site](https://muthuieric.github.io/jobswipe)

## Technologies Used
1. HTML
2. CSS
3. JavaScript

## Author 
Author: Eric Muthui. 

## License
This project is licensed under the MIT License. See the LICENSE file for details.