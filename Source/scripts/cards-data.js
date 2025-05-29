// ==================    Index.html ================= //
const data_analysis_skill_set = [
    {
        iconType: "img",
        iconContent: "./Source/images/python_r4_200x200.png", // Programming
        title: "Programming & Statistical Languages",
        subtitle: "Proficiency in Python and R for data analysis, modeling, and automation of analytical tasks."
    },
    {
        iconType: "img",
        iconContent: "./Source/images/data_storage_query2_200x200.png", // Data storage/query
        title: "Data Storage & Querying",
        subtitle: "Skilled in using SQL and Excel to store, manage, and query structured data efficiently."
    },
    {
        iconType: "img",
        iconContent: "./Source/images/data_wrangling3_200x200.png", // Wrangling
        title: "Data Wrangling & Exploration",
        subtitle: "Experienced with Pandas and NumPy to clean, transform, and explore datasets for deeper insights."
    },
    {
        iconType: "img",
        iconContent: "./Source/images/machine_learning_stack_200x200.png", // ML
        title: "Machine Learning & Advanced Modeling",
        subtitle: "Utilize Scikit-learn, TensorFlow, and Keras for predictive analytics and building intelligent models."
    },
    {
        iconType: "img",
        iconContent: "./Source/images/BI_Visualization_200x200.png", // Visualization
        title: "BI & Visualization",
        subtitle: "Create compelling dashboards and reports using Tableau and Power BI to communicate data-driven findings effectively."
    }
];


const ml_ai_technology_stack = [
    {
        iconType: "img",
        iconContent: "./Source/images/ml_frameworks.png", // ML frameworks
        title: "ML/Deep Learning Frameworks",
        subtitle: "Build and train models using TensorFlow, PyTorch, Scikit-Learn, and MXNet."
    },
    {
        iconType: "img",
        iconContent: "./Source/images/pre_trained.png", // Generative models
        title: "Pre-trained and Generative Models",
        subtitle: "Leverage GPT, StyleGAN, YOLO, and Stable Diffusion for advanced AI capabilities."
    },
    {
        iconType: "img",
        iconContent: "./Source/images/nlp_language.png", // NLP
        title: "NLP & Language Processing Libraries",
        subtitle: "Process and analyze language with NLTK, Transformers, and SpaCy."
    },
    {
        iconType: "img",
        iconContent: "./Source/images/mlops_cloud.png", // MLOps/Deployment
        title: "MLOps, Cloud & Deployment Tools",
        subtitle: "Deploy scalable ML systems using MLFlow, Vertex AI, Azure AI, Kubernetes, and Docker."
    }
];



// MLOps Cards

const mlops_cards = [
    {
        iconType: 'i',
        iconContent: 'bi bi-shield-lock-fill', // Bootstrap icon for security and training
        title: 'Secure AI Model Training',
        subtitle: 'Ensuring integrity and confidentiality of AI models throughout training lifecycle.'
    },
    {
        iconType: 'i',
        iconContent: 'bi bi-heart-fill', // Bootstrap icon for ethics/fairness
        title: 'Ethical AI Development',
        subtitle: 'Developing AI systems responsibly with fairness, transparency, and accountability.'
    },
    {
        iconType: 'i',
        iconContent: 'bi bi-file-earmark-lock-fill', // Bootstrap icon for encryption and data protection
        title: 'Advanced Encryption & Data Protection',
        subtitle: 'Implementing robust encryption and data protection to safeguard sensitive AI data.'
    },
    {
        iconType: 'i',
        iconContent: 'bi bi-clipboard-check-fill', // Bootstrap icon for compliance and auditing
        title: 'Automated AI Compliance & Auditing',
        subtitle: 'Automating processes for AI systems to adhere to regulatory standards.'
    },
    {
        iconType: 'i',
        iconContent: 'bi bi-person-badge-fill', // Bootstrap icon for access control and identity
        title: 'Access Control & Identity Management',
        subtitle: 'Managing user access and identities for controlling AI model interactions.'
    },
    {
        iconType: 'i',
        iconContent: 'bi bi-mask', // Bootstrap icon for privacy
        title: 'Privacy-Focused AI Governance',
        subtitle: 'Establishing frameworks and policies to govern AI development emphasizing data privacy.'
    }
];

