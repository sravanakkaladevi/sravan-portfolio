const publicAsset = (path: string) => {
  const base = import.meta.env.BASE_URL || "/";
  const cleanBase = base.endsWith("/") ? base : base + "/";
  const cleanPath = path.startsWith("/") ? path.slice(1) : path;
  return `${cleanBase}${cleanPath}`;
};

export const Bio = {
  name: "A. Sravan Kumar",
  roles: [
    "MCA Graduate",
    "Aspiring Software Developer",
    "Python Developer",
  ],
  description:
    "MCA graduate focused on Python, web development, databases, machine learning, and cloud fundamentals. Experienced in building practical applications with Django, Streamlit, data-driven technologies, and blockchain.",
  location: "Hyderabad, India",
  email: "akkaladevisravankumar@gmail.com",
  github: "https://github.com/sravanakkaladevi",
  resume: "https://drive.google.com/file/d/1o2fhVEoDOZVFStFop075ySRsCVHJjjQI/view?usp=sharing",
  linkedin:
    "https://www.linkedin.com/in/akkaladevi-sravan-kumar-8311a43b3/overlay/Position/2852616034/treasury/?profileId=ACoAAGTxBaUB4Yz9wD5YfEVGxfokXF6bZqZAVJ8&lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base%3Bg6BD8v3TR9mzcH63vhzuSA%3D%3D",
  twitter: "",
  insta: "https://www.instagram.com/_sravansravan824_/",
  facebook: "",
};

export const skills = [
  {
    title: "Programming Languages",
    skills: [
      {
        name: "Python",
        image:
          "https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg",
        highlight: true,
      },
      {
        name: "Java",
        image:
          "https://raw.githubusercontent.com/devicons/devicon/master/icons/java/java-original.svg",
      },
      {
        name: "JavaScript",
        image:
          "https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg",
      },
      {
        name: "TypeScript",
        image:
          "https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg",
      },
    ],
  },
  {
    title: "Backend & Web",
    skills: [
      {
        name: "Django",
        image: "https://cdn.simpleicons.org/django/092E20",
      },
      {
        name: "HTML",
        image:
          "https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg",
      },
      {
        name: "CSS",
        image:
          "https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original.svg",
      },
      {
        name: "Bootstrap",
        image:
          "https://raw.githubusercontent.com/devicons/devicon/master/icons/bootstrap/bootstrap-original.svg",
      },
      {
        name: "REST APIs",
        image: "https://api.iconify.design/hugeicons/api.svg?color=%23FFFFFF",
      },
      {
        name: "Streamlit",
        image: "https://cdn.simpleicons.org/streamlit",
      },
    ],
  },
  {
    title: "Data & Machine Learning",
    skills: [
      {
        name: "Pandas",
        image:
          "https://raw.githubusercontent.com/devicons/devicon/master/icons/pandas/pandas-original.svg",
      },
      {
        name: "NumPy",
        image:
          "https://raw.githubusercontent.com/devicons/devicon/master/icons/numpy/numpy-original.svg",
      },
      {
        name: "Scikit-learn",
        image:
          "https://raw.githubusercontent.com/devicons/devicon/master/icons/scikitlearn/scikitlearn-original.svg",
      },
      {
        name: "Matplotlib",
        image: "https://cdn.simpleicons.org/matplotlib",
      },
      {
        name: "K-Means Clustering",
        image: "https://api.iconify.design/carbon/chart-cluster-bar.svg?color=%23FFFFFF",
      },
    ],
  },
  {
    title: "Databases",
    skills: [
      {
        name: "MySQL",
        image:
          "https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original.svg",
      },
      {
        name: "SQLite",
        image:
          "https://raw.githubusercontent.com/devicons/devicon/master/icons/sqlite/sqlite-original.svg",
      },
      {
        name: "PostgreSQL",
        image:
          "https://raw.githubusercontent.com/devicons/devicon/master/icons/postgresql/postgresql-original.svg",
      },
      {
        name: "SQL",
        image:
          "https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original-wordmark.svg",
      },
    ],
  },
  {
    title: "Blockchain & Web3",
    skills: [
      {
        name: "Ethereum",
        image:
          "https://raw.githubusercontent.com/devicons/devicon/master/icons/ethereum/ethereum-original.svg",
      },
      {
        name: "Solidity",
        image: "https://cdn.simpleicons.org/solidity",
      },
      {
        name: "Web3.py",
        image: "https://cdn.simpleicons.org/web3dotjs",
      },
      {
        name: "Ganache",
        image: "https://cdn.simpleicons.org/ganache",
      },
    ],
  },
  {
    title: "Cloud & Tools",
    skills: [
      {
        name: "Google Cloud Platform",
        image:
          "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg",
      },
      {
        name: "Git",
        image:
          "https://raw.githubusercontent.com/devicons/devicon/master/icons/git/git-original.svg",
      },
      {
        name: "GitHub",
        image:
          "https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png",
      },
      {
        name: "Linux",
        image:
          "https://raw.githubusercontent.com/devicons/devicon/master/icons/linux/linux-original.svg",
      },
      {
        name: "VS Code",
        image:
          "https://raw.githubusercontent.com/devicons/devicon/master/icons/vscode/vscode-original.svg",
      },
    ],
  },
  {
    title: "Security",
    skills: [
      {
        name: "Kali Linux",
        image: "https://cdn.simpleicons.org/kalilinux",
      },
      {
        name: "Wireshark",
        image: "https://cdn.simpleicons.org/wireshark",
      },
      {
        name: "Nmap",
        image: "https://nmap.org/images/nmap-logo-256x256.png",
      },
      {
        name: "Burp Suite",
        image: "https://cdn.simpleicons.org/burpsuite",
      },
      {
        name: "Network Security",
        image: "https://api.iconify.design/mdi/shield-network.svg?color=%23FFFFFF",
      },
      {
        name: "Vulnerability Assessment",
        image: "https://api.iconify.design/mdi/security.svg?color=%23FFFFFF",
      },
      {
        name: "Threat Modeling",
        image: "https://api.iconify.design/mdi/bug-outline.svg?color=%23FFFFFF",
      },
    ],
  },
];

