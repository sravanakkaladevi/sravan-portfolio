const publicAsset = (path: string) => {
  const base = import.meta.env.BASE_URL || "/";
  const cleanBase = base.endsWith("/") ? base : base + "/";
  const cleanPath = path.startsWith("/") ? path.slice(1) : path;
  return `${cleanBase}${cleanPath}`;
};

export const Bio = {
  name: "A. Sravan Kumar",
  roles: ["MCA Student", "Aspiring Software Developer"],
  description:
    "MCA student based in Hyderabad, India, with strong foundations in Data Structures, Object-Oriented Programming, and Database Systems. Experienced in building web and machine learning applications using Java and Python. Currently focused on DSA practice and building scalable software systems.",
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
    title: "Core",
    skills: [
      {
        name: "Data Structures",
        image: "https://placehold.co/48x48/1f2937/ffffff?text=DS",
      },
      {
        name: "Algorithms",
        image: "https://placehold.co/48x48/1f2937/ffffff?text=AL",
      },
      {
        name: "OOP",
        image: "https://placehold.co/48x48/1f2937/ffffff?text=OOP",
      },
      {
        name: "DBMS",
        image: "https://placehold.co/48x48/1f2937/ffffff?text=DB",
      },
    ],
  },
  {
    title: "Programming",
    skills: [
      {
        name: "Java",
        image:
          "https://raw.githubusercontent.com/devicons/devicon/master/icons/java/java-original.svg",
      },
      {
        name: "Python",
        image:
          "https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg",
      },
      {
        name: "C",
        image:
          "https://raw.githubusercontent.com/devicons/devicon/master/icons/c/c-original.svg",
      },
    ],
  },
  {
    title: "Web",
    skills: [
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
        name: "JavaScript",
        image:
          "https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg",
      },
      {
        name: "React Js",
        image:
          "https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg",
      },
      {
        name: "Node Js",
        image:
          "https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original.svg",
      },
    ],
  },
  {
    title: "Frameworks",
    skills: [
      {
        name: "Django",
        image: "https://cdn.simpleicons.org/django/092E20",
      },
      {
        name: "Spring Boot",
        image: "https://cdn.simpleicons.org/springboot/6DB33F",
      },
      {
        name: "REST API",
        image: "https://api.iconify.design/hugeicons/api.svg?color=%23FFFFFF",
      },
    ],
  },
  {
    title: "Database",
    skills: [
      {
        name: "SQL",
        image:
          "https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original-wordmark.svg",
      },
      {
        name: "Oracle DB",
        image:
          "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/oracle/oracle-original.svg",
      },
      {
        name: "PostgreSQL",
        image:
          "https://raw.githubusercontent.com/devicons/devicon/master/icons/postgresql/postgresql-original.svg",
      },
    ],
  },
  {
    title: "Cloud",
    skills: [
      {
        name: "GCP",
        image:
          "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg",
      },
    ],
  },
  {
    title: "Tools",
    skills: [
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
    title: "Security Tools",
    skills: [
      {
        name: "Kali Linux",
        image: "https://cdn.simpleicons.org/kalilinux",
      },
      {
        name: "Metasploit",
        image: "https://cdn.simpleicons.org/metasploit",
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

export const education = [
  {
    id: 0,
    img: publicAsset("/logos/aurora-logo.png"),
    school: "Aurora's PG College, Hyderabad",
    date: "2024 - 2026",
    grade: "Pursuing",
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
    title: "Personal Portfolio Website",
    date: "2026",
    description:
      "A modern developer portfolio built using React and Vite. It showcases projects, skills, and experience with responsive design and smooth animations, along with contact information and social links.",
    image: publicAsset("/projects/portfolio-website.svg"),
    tags: ["React", "Vite", "JavaScript", "CSS"],
    category: "web app",
    github:
      "https://github.com/sravanakkaladevi/sravanakkaladevi.github.io",
    webapp: "https://akkaladevisravankumar.netlify.app/",
  },
  {
    id: 2,
    title: "AI-Based Network Intrusion Detection System",
    date: "2025 - 2026",
    description:
      "A machine learning system that detects network attacks such as DDoS using the CIC-IDS2017 dataset. The project uses Random Forest classification and an interactive Streamlit dashboard for analysis.",
    image: publicAsset("/projects/intrusion-detection.svg"),
    tags: ["Python", "Pandas", "NumPy", "Scikit-learn", "Streamlit"],
    category: "machine learning",
    github:
      "https://github.com/sravanakkaladevi/AI-Based-Network-Intrusion-Detection-System",
    webapp:
      "https://github.com/sravanakkaladevi/AI-Based-Network-Intrusion-Detection-System",
  },
  {
    id: 3,
    title: "Crime Rate Prediction & Analysis using K-Means Clustering",
    date: "2025 - 2026",
    description:
      "A Django-based web application that analyzes crime datasets and groups regions into crime risk zones using K-Means clustering. It includes dataset upload, cleaning, interactive crime maps, and future trend prediction.",
    image: publicAsset("/projects/crime-rate-analysis.svg"),
    tags: [
      "Python",
      "Django",
      "Pandas",
      "NumPy",
      "Scikit-learn",
      "Matplotlib",
      "Folium",
      "HTML",
      "CSS",
      "Bootstrap",
    ],
    category: "web app",
    github:
      "https://github.com/sravanakkaladevi/CRIME-RATE-PREDICTION-ANALYSIS-USING-K-MEANS-CLUSTERING-ALGORITHM-mini-project",
    webapp:
      "https://github.com/sravanakkaladevi/CRIME-RATE-PREDICTION-ANALYSIS-USING-K-MEANS-CLUSTERING-ALGORITHM-mini-project",
  },
  {
    id: 4,
    title: "Blockchain Hospital Organ Donation Tracker",
    date: "2026",
    description:
      "A secure, decentralized medical organ tracking and matching web application built using blockchain concepts. Tracks donor registrations and organ matching logs across hospitals, ensuring high security and integrity.",
    image: publicAsset("/projects/organ-donation-blockchain.png"),
    tags: ["Blockchain", "HTML", "CSS", "JavaScript"],
    category: "web app",
    github:
      "https://github.com/sravanakkaladevi/AN-APPLICATION-FOR-TRACKING-ORGAN-DONATION-IN-HOSPITALS-USING-BLOCKCHAIN",
    webapp:
      "https://github.com/sravanakkaladevi/AN-APPLICATION-FOR-TRACKING-ORGAN-DONATION-IN-HOSPITALS-USING-BLOCKCHAIN",
  },
  {
    id: 5,
    title: "CricSense AI Analytics Dashboard",
    date: "2026",
    description:
      "An AI-powered predictive dashboard application that analyzes historical cricket match data to forecast player scores, runs, and team win probabilities using Python, Scikit-learn, and Pandas.",
    image: publicAsset("/projects/cricsense-ai.png"),
    tags: ["Python", "Pandas", "Scikit-Learn", "Machine Learning", "Streamlit"],
    category: "machine learning",
    github:
      "https://github.com/sravanakkaladevi/CricSense-AI-Dashboard",
    webapp:
      "https://github.com/sravanakkaladevi/CricSense-AI-Dashboard",
  },
  {
    id: 6,
    title: "CareerCraft Placement Prep Portal",
    date: "2025",
    description:
      "A full-stack placement preparation web platform providing college students with DSA practice trackers, mock technical interview templates, resume checkers, and DBMS study materials.",
    image: publicAsset("/projects/careercraft-portal.png"),
    tags: ["HTML", "CSS", "JavaScript", "SQL", "DBMS"],
    category: "web app",
    github:
      "https://github.com/sravanakkaladevi/CareerCraft-A-Full-Stack-Web-Application-for-Career-Placement-Preparation",
    webapp:
      "https://github.com/sravanakkaladevi/CareerCraft-A-Full-Stack-Web-Application-for-Career-Placement-Preparation",
  },
];