// =============================================================//
// Privacy, Security & AI Governance Features Cards


const security_features = [
    {
        iconType: 'i',
        iconContent: 'bi bi-robot', // Bootstrap icon for automation
        title: 'Automated Model Training & Deployment',
        subtitle: 'Automating the entire lifecycle from training to deployment for efficiency.'
    },
    {
        iconType: 'i',
        iconContent: 'bi bi-activity', // Bootstrap icon for real-time monitoring
        title: 'Real-Time Model Monitoring',
        subtitle: 'Continuously tracking model performance and detecting anomalies in real-time.'
    },
    {
        iconType: 'i',
        iconContent: 'bi bi-server', // Bootstrap icon for serving/scalability
        title: 'Scalable Model Serving',
        subtitle: 'Efficiently serving models at scale to handle varying demand.'
    },
    {
        iconType: 'i',
        iconContent: 'bi bi-speedometer', // Bootstrap icon for optimization
        title: 'Automated Model Optimization',
        subtitle: 'Automatically fine-tuning models for improved performance and efficiency.'
    },
    {
        iconType: 'i',
        iconContent: 'bi bi-git', // Bootstrap icon for version control
        title: 'Version Control & Experiment Tracking',
        subtitle: 'Managing model versions and tracking experiments for reproducibility.'
    },
    {
        iconType: 'i',
        iconContent: 'bi bi-gpu-card', // Bootstrap icon for GPU
        title: 'GPU Support',
        subtitle: 'Leveraging GPU acceleration for faster model training and inference.'
    },
    {
        iconType: 'i',
        iconContent: 'bi bi-columns-gap', // Bootstrap icon for parallelization/distributed
        title: 'Parallelization and Distributed Computing',
        subtitle: 'Distributing workloads across multiple resources for enhanced processing.'
    },
    {
        iconType: 'i',
        iconContent: 'bi bi-box-arrow-in-right', // Bootstrap icon for rollout
        title: 'Model Rollout',
        subtitle: 'Strategically deploying new model versions into production environments.'
    }
];


// ============================================================//
// Data Analysis Cards
const enterprise_ready = [
    {
        iconType: 'i',
        iconContent: 'bi bi-layout-text-sidebar-reverse', // Bootstrap icon for GUI/API
        title: 'Flexible GUI and API Interface',
        subtitle: 'Providing adaptable graphical and programmatic interfaces for user interaction.'
    },
    {
        iconType: 'i',
        iconContent: 'bi bi-person-check-fill', // Bootstrap icon for access control
        title: 'Role-based Access Control',
        subtitle: 'Managing user permissions based on their roles within the system.'
    },
    {
        iconType: 'i',
        iconContent: 'bi bi-key-fill', // Bootstrap icon for authentication
        title: 'LDAP Authentication',
        subtitle: 'Integrating with LDAP for centralized user authentication and management.'
    },
    {
        iconType: 'i',
        iconContent: 'bi bi-graph-up-arrow', // Bootstrap icon for analytics/insights
        title: 'Advanced Data Analytics & AI Insights',
        subtitle: 'Extracting deep insights from data using advanced analytics and AI.'
    },
    {
        iconType: 'i',
        iconContent: 'bi bi-plug-fill', // Bootstrap icon for integration
        title: 'Intelligent API & System Integration',
        subtitle: 'Seamlessly connecting diverse systems through smart API integrations.'
    },
    {
        iconType: 'i',
        iconContent: 'bi bi-cpu-fill', // Bootstrap icon for automation/AI power
        title: 'AI-Powered Business Automation',
        subtitle: 'Automating business processes with intelligence provided by AI.'
    },
    {
        iconType: 'i',
        iconContent: 'bi bi-cloud-fill', // Bootstrap icon for cloud integration
        title: 'End-to-End Cloud Integration',
        subtitle: 'Achieving complete integration with cloud services across all operations.'
    },
    {
        iconType: 'i',
        iconContent: 'bi bi-gear-fill', // Bootstrap icon for backend architecture
        title: 'High-Performance Backend Architecture',
        subtitle: 'Designing robust and efficient backend systems for optimal performance.'
    },
    {
        iconType: 'i',
        iconContent: 'bi bi-arrows-expand', // Bootstrap icon for scalability
        title: 'Adaptive Scalability',
        subtitle: 'Ensuring the system can scale dynamically to meet changing demands.'
    }
];