export const experiences = [
  {
    id: 2,
    img: publicAsset("/logos/vodafone-idea-foundation.svg"),
    role: "Cybersecurity with Gen AI - Virtual Intern",
    company: "Vodafone Idea Foundation",
    date: "Jan 2026 - Feb 2026",
    desc: "Studied threat modeling, vulnerabilities, and risk assessment fundamentals. Explored AI-driven threat detection concepts and gained exposure to secure system design principles.",
    skills: [
      "Network Security",
      "Vulnerability Assessment",
      "Threat Modeling",
    ],
    doc: "https://drive.google.com/file/d/1XB6eS4zGf1q-OAHFJEicdw8vgLI5NTEP/view?usp=drive_link",
  },
  {
    id: 0,
    img: publicAsset("/logos/edunet-foundation.svg"),
    role: "AI/ML Virtual Intern",
    company: "Edunet Foundation (Microsoft & AICTE)",
    date: "Apr 2025 - May 2025",
    desc: "Built a Loan Prediction System using Python and Scikit-learn. Worked on data preprocessing, feature engineering, and model evaluation for better prediction performance.",
    skills: [
      "Python",
      "Scikit-learn",
      "Data Preprocessing",
      "Feature Engineering",
      "Model Evaluation",
    ],
    doc: "https://drive.google.com/file/d/1Z4v8R9pgzZkqIsI0ZkxOkxtI_Qcnvf74/view?usp=drive_link",
  },
  {
    id: 1,
    img: publicAsset("/logos/edunet-foundation.svg"),
    role: "Front End Web Development Intern",
    company: "Edunet Foundation (AICTE & Vodafone)",
    date: "Aug 2025 - Sept 2025",
    desc: "Built responsive web pages using HTML, CSS, and JavaScript. Implemented DOM manipulation features and delivered mobile-friendly user interface designs.",
    skills: ["HTML", "CSS", "JavaScript", "DOM Manipulation", "Responsive UI"],
    doc: "https://drive.google.com/file/d/1ghdsd1bp-l6M7HBoW3eKJBVKOtE-I8Hs/view?usp=drive_link",
  },
];

