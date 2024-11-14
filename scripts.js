document.addEventListener("DOMContentLoaded", function () {
    // Health Status Chart
    const healthChartCtx = document.getElementById("healthChart").getContext("2d");
    new Chart(healthChartCtx, {
        type: "doughnut",
        data: {
            labels: ["On Track", "At Risk", "Delayed"],
            datasets: [{
                data: [50, 30, 20],
                backgroundColor: ["#1c60d2", "#ffa726", "#f44336"]
            }]
        },
        options: {
            responsive: true,
            animation: { animateRotate: true, duration: 1500 }
        }
    });

    // Project Progress Chart
    const progressChartCtx = document.getElementById("progressChart").getContext("2d");
    new Chart(progressChartCtx, {
        type: "line",
        data: {
            labels: ["Project A", "Project B", "Project C", "Project D", "Project E", "Project F", "Project G", "Project H", "Project I", "Project J"],
            datasets: [{
                label: "Progress %",
                data: [80, 45, 60, 70, 90, 55, 75, 30, 85, 95],
                borderColor: "#00e5ff",
                fill: true,
                backgroundColor: "rgba(0, 229, 255, 0.1)"
            }]
        },
        options: {
            responsive: true,
            animation: { duration: 1200 },
            scales: { y: { beginAtZero: true, max: 100 } }
        }
    });

    // Priority Levels Chart
    const priorityChartCtx = document.getElementById("priorityChart").getContext("2d");
    new Chart(priorityChartCtx, {
        type: "polarArea",
        data: {
            labels: ["High Priority", "Medium Priority", "Low Priority"],
            datasets: [{
                data: [40, 35, 25],
                backgroundColor: ["#f44336", "#ffa726", "#4caf50"]
            }]
        },
        options: {
            responsive: true,
            animation: { animateScale: true, duration: 1000 }
        }
    });

    // Comparative Analysis Chart
    const comparisonChartCtx = document.getElementById("comparisonChart").getContext("2d");
    new Chart(comparisonChartCtx, {
        type: "bar",
        data: {
            labels: ["Project A", "Project B", "Project C", "Project D", "Project E"],
            datasets: [{
                label: "Completion %",
                data: [60, 40, 70, 50, 80],
                backgroundColor: "#00e5ff"
            }]
        },
        options: {
            responsive: true,
            animation: { duration: 1000 }
        }
    });

    // Resource Allocation Chart
    const resourceChartCtx = document.getElementById("resourceChart").getContext("2d");
    new Chart(resourceChartCtx, {
        type: "pie",
        data: {
            labels: ["Team A", "Team B", "Team C"],
            datasets: [{
                data: [40, 35, 25],
                backgroundColor: ["#1c60d2", "#ffa726", "#f44336"]
            }]
        },
        options: {
            responsive: true,
            animation: { duration: 1500 }
        }
    });

    // Risk Analysis Chart (New)
    const riskChartCtx = document.getElementById("riskChart").getContext("2d");
    new Chart(riskChartCtx, {
        type: "radar",
        data: {
            labels: ["Risk Assessment", "Risk Impact", "Resource Impact", "Strategic Alignment"],
            datasets: [{
                label: "Project Risk Profile",
                data: [70, 50, 80, 60],
                backgroundColor: "rgba(255, 87, 34, 0.2)",
                borderColor: "#ff5722",
                borderWidth: 2
            }]
        },
        options: {
            responsive: true,
            animation: { duration: 1500 }
        }
    });

    // Additional dynamic elements for the user interface
    const glowButton = document.querySelector('.glow-button');
    if (glowButton) {
        glowButton.addEventListener('click', function() {
            alert("AI insights activated! Analyze your projects in real-time.");
        });
    }
});
