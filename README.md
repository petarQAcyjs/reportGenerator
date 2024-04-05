# reportGenerator

## Overview
A key feature of this project is the showcase of custom function located in cypress/fixtures/, which allows for the generation of tracking report that is ideal for visualisation of test success rate in cases of having automated tests that get triggered automatically throug CI/CD or any other way.

![Screenshot 2024-04-05 122149](https://github.com/petarQAcyjs/reportGenerator/assets/118186259/7451a8f2-340a-4fc4-a1ae-2581651a7f56)

## Installation and Setup
### Prerequisites
Node.js (version 12 or higher)
npm (usually comes with Node.js)
## Step-by-Step Guide
1. Clone the Repository

Clone this repository to your local machine using the following command:

```bash
git clone [https://github.com/petarQAcyjs/reportGenerator]
```

2. Install Dependencies

Navigate to the project directory and install the required dependencies:

```bash
cd <project-name>
npm install
```

3. Install Cypress

Install Cypress via npm:

```bash
npm install cypress --save-dev
```

4. Open Cypress Test Runner

Launch the Cypress Test Runner:

```bash
npx cypress open
```

5. Install the Mochawesome plugin

6. Install Mochawesome report generator via npm:

```bash
npm i mochawesome-report-generator
```

6. Install charts
7. 
```bash
npm install chart.js
```

7. Run tests and generate report

Run custom scripts made in package.json file (in my case the "withReport")

```bash
npm run withReport
```

## Contact Information
For any queries or feedback regarding this project, please contact me at femicpetar@gmail.com