export const certifications = [
  {
    id: 0,
    img: publicAsset("/logos/microsoft.svg"),
    title: "Microsoft Certified: Azure AI Fundamentals",
    issuer: "Microsoft",
    code: "Exam AI-901",
    date: "13 September 2026",
    desc: "Officially earned Microsoft certification demonstrating fundamental knowledge of machine learning, computer vision, natural language processing, and generative AI workloads on Azure.",
    skills: [
      "Azure AI Services",
      "Machine Learning",
      "Computer Vision",
      "NLP",
      "Generative AI",
    ],
    doc: "https://drive.google.com/file/d/1dTP4K-Tnp0UUggglKMugU3bFAyGqwzAp/view?usp=sharing",
  },
];

export const education = [
  {
    id: 0,
    img: publicAsset("/logos/aurora-logo.png"),
    school: "Aurora's PG College, Hyderabad",
    date: "2024 - 2026",
    grade: "Completed",
    desc: "Master of Computer Applications with focus on software development, data structures, and scalable system design.",
    degree: "MCA",
  },
  {
    id: 1,
    img: publicAsset("/logos/sphoorthy-logo.png"),
    school: "Sphoorthy Degree College",
    date: "2021 - 2024",
    grade: "CGPA: 7.52",
    desc: "Completed B.Com Computer Applications with a strong academic foundation in programming and computer applications.",
    degree: "B.Com Computer Applications",
  },
];