// ============================================================//
// Cards

const ai_modeling_cards = [
    {
        iconType: 'i',
        iconContent: 'bi bi-cpu-fill', // Generic AI/ML icon
        title: 'TensorFlow'
    },
    {
        iconType: 'i',
        iconContent: 'bi bi-lightning-fill', // Represents speed/power
        title: 'PyTorch'
    },
    {
        iconType: 'i',
        iconContent: 'bi bi-boxes', // Represents various tools/algorithms
        title: 'Scikit-Learn'
    },
    {
        iconType: 'i',
        iconContent: 'bi bi-palette-fill', // Represents generative art/style
        title: 'StyleGAN'
    },
    {
        iconType: 'i',
        iconContent: 'bi bi-bezier', // Represents neural networks/connections
        title: 'MXNet'
    },
    {
        iconType: 'i',
        iconContent: 'bi bi-chat-dots-fill', // Represents language/text generation
        title: 'GPT Models'
    },
    {
        iconType: 'i',
        iconContent: 'bi bi-camera-fill', // Represents computer vision/object detection
        title: 'YOLO Models'
    },
    {
        iconType: 'i',
        iconContent: 'bi bi-book-fill', // Represents natural language processing/text
        title: 'NLTK'
    },
    {
        iconType: 'i',
        iconContent: 'bi bi-arrows-expand', // Represents transformation/adaptability
        title: 'Transformers'
    },
    {
        iconType: 'i',
        iconContent: 'bi bi-image-fill', // Represents image generation/diffusion
        title: 'Stable Diffusion'
    },
    {
        iconType: 'i',
        iconContent: 'bi bi-blockquote-right', // Represents text processing/NLP
        title: 'SpaCy'
    },
    {
        iconType: 'i',
        iconContent: 'bi bi-bar-chart-steps', // Represents workflow/tracking
        title: 'MLFlow'
    },
    {
        iconType: 'i',
        iconContent: 'bi bi-google', // Represents Google Cloud
        title: 'Google Vertex AI'
    },
    {
        iconType: 'i',
        iconContent: 'bi bi-microsoft', // Represents Azure
        title: 'Azure AI'
    },
    {
        iconType: 'i',
        iconContent: 'bi bi-box-seam-fill', // Represents containerization/orchestration
        title: 'Kubernetes'
    },
    {
        iconType: 'i',
        iconContent: 'bi bi-box-fill', // Represents containerization
        title: 'Docker'
    }
];


// ============================================================ //

const data_analysis_stack = [
    {
        iconType: 'i',
        iconContent: 'bi bi-file-earmark-code-fill', // Represents programming/code
        title: 'Python'
    },
    {
        iconType: 'i',
        iconContent: 'bi bi-r-square-fill', // Represents R language
        title: 'R'
    },
    {
        iconType: 'i',
        iconContent: 'bi bi-database-fill', // Represents databases/SQL
        title: 'SQL'
    },
    {
        iconType: 'i',
        iconContent: 'bi bi-bar-chart-line-fill', // Represents visualization/charts
        title: 'Tableau'
    },
    {
        iconType: 'i',
        iconContent: 'bi bi-bar-chart-fill', // Represents business intelligence/charts
        title: 'Power BI'
    },
    {
        iconType: 'i',
        iconContent: 'bi bi-table', // Represents spreadsheets/tables
        title: 'Excel'
    },
    {
        iconType: 'i',
        iconContent: 'bi bi-pie-chart-fill', // Represents data manipulation/analysis
        title: 'Pandas'
    },
    {
        iconType: 'i',
        iconContent: 'bi bi-calculator-fill', // Represents numerical operations
        title: 'NumPy'
    },
    {
        iconType: 'i',
        iconContent: 'bi bi-boxes', // Represents machine learning tools
        title: 'Scikit-learn'
    },
    {
        iconType: 'i',
        iconContent: 'bi bi-cpu-fill', // Represents AI/ML frameworks
        title: 'TensorFlow'
    },
    {
        iconType: 'i',
        iconContent: 'bi bi-layers-fill', // Represents neural network layers
        title: 'Keras'
    }
];



// Developer Challenges Carouse Items Data

