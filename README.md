# Decision-Intelligence-Dashboard
application that provides different graphical representations to show progress, conflicting priorities, recommendations to complete all planned projects.


/dashboard
│
├── index.php               # Master file of dashboard

├── config.php              # Configuration to MongoDB connection

├── assets/

│   ├── css/

│   │   └── styles.css      # File CSS for dashboard
│   ├── js/
│   │   └── scripts.js      # Script JavaScript for logic and visualization
│   └── lib/
│       └── Chart.min.js    # Library Chart.js for gragh
└── api/
    ├── fetch_data.php      # API to data retriving from MongoDB
    └── suggestions.php     # API to generate suggestion with LangChain
