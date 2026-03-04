export const siteConfig = {
  name: "Jade Piller-Cammal",
  title: "Master's Student in Computer Science | AI & ML",
  description: "Projects and work focused on AI and machine learning, built on an electronics engineering background and hands-on industry experience.",
  accentColor: "#c86b85",
  social: {
    email: "pillercammaljade@gmail.com",
    linkedin: "https://www.linkedin.com/in/jade-piller-cammal-242b88261/",
    github: "https://github.com/jadep1103",
  },
  aboutMe: "Master's student in Computer Science at Université Laval (QC, Canada), currently completing an AI R&D internship at Bentley Systems. Strong interest in AI/ML, Data Engineering, and Cloud & DevOps. Engineer by training with a foundation in electronics and embedded systems, I shifted to AI to design and understand intelligent systems beyond hardware. What I love about this field is that it challenges me to be both methodical and inventive, while collaborating and communicating effectively — qualities I bring to every project I tackle. Graduating May 2026.",

  skills: [
    "Python",
    "PyTorch",
    "TensorFlow",
    "FastAPI",
    "SQL + NoSQL",
    "Docker",
    "CI/CD",
    "NLP",
    "Computer Vision",
    "Reinforcement Learning",
    "Transformers",
    "OpenCV",
    "Kubernetes",
    "Elasticsearch",
    "MongoDB",
    "Cassandra"
  ],

  projects: [
    {
      name: "BouffeLab — Food Recommendation Platform",
      description:
        "Recommendation engine helping users make informed nutritional choices by matching recipe ingredients to real Canadian grocery products across 70k+ items and 220k recipes. Designed the full data pipeline, consolidating 4 data sources into NoSQL databases (Cassandra, MongoDB), with Elasticsearch search, FastAPI backend, Vue.js frontend, and a custom Nutri-Score calculator.",
      skills: [
        "Python",
        "FastAPI",
        "Cassandra",
        "MongoDB",
        "Elasticsearch",
        "Vue.js",
        "Docker",
        "ETL"
      ],
    },
    {
      name: "Precision Agriculture AI",
      description:
        "Dual weed detection pipeline: YOLOv8 real-time detection model (99.5% mAP, 30–60 FPS) and a CNN classifier (97% accuracy) with extensive data augmentation. Designed for drone-ready deployment on Raspberry Pi for field use.",
      link: "https://github.com/jadep1103/YOLO-weedsClassification.git",
      skills: [
        "Python",
        "YOLOv8",
        "OpenCV",
        "CNN",
        "Computer Vision",
        "Deep Learning",
        "Raspberry Pi"
      ],
    },
    {
      name: "F1-Tenth Biosignal Control System",
      description:
        "LSTM-based gesture control system for a 1/10 scale F1 car using wearable biosignals. Processes IMU data with a custom PyTorch pipeline for real-time 5-class gesture classification.",
      link: "https://github.com/jadep1103/LSTM-f1-tenth.git",
      skills: [
        "Python",
        "PyTorch",
        "LSTM",
        "IMU Processing",
        "Signal Processing",
        "Real-time Classification"
      ],
    },
    {
      name: "RAG Assistant — Contextual Q&A",
      description:
        "Retrieval-Augmented Generation pipeline for contextual Q&A over PDFs. Processes documents into semantic embeddings (HuggingFace), stores them in a FAISS vector store, and answers queries using LLMs (Mistral, Llama) via a LangChain pipeline.",
      link: "https://github.com/jadep1103/1st-time-RAG.git",
      skills: [
        "Python",
        "LangChain",
        "LLMs",
        "FAISS",
        "HuggingFace",
        "Mistral",
        "Llama"
      ],
    },
    {
      name: "SafeRL: TRC vs PPO",
      description:
        "Reimplementation of the Trust Region CVaR (TRC) safe reinforcement learning algorithm, benchmarked against PPO in Safety-Gymnasium environments. Includes sim-to-real transfer experiments across safety constraint difficulty levels, tracking reward, violations, and CVaR via Weights & Biases.",
      link: "https://github.com/jadep1103/safeRL.git",
      skills: [
        "Python",
        "PyTorch",
        "Reinforcement Learning",
        "Safe RL",
        "MuJoCo",
        "Weights & Biases"
      ],
    },
    {
      name: "Egyptian Hieroglyphs Classification",
      description:
        "Comparison of CNN and Transformer architectures (ResNet, Inception, ViT) for classifying Egyptian hieroglyphs across 40 classes. Achieved 98.7% accuracy using frozen ResNet18 with transfer learning and data augmentation.",
      link: "https://github.com/jadep1103/Hieroglyphs-Classification.git",
      skills: [
        "Python",
        "PyTorch",
        "Computer Vision",
        "Vision Transformers",
        "Transfer Learning",
        "Fine-Tuning"
      ],
    }
  ],

  experience: [
    {
      company: "Bentley Systems",
      title: "AI R&D Intern — Research Team",
      dateRange: "January 2026 - May 2026",
      location: "Québec, Canada",
      bullets: [
        "Developing surrogate ML models to replace computationally expensive physics simulations, achieving significant reductions in inference time while maintaining high prediction accuracy",
        "Benchmarking deep learning architectures on simulation-generated datasets in collaboration with domain engineering experts",
      ]
    },
    {
      company: "Reactional Music AB",
      title: "Software & AI Engineering Intern",
      dateRange: "April 2024 - August 2024",
      location: "Stockholm, Sweden",
      bullets: [
        "Implemented and trained Transformer & LSTM/RNN models to generate adaptive game soundtracks from initial tracks",
        "Deployed model and integrated functionality into the company's product front-end (React & TypeScript) to trigger model inference for music creation",
      ]
    },
    {
      company: "AI Club, Université Laval",
      title: "Recruitment Lead",
      dateRange: "July 2025 - Present",
      location: "Québec, Canada",
      bullets: [
        "Coordinated recruitment for student allocation across 8 multidisciplinary AI projects",
        "Grew club visibility (+63%; +300 LinkedIn followers) and supported 12+ events gathering over 240 participants",
      ],
    },
  ],

  education: [
    {
      school: "Université Laval (Canada)",
      degree: "Master's in Computer Science",
      dateRange: "2024 - May 2026",
      achievements: [
        "Key Coursework: Reinforcement Learning, Deep Neural Networks, Computer Vision, Data Mining & Advanced Databases, Bayesian Statistics, Cloud-Native Applications & DevOps, Software Quality Assurance, Project Management"
      ],
    },
    {
      school: "ENSEA (France)",
      degree: "State Engineering Degree — Computer & Electrical Engineering (equiv. B.Sc. + M.Sc.)",
      dateRange: "2022 - May 2026",
      achievements: [
        "Specialization in AI & Big Data with a strong foundation in embedded systems and signal processing",
        "Key Coursework: Digital Signal Processing, Embedded Programming (C/C++), Electronic Systems, Computer Vision & Machine Learning"
      ]
    }
  ],
};