const developer_challenges = [
    {
        title: "Time-Consuming Code Generation",
        paragraph: "Manually writing repetitive boilerplate code can slow progress. Tools like Bolt instantly generate scaffold code, letting developers focus on complex logic.",
        active: true,
        imageSrc: "./images/Time-consuming.png"
    },
    {
        title: "Debugging and Code Quality",
        paragraph: "Identifying bugs in extensive codebases is challenging. GitHub Copilot and Cursor provide context-aware suggestions and in-editor hints that streamline debugging and elevate code quality.",
        active: false,
        imageSrc: "./images/Time-consuming.png"
    },
    {
        title: "Complex Integration Processes",
        paragraph: "Merging diverse technologies (Flutter, Kotlin, Node.js, Python) can lead to integration errors. AI-powered insights ease connector development and compatibility checks.",
        active: false,
        imageSrc: "./images/Time-consuming.png"
    },
    {
        title: "Testing and Deployment Hurdles",
        paragraph: "Comprehensive testing and smooth deployments are crucial. Firebase Studio from Google automates end-to-end tests, previews deployments, and ensures robust security.",
        active: false,
        imageSrc: "./images/Time-consuming.png"
    },
    {
        title: "Security Vulnerabilities",
        paragraph: "Continuously monitoring for vulnerabilities is time-intensive. AI-driven tools detect potential risks early and recommend proactive security measures.",
        active: false,
        imageSrc: "./images/Time-consuming.png"
    },
    {
        title: "Scalability and Performance Optimization",
        paragraph: "Balancing loads and scaling efficiently is intricate. AI analytics pinpoint performance bottlenecks and suggest resource optimizations.",
        active: false,
        imageSrc: "./images/Time-consuming.png"
    },
    {
        title: "Maintaining Documentation",
        paragraph: "Keeping documentation current is often overlooked. In-editor AI like GitHub Copilot auto-generates contextual documentation, reducing manual overhead.",
        active: false,
        imageSrc: "./images/Time-consuming.png"
    }
];



// Solutions for Traditional Data Analysis tools
const data_analysis_ai_solutions = [
    {
        iconType: 'img',
        iconContent: "./images/data_engineering_services.png",
        title: 'Data Engineering Services',
        subtitle: 'Handling large, complex datasets with robust engineering.',
        text: 'NAST offers robust data engineering services designed to handle large, complex datasets with ease. By utilizing Python libraries such as Pandas and Dask alongside cloud-based solutions, we efficiently process and store data before it even reaches tools like Excel, Power BI, or Tableau. This means you never have to worry about system slowdowns or data crashes due to overwhelming volumes—the heavy lifting is done for you.'
    },
    {
        iconType: 'img',
        iconContent: "./images/custom_analytical_solution.png",
        title: 'Custom Analytical Solutions',
        subtitle: 'Tailored solutions using advanced statistical analysis and machine learning.',
        text: 'Our team develops tailor-made analytical solutions using Python and R to perform complex data manipulation, advanced statistical analysis, and machine learning. These solutions go far beyond the out-of-the-box capabilities of traditional platforms. Whether it’s uncovering hidden trends or solving specific business challenges, our customized analysis provides deep insights that standard tools simply can’t match.'
    },
    {
        iconType: 'img',
        iconContent: "./images/reporting_pipeline.png",
        title: 'Automation and Reporting Pipelines',
        subtitle: 'Streamlining data workflows with automated pipelines.',
        text: 'NAST designs and implements automated pipelines that extract data from various sources, process it efficiently, and generate accurate reports or feed seamlessly into your visualization tools. By automating recurring tasks and reducing the potential for human error, we ensure your data remains fresh and your analysis is always up to date—empowering you to focus on strategic decision-making.'
    },
    {
        iconType: 'img',
        iconContent: "./images/integration_and_extraction.png",
        title: 'Integration and Extension',
        subtitle: 'Enhancing your tools with advanced programming integration.',
        text: 'We extend the functionality of your favorite tools by integrating Python and R directly with Excel, Power BI, and Tableau. This integration bridges the gap between familiar interfaces and the powerful capabilities of advanced programming, providing you with enhanced control and flexibility. In doing so, you get the best of both worlds: an intuitive user experience with the robustness of custom analytics.'
    },
    {
        iconType: 'img',
        iconContent: "./images/training_and_support.png",
        title: 'Training and Support',
        subtitle: 'Empowering teams to master advanced data analytics.',
        text: 'At NAST, we don’t just deliver solutions—we empower your team. Our comprehensive training programs and ongoing support help your staff master these advanced analytical tools and techniques. With expert guidance, your team can leverage Python and R to become truly self-sufficient in navigating complex data challenges.'
    },
    {
        iconType: 'img',
        iconContent: "./images/counslting_service2.png",
        title: 'Consulting Services',
        subtitle: 'Expert guidance tailored to your unique data needs.',
        text: 'Our consulting services are designed to assess your unique data analysis needs and craft a strategy that integrates the right mix of traditional tools and custom-built solutions. We provide expert guidance to ensure that every step, from data ingestion to actionable insights, is optimized for your business. With NAST on your side, you can maximize your data’s potential and set a course for sustainable growth.'
    }
];