export const projects = [
  {
    id: 1,
    title: "OrganChain — Blockchain-Based Organ Donation Tracking System",
    date: "2026",
    description:
      "A Django web application using a private/local Ethereum blockchain through Ganache for tracking donor registration, recipient records, organ matching, transplantation events and blockchain auditability.",
    image: publicAsset("/projects/organ-donation-blockchain.png"),
    tags: [
      "Python",
      "Django",
      "SQLite",
      "Solidity",
      "Ethereum",
      "Web3.py",
      "Ganache",
      "HTML",
      "CSS",
      "JavaScript",
      "Bootstrap",
    ],
    category: "web app",
    featured: true,
    github:
      "https://github.com/sravanakkaladevi/AN-APPLICATION-FOR-TRACKING-ORGAN-DONATION-IN-HOSPITALS-USING-BLOCKCHAIN",
    webapp:
      "https://github.com/sravanakkaladevi/AN-APPLICATION-FOR-TRACKING-ORGAN-DONATION-IN-HOSPITALS-USING-BLOCKCHAIN",
  },
  {
    id: 2,
    title: "CricSense AI Analytics Dashboard",
    date: "2026",
    description:
      "An AI-powered predictive dashboard application that analyzes historical cricket match data to forecast player scores, runs, and team win probabilities using Python, Scikit-learn, Pandas, and Streamlit.",
    image: publicAsset("/projects/cricsense-ai.png"),
    tags: ["Python", "Pandas", "Scikit-learn", "Streamlit", "Machine Learning"],
    category: "machine learning",
    featured: true,
    github: "https://github.com/sravanakkaladevi/CricSense-AI-Dashboard",
    webapp: "https://github.com/sravanakkaladevi/CricSense-AI-Dashboard",
  },
  {
    id: 3,
    title: "SRAVAN TRAVEL CO",
    date: "2025",
    description:
      "A modern responsive travel and tour booking web platform featuring destination discovery, interactive booking forms, itinerary guides, and seamless customer user experience.",
    image: publicAsset("/projects/sravan-travel-co.svg"),
    tags: ["HTML", "CSS", "JavaScript", "Bootstrap", "Web Development"],
    category: "web app",
    featured: true,
    github: "https://github.com/sravanakkaladevi/SRAVAN-TRAVEL-CO",
    webapp: "https://sravan-travel-co.vercel.app/",
  },
  {
    id: 4,
    title: "SRAVAN CYCLE CO",
    date: "2025",
    description:
      "An e-commerce web application for bicycle product showcases, model comparisons, custom specification selection, and interactive shopping workflow.",
    image: publicAsset("/projects/sravan-cycle-co.svg"),
    tags: ["HTML", "CSS", "JavaScript", "Web Development"],
    category: "web app",
    featured: true,
    github: "https://github.com/sravanakkaladevi/SRAVAN-CYCLE-CO",
    webapp: "https://sravan-cycle-co.vercel.app/",
  },
  {
    id: 5,
    title: "SRAVAN SHIP CO",
    date: "2025",
    description:
      "A logistics and cargo shipping tracking web platform providing vessel schedule tracking, freight rate estimation, and cargo management interfaces.",
    image: publicAsset("/projects/sravan-ship-co.svg"),
    tags: ["HTML", "CSS", "JavaScript", "Bootstrap"],
    category: "web app",
    featured: true,
    github: "https://github.com/sravanakkaladevi/SRAVAN-SHIP-CO",
    webapp: "https://sravan-ship-co.vercel.app/",
  },
  {
    id: 6,
    title: "WildLife Explorer",
    date: "2025",
    description:
      "An interactive wildlife conservation & species explorer platform detailing endangered species, habitat mapping, biodiversity statistics, and conservation efforts.",
    image: publicAsset("/projects/wildlife-explorer.svg"),
    tags: ["Python", "Data Analysis", "HTML", "CSS", "JavaScript"],
    category: "web app",
    featured: true,
    github: "https://github.com/sravanakkaladevi/WildLife-Explorer",
    webapp: "https://github.com/sravanakkaladevi/WildLife-Explorer",
  },
  {
    id: 7,
    title: "AI-Based Network Intrusion Detection System",
    date: "2025 - 2026",
    description:
      "A machine learning cybersecurity system that detects network attacks such as DDoS using the CIC-IDS2017 dataset. Built with Random Forest classification, Pandas, NumPy, Scikit-learn, and an interactive Streamlit dashboard.",
    image: publicAsset("/projects/intrusion-detection.svg"),
    tags: ["Python", "Pandas", "NumPy", "Scikit-learn", "Streamlit", "Network Security"],
    category: "machine learning",
    featured: false,
    github:
      "https://github.com/sravanakkaladevi/AI-Based-Network-Intrusion-Detection-System",
    webapp:
      "https://github.com/sravanakkaladevi/AI-Based-Network-Intrusion-Detection-System",
  },
  {
    id: 8,
    title: "Crime Rate Prediction & Analysis using K-Means",
    date: "2025 - 2026",
    description:
      "A Django-based web application that analyzes crime datasets and groups regions into crime risk zones using K-Means clustering. Features dataset upload, data cleaning, interactive Folium crime maps, and future trend prediction.",
    image: publicAsset("/projects/crime-rate-analysis.svg"),
    tags: [
      "Python",
      "Django",
      "Pandas",
      "NumPy",
      "Scikit-learn",
      "Matplotlib",
      "Folium",
      "K-Means Clustering",
      "Bootstrap",
    ],
    category: "web app",
    featured: false,
    github:
      "https://github.com/sravanakkaladevi/CRIME-RATE-PREDICTION-ANALYSIS-USING-K-MEANS-CLUSTERING-ALGORITHM-mini-project",
    webapp:
      "https://github.com/sravanakkaladevi/CRIME-RATE-PREDICTION-ANALYSIS-USING-K-MEANS-CLUSTERING-ALGORITHM-mini-project",
  },
  {
    id: 9,
    title: "CareerCraft Placement Prep Portal",
    date: "2025",
    description:
      "A full-stack placement preparation web platform providing college students with DSA practice trackers, mock technical interview templates, resume checkers, and DBMS study materials.",
    image: publicAsset("/projects/careercraft-portal.png"),
    tags: ["HTML", "CSS", "JavaScript", "SQL", "DBMS", "Bootstrap"],
    category: "web app",
    featured: false,
    github:
      "https://github.com/sravanakkaladevi/CareerCraft-A-Full-Stack-Web-Application-for-Career-Placement-Preparation",
    webapp:
      "https://github.com/sravanakkaladevi/CareerCraft-A-Full-Stack-Web-Application-for-Career-Placement-Preparation",
  },
];
