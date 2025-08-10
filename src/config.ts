export const siteConfig = {
  name: " Jade Piller Cammal",
  title: "Master’s Student in Computer Science | AI & Cloud Engineering",
  description: "Projects and work focused on AI and machine learning, built on my electronics engineering background and computer science master’s, while exploring cloud technologies.",
  accentColor: "#c86b85",
  social: {
    email: "pillercammaljade@gmail.com",
    linkedin: "https://www.linkedin.com/in/jade-piller-cammal-242b88261/",
    github: "https://github.com/jadep1103",
  },
  aboutMe:
   "Master's AI student at Université Laval (QC) with a keen interest in cloud engineering, engineer by training, curious by nature. I made the leap from electronics to AI because I wanted to understand intelligence beyond circuits. What I love about this field? You need to be both methodical and inventive to make things work. I find that physical challenges — gym, running — keep my mind sharp and focused. Currently in Canada for my master's, I’m also preparing for the AWS Solutions Architect Associate certification to build foundational cloud skills from scratch. I'm learning as much about AI as I am about myself — and both feed each other." ,skills: [
      "Python",
      "PyTorch",
      "TensorFlow",
      "FastAPI",
      "React",
      "PostgreSQL",
      "AWS",
      "Docker",
      "CI/CD",
      "NLP",
      "Computer Vision",
      "Reinforcement Learning",
      "Transformers",
      "OpenCV",
    ],
    projects: [
      {
        name: "Freedom to Eat 🍎",
        description:
          "Comprehensive food journaling web app promoting mindful eating, with detailed context tracking (location, company, emotions, hunger/fullness) and image uploads. Built with FastAPI + PostgreSQL backend, React frontend, and JWT authentication. Ongoing work on analytics dashboard, NLP sentiment analysis, and AWS deployment.",
        link: "https://github.com/jadep1103/freedom-to-eat",
        skills: [
          "FastAPI",
          "PostgreSQL",
          "React",
          "TypeScript",
          "Docker",
          "AWS",
          "NLP",
          "JWT Authentication"
        ],
      },
      {
        name: "Weeds Classification Suite 🌿🌱",
        description:
          "Comprehensive precision agriculture system featuring two AI-based weed identification pipelines: a YOLOv8 real-time detection model (12 species, 99.5% mAP@0.5, 30–60 FPS) for field deployment, and a custom CNN classifier (15 species, ~97% validation accuracy) with extensive data augmentation for robust recognition. Designed for integration with drones, smart farming equipment, and agricultural monitoring tools.",
        link: "https://github.com/jadep1103/YOLO-weedsClassification.git"
        ,
        skills: [
          "Python",
          "YOLOv8",
          "OpenCV",
          "Ultralytics",
          "TensorFlow",
          "Keras",
          "CNN",
          "Computer Vision",
          "Deep Learning",
          "CUDA",
          "Data Augmentation"
        ],
      },      
      {
        name: "SafeRL: TRC vs PPO 🤖",
        description:
          "Modern reimplementation of the Trust Region Conditional Value at Risk (TRC) safe reinforcement learning algorithm, compared with Proximal Policy Optimization (PPO) in Safety-Gymnasium environments. Includes sim-to-real transfer experiments from easier (Goal1) to harder (Goal2) safety constraints. Tracks reward, safety violations, and CVaR using Weights & Biases.",
        link: "https://github.com/jadep1103/safeRL.git",
        skills: [
          "Python",
          "PyTorch",
          "Reinforcement Learning",
          "Safe RL",
          "MuJoCo",
          "Safety-Gymnasium",
          "Stable-Baselines3",
          "Weights & Biases"
        ],
      },
      {
        name: "F1-Tenth Biosignal Control System 🏎️🤖",
        description:
          "LSTM-based control system for a 1/10 scale F1 car using multi-modal biosignals from the Sifilab Biopoint wearable sensor. Processes IMU data with a custom PyTorch pipeline for 5-class gesture classification. Part of the Université Laval AI Club Winter 2025 initiative, with future plans for real-time multi-sensor fusion and full car integration.",
        link: "https://github.com/jadep1103/LSTM-f1-tenth.git",
        skills: [
          "Python",
          "PyTorch",
          "LSTM",
          "Time-Series Analysis",
          "IMU Processing",
          "Signal Processing",
          "Pandas",
          "Scikit-learn"
        ],
      },
      {
        name: "RAG System with LangChain 🧠",
        description:
          "Experimental Retrieval-Augmented Generation pipeline combining LangChain-based document retrieval with LLMs (Mistral 7B, Llama). Processes PDFs into embeddings (HuggingFace sentence transformers), stores them in FAISS, and answers queries via Gradio UI or console mode. Designed for intelligent, context-aware question answering.",
        link: "https://github.com/jadep1103/1st-time-RAG.git",
        skills: [
          "Python",
          "LangChain",
          "LLMs",
          "FAISS",
          "HuggingFace",
          "Sentence Transformers",
          "Gradio",
          "PDF Processing"
        ],
      },
      {
        name: "Egyptian Hieroglyphs Classification 📜",
        description:
          "Academic project comparing CNN and Transformer architectures (ResNet, Inception, ViT) for classifying Egyptian hieroglyphs across 40 classes. Achieved up to 98.7% accuracy using frozen ResNet18 with extensive data augmentation and transfer learning. Explores fine-tuning strategies to aid automated analysis of ancient scripts.",
        link: "https://github.com/jadep1103/Hieroglyphs-Classification.git",
        skills: [
          "Python",
          "PyTorch",
          "Computer Vision",
          "CNN",
          "Transfer Learning",
          "Vision Transformers",
          "Data Augmentation",
          "Deep Learning",
          "Multi-class Classification",
          "Model Evaluation",
        ],
      }
           
  ],
  experience: [
    {
      company: "Reactional Music",
      title: "AI Software Engineer Intern",
      dateRange: "April 2024 - August 2024",
      location: "Stockholm, Sweden",
      bullets: [
        "Developed AI music generation system using transformer models for game composers",
        "Built data pipeline from Reaper DAW processing melodies, chords, and percussion arrangements",
        "Skills: Python, PyTorch, Transformers, Music Information Retrieval, DAW Integration",
      ],
    },
    {
      company: "Club Intelligence Artificielle (CIA) - Université Laval",
      title: "Recruitment Lead",
      dateRange: "August 2025 - Present",
      location: "Quebec City, Canada",
      bullets: [
        "Lead 4-person recruitment team to identify and attract talent for club AI projects",
        "Coordinate outreach at tech kiosks, inter-university events, and department presentations",
        "Organize club visibility initiatives contributing to 300+ LinkedIn followers and 59 active members",
        "Support club activities reaching 238+ participants across 12 events (tutorials, development days, reading groups)",
      ],
    },
  ],
  education: [
    {
      school: "Université Laval (Canada)",
      degree: "Master’s in Computer Science (Artificial Intelligence)",
      dateRange: "2024 - Present",
      achievements: [
        "Key Coursework:",
        "• Cloud-Native Applications & DevOps (GLO-7008)",
        "• Advanced Databases (GLO-7035)",
        "• Reinforcement Learning (IFT-7201)",
        "• Deep Neural Networks (GLO-7030)",
        "• Bayesian Statistics (STT-7145)",
        "• Data Mining Techniques (SIO-6003)",
        "• Advanced Artificial Intelligence Techniques (IFT-7025)",
        "• Computer Vision (GIF-7001)",
        "• Project Management (GSO-6082)",
        "• Software Quality Assurance (IFT-6006)"
      ],
    },
    {
      school: "ENSEA (France)",
      degree: "Engineering Degree in Electronics & Computer Science",
      dateRange: "2019 - 2024",
      achievements: [
        "Specialization on AI/Big Data with good foundation in embedded systems",
        "Core Skills: Signal Processing, Electronics, Microcontrollers, Embedded Systems",
        "Key Coursework:",
        "• Digital Signal Processing & Fourier Analysis",
        "• Embedded Programming (C/C++)",
        "• Electronic Systems & Control Theory", 
        "• Communications Systems",
        "• Computer Vision & Machine Learning",
      ]
    }
  ],

};
