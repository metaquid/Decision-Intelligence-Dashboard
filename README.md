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


Our project is an innovative Decision Intelligence Dashboard designed to support strategic project management through real-time data insights and AI-powered recommendations. Leveraging the strengths of MongoDB Atlas on AWS for scalable data storage, we manage and retrieve detailed information on various project timelines, resource allocations, and priorities.

To enhance the analysis and provide dynamic, actionable insights, we’re using Amazon Bedrock. Bedrock’s powerful AI models generate contextual, real-time recommendations, enabling our dashboard to suggest optimal paths for project completion, highlight potential conflicts, and prioritize tasks effectively.

The backbone of our AI orchestration is LangChain, an advanced AI framework that allows us to sequence and coordinate different AI tasks across Bedrock. By employing LangChain, we simplify complex decision-making flows and generate highly relevant suggestions tailored to each project scenario.

On the frontend, our dashboard is built with PHP, HTML, CSS, and JavaScript, ensuring a seamless, user-friendly experience. Interactive data visualizations highlight project status, progress, and AI recommendations, allowing project managers to make quick, informed decisions with a holistic view of all active projects.

In summary, this Decision Intelligence Dashboard integrates the power of MongoDB Atlas, Amazon Bedrock, and LangChain to provide project managers with a robust tool for streamlining project completion and enhancing decision-making efficiency. It’s a solution designed to adapt to the unique demands of each project, making real-time AI insights both accessible and actionable.
