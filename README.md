# Freelancing Resume Application
This project is a frontend application developed in Svelte to display an online resume. The application interfaces with a backend CMS developed in Strapi to fetch all the required information.

## Overview
The application is divided into three main sections, as described below:

- Homepage: This section showcases a brief introduction and personal details. Data is fetched from the "Personal Information" component 
in the Strapi CMS.
- Experiences: A detailed listing of work experiences. Each entry displays the company, role, start and end dates, and a brief 
  description. Experiences can be filtered based on the "Working Industry". Data is fetched from the Work Experience and Working Industry collection types in the Strapi CMS.
- Contact: A section dedicated to contact details, including phone, email, and social profiles. Data is fetched from the "Contact" 
  component in the Strapi CMS.

## Local Setup
To run the application locally, follow the steps below:

### Clone the Repository:

```bash
git clone <URL of your frontend repository>
cd <project folder name>
```

### Install Dependencies:

Using npm:
```bash
npm install
```

Or using yarn:
```bash
yarn install
```
Run in Development Mode:
Using npm:
```bash
npm run dev
```
Or using yarn:
```bash
yarn dev
```

Upon executing these steps, the application should be running on your localhost at the specified port (e.g., http://localhost:5179).

## Conclusion
This project aims to provide a professional and personalized presentation of one's resume, with the flexibility of filtering work experiences based on industry and easily accessible contact details. With the integration of Strapi as the CMS, the application is easily scalable and maintainable.

## Credits
Thisproject is based on the official SvelteKit Auth example for [Auth.js](https://sveltekit.authjs.dev).
