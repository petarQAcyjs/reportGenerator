const fs = require("fs");
const path = require("path");
const Chart = require("chart.js");

// Directory path
const directoryPath = path.join(path.dirname(__dirname), "reports/html/.jsons");

// Function to read files in a directory and count occurrences of "fail" and "pass"
function countFailPassFiles(directoryPath) {
  let PassCount = 0;
  let FailCount = 0;

  const files = fs.readdirSync(directoryPath);
  files.forEach((file) => {
    if (file.includes("fail")) {
    FailCount++;
    } else if (file.includes("pass")) {
      PassCount++;
    }
  });

  return {
    FailCount,
    PassCount
  };
}

// Function to create HTML file with pie chart
function createHTMLReport(
  FailCount,
  PassCount
) {
  const htmlContent = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Availability of websites</title>
        <script src="https://cdn.jsdelivr.net/npm/chart.js"></script>

      <style>
        .content {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
        }
        .charts {
            display: flex;
            flex-wrap: wrap;
            align-items: normal;
            justify-content: space-evenly;
        }
        @media (max-width: 600px) {
          .chart-container {
            display: block;
            width: 45%;
            height: 400px;
            padding: 30px;
            margin-top: 20px;
          }
        }
        .heading {
          display: flex;
          justify-content: center;
        }
        </style>

    </head>
    <body>
    <div
    style="
      width: 100%;">

  <div class="content">
    <div style="width: 100%">
      <h1 style="font-family: Roboto; text-align: center; color: #464646">
      Supervision
      </h1>
    <div class="charts">
      <div>
      <div class="heading">
      <h2>E-commerce</h2>
      </div>
      <p>Ability to register since the beginning of tracking</p>
      <div class="chartContainer" style="height: 300px; width: 300px">
        <canvas id="Chart"></canvas>
      </div>
    </div>

  </div>
  </div>
    </div>
  </div>
        <script>

          const FailCount = ${FailCount};
          const PassCount = ${PassCount};

            function generatePieChart(failCount, passCount, chartId) {
              const ctx = document.getElementById(chartId).getContext("2d");
              new Chart(ctx, {
                type: "pie",
                data: {
                  
                  labels: ["Able: " + passCount, "Not-Able: " + failCount],
                  datasets: [
                    {
                      label: "File Results",
                      data: [passCount, failCount],
                      backgroundColor: ["rgba(16, 185, 129, 0.8)", "rgba(239, 68, 68, 1)"],
                      borderColor: ["rgba(0, 255, 0, 0)", "rgba(255, 0, 0, 0)"],
                      borderWidth: 1,
                    },
                  ],
                },
                options: {
                  responsive: true,
                  maintainAspectRatio: false,
                },
              });
            }

            generatePieChart(FailCount, PassCount, "Chart");
        </script>
    </body>
    </html>
    `;
  const parentDirectory = path.dirname(__dirname);
  const targetDirectory = path.join(parentDirectory, "reports/html");
  const reportFilePath = path.join(targetDirectory, "trackingReport.html");
  fs.writeFileSync(reportFilePath, htmlContent);
}

// Count "fail" and "pass" files
const {
  FailCount,
  PassCount,
} = countFailPassFiles(directoryPath);

// Create HTML report with pie chart
createHTMLReport(
  FailCount,
  PassCount
);