const data_analysis_key_points = [
    {
        iconType: "img",
        iconContent: "./images/ai_edge_1.png",
        title: "AI-Powered Intelligence",
        subtitle: "Use AI and machine learning to turn large datasets into insights, reducing errors and speeding up decision-making across industries."
    },
    {
        iconType: "img",
        iconContent: "./images/ai_edge_2.png",
        title: "Integrated Tool Ecosystem",
        subtitle: "Combine tools like Excel, Power BI, and Python to deliver accessible reports and deep custom analysis for business needs."
    },
    {
        iconType: "img",
        iconContent: "./images/ai_edge_3.png",
        title: "Advanced Data Engineering",
        subtitle: "Use Pandas, Dask, and cloud tech to efficiently handle and store large-scale data with scalability and performance in mind."
    },
    {
        iconType: "img",
        iconContent: "./images/ai_edge_4.png",
        title: "Automated Analytics Pipelines",
        subtitle: "Automate data workflows for extraction, transformation, and reporting, ensuring accurate and timely insights with less manual effort."
    },
    {
        iconType: "img",
        iconContent: "./images/ai_edge_5.png",
        title: "Tailored Analytical Solutions",
        subtitle: "Deliver custom models and analytics that meet industry-specific challenges and reveal trends beyond standard tools."
    },
    {
        iconType: "img",
        iconContent: "./images/ai_edge_6.png",
        title: "Secure & Compliant Data Handling",
        subtitle: "Enforce strong security measures and comply with regulations to protect sensitive information and maintain data reliability."
    }
];



// Big Data Tool Kit

const big_data_features = [
    {
        iconType: "img",
        iconContent: "./images/scalable_data_solution_2.png", // scalable systems
        title: "Scalable Data Solutions",
        subtitle: "Your company should ensure that all data analysis tools and workflows can seamlessly handle small to massive datasets across various domains without performance issues."
    },
    {
        iconType: "img",
        iconContent: "./images/ai_powered_analytics.png", // AI & ML
        title: "AI-Powered Analytics",
        subtitle: "Implement machine learning and AI-driven approaches to enhance data processing, predictive analytics, and automation, making analysis more efficient and insightful."
    },
    {
        iconType: "img",
        iconContent: "./images/seamless_integration.png", // integration
        title: "Seamless Integration",
        subtitle: "Ensure compatibility between Excel, Power BI, Tableau, and programming languages like Python and R, enabling businesses to use AI alongside traditional tools without disrupting existing workflows."
    },
    {
        iconType: "img",
        iconContent: "./images/automation_optimization.png", // automation
        title: "Automation & Optimization",
        subtitle: "Develop automated data pipelines that reduce manual workload, minimize human error, and optimize the speed and accuracy of data analysis."
    },
    {
        iconType: "img",
        iconContent: "./images/user_customization.png", // customization
        title: "User-Centric Customization",
        subtitle: "Provide tailored analytics solutions that address industry-specific needs, ensuring businesses get deeper insights beyond standard visualizations and reporting."
    },
    {
        iconType: "img",
        iconContent: "./images/security_compliance.png", // security & compliance
        title: "Security & Compliance",
        subtitle: "Maintain stringent data security protocols and ensure compliance with global regulations, safeguarding sensitive business and customer data while providing reliable analytics solutions."
    }
];
