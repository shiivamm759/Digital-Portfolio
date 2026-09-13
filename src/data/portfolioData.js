export const personalInfo = {
  name: "Shivam Kumar Lal",
  title: "Computer Science & Engineering Student | Full Stack & Systems Developer",
  shortTitle: "CSE Student & Developer",
  location: "Phagwara, Punjab / Dumraon, Bihar, India",
  email: "kumarshivamlal002@gmail.com",
  phone: "+91-6204166186",
  linkedin: "https://www.linkedin.com/in/shivamkumar-lal/",
  github: "https://github.com/shiivamm759",
  tagline: "Passionate about Data Structures, Algorithms, Operating Systems, and building web solutions.",
  aboutParagraphs: [
    "I am a Computer Science & Engineering student at Lovely Professional University with a strong foundation in core software development, data structures, and algorithmic problem-solving. My technical focus spans C++, JavaScript, Python, and Java, alongside database management with MySQL and MongoDB.",
    "Driven by curiosity and a desire to build real-world applications, I have developed web applications, interactive system visualization tools, and database management modules. With over 100+ LeetCode problems solved and an 'A' grade in advanced Data Structures training, I am eager to apply my technical and analytical skills to impactful engineering roles, internships, and collaborative software projects."
  ],
  photo: "/docu.JPG",
  cvPath: "/Shivam_Kumar_Lal_CV.pdf"
};

export const education = [
  {
    id: "lpu",
    degree: "Bachelor of Technology - Computer Science and Engineering",
    institution: "Lovely Professional University",
    location: "Phagwara, Punjab",
    duration: "Aug' 24 — Present",
    status: "Currently Pursuing",
    grade: "CGPA: 6.3",
    description: "Focusing on Core Computer Science subjects including Data Structures & Algorithms, Operating Systems, Database Management Systems, and Software Engineering.",
    highlight: "Aug' 24 - Present"
  },
  {
    id: "kps",
    degree: "Intermediate (10+2)",
    institution: "KPS High School",
    location: "Dumraon, Bihar",
    duration: "Apr' 22 – Mar' 24",
    status: "Completed",
    grade: "PCM: 64.4%",
    description: "Senior secondary education specializing in Physics, Chemistry, and Mathematics (PCM).",
    highlight: "Score: 64.4%"
  },
  {
    id: "cambridge",
    degree: "Matriculation (10th)",
    institution: "Cambridge School Dumraon",
    location: "Dumraon, Bihar",
    duration: "Apr' 21 – Mar' 22",
    status: "Completed",
    grade: "Percentage: 77.6%",
    description: "Secondary education with strong fundamentals in Science and Mathematics.",
    highlight: "Score: 77.6%"
  }
];

export const skillCategories = [
  {
    name: "Languages",
    skills: [
      { name: "C++", level: "Advanced", icon: "cpp" },
      { name: "JavaScript", level: "Intermediate", icon: "js" },
      { name: "C", level: "Proficient", icon: "c" },
      { name: "Python", level: "Intermediate", icon: "python" },
      { name: "Java", level: "Intermediate", icon: "java" }
    ]
  },
  {
    name: "Frameworks & Web",
    skills: [
      { name: "HTML5", level: "Proficient", icon: "html" },
      { name: "CSS3", level: "Proficient", icon: "css" },
      { name: "Responsive Design", level: "Proficient", icon: "layout" },
      { name: "DOM Manipulation", level: "Proficient", icon: "code" }
    ]
  },
  {
    name: "Tools & Platforms",
    skills: [
      { name: "MySQL", level: "Proficient", icon: "mysql" },
      { name: "MongoDB", level: "Intermediate", icon: "mongodb" },
      { name: "Git", level: "Proficient", icon: "git" },
      { name: "GitHub", level: "Proficient", icon: "github" }
    ]
  },
  {
    name: "Soft Skills & Core Competencies",
    skills: [
      { name: "Problem-Solving", level: "Strong", icon: "brain" },
      { name: "Team Player", level: "Collaborative", icon: "users" },
      { name: "Quick Learner", level: "Adaptable", icon: "zap" },
      { name: "Adaptability", level: "Flexible", icon: "refresh" },
      { name: "Data Structures & Algorithms", level: "Core Strength", icon: "binary" }
    ]
  }
];

export const projects = [
  {
    id: "med-flow",
    title: "Med-flow HMS - Hospital Management System",
    category: "Systems & Data Structures",
    date: "Jun' 26",
    shortDescription: "A comprehensive hospital management system designed to streamline patient, doctor, appointment, and hospital record operations using optimized data structures.",
    description: "Developed a robust hospital management system to streamline patient, doctor, appointment, and hospital record management operations. Implemented custom Queue, HashMap, Binary Search Tree (BST), and Graph data structures for efficient data organization, fast indexing, and rapid record retrieval. Applied shortest-path graph algorithms for internal hospital management operations and emergency routing.",
    highlights: [
      "Implemented Queue, HashMap, Binary Search Tree, and Graph data structures for efficient data organization and retrieval",
      "Applied shortest-path algorithm for graph-based hospital management operations",
      "Designed and integrated modules for managing patients, doctors, appointments, and hospital-related information",
      "Implemented testing and validation to ensure reliable system functionality and accurate data handling"
    ],
    techStack: ["C++", "Data Structures", "Graphs", "HashMap", "BST", "Algorithms"],
    github: "https://github.com/shiivamm759",
    featured: true
  },
  {
    id: "deadlock-visualizer",
    title: "Deadlock Visualizer - Operating System Tool",
    category: "Operating Systems & Web",
    date: "Apr' 26",
    shortDescription: "An interactive web-based tool for visualizing resource allocation graphs and operating system deadlock detection algorithms.",
    description: "Developed an interactive web-based tool to visualize and simplify deadlock detection concepts in Operating Systems. Implemented Resource Allocation Graph (RAG) concepts to represent processes, resources, request edges, and assignment edges. Designed a dynamic interface that allows users to simulate process resource requests and instantly identify cycle dependencies and potential deadlock conditions.",
    highlights: [
      "Developed an interactive web-based tool to visualize and understand deadlock detection in operating systems",
      "Implemented Resource Allocation Graph concepts to represent processes and resources",
      "Designed an interactive interface to demonstrate resource allocation and identify possible deadlock conditions",
      "Provided visual representation of process-resource relationships to simplify deadlock analysis and learning"
    ],
    techStack: ["JavaScript", "HTML5", "CSS3", "Operating Systems", "Resource Allocation Graph", "Web Development"],
    github: "https://github.com/shiivamm759",
    featured: true
  },
  {
    id: "local-vendor",
    title: "Local Vendor Marketplace",
    category: "Web Development",
    date: "Nov' 25",
    shortDescription: "A digital marketplace platform empowering local merchants to showcase products, manage inventory, and process customer orders online.",
    description: "Developed a digital marketplace platform enabling local vendors to showcase and manage their products online. Implemented comprehensive customer-side functionality for browsing product catalogs, placing orders, and tracking order purchases. Designed intuitive vendor-side dashboards for managing product inventory, product listings, and incoming customer orders, creating a centralized digital platform that simplifies local business commerce.",
    highlights: [
      "Developed a digital marketplace platform enabling local vendors to showcase and manage their products online",
      "Implemented customer-side functionality for browsing products, placing orders, and tracking purchases",
      "Designed vendor-side features for managing product listings and customer orders",
      "Built a centralized digital platform that simplifies product discovery, online ordering, and vendor management for local businesses"
    ],
    techStack: ["JavaScript", "HTML", "CSS", "MySQL", "Web Development", "E-Commerce"],
    github: "https://github.com/shiivamm759",
    featured: true
  }
];

export const training = {
  institution: "Lovely Professional University",
  title: "Fundamentals of Data Structures: Learn, Apply and Build Projects",
  duration: "Jun'26 — Jul' 26",
  grade: "Grade A",
  details: [
    "Completed an intensive skill development course focused on learning and applying fundamental Data Structures concepts through hands-on programming and project-based practice.",
    "Applied data structures and problem-solving techniques to build and solve complex programming problems, significantly strengthening algorithmic thinking and coding proficiency.",
    "Achieved Grade A, demonstrating strong understanding and practical application of Data Structures concepts."
  ]
};

export const certifications = [
  {
    id: "ds-lpu",
    title: "Fundamentals of Data Structure",
    issuer: "Lovely Professional University (LPU)",
    date: "Jul' 26",
    topic: "Data Structures & Algorithms",
    grade: "Grade A",
    badge: "Academic Excellence"
  },
  {
    id: "dbms-infosys",
    title: "DBMS (Database Management Systems)",
    issuer: "Infosys Springboard",
    date: "Jun' 26",
    topic: "Database Management & SQL",
    badge: "Verified Certificate"
  },
  {
    id: "ai-oracle",
    title: "AI Foundation Associate",
    issuer: "Oracle",
    date: "May' 26",
    topic: "Artificial Intelligence Fundamentals",
    badge: "Industry Credential"
  },
  {
    id: "oops-infosys",
    title: "OOPS (Object Oriented Programming)",
    issuer: "Infosys",
    date: "Aug' 25",
    topic: "Object-Oriented Design & Principles",
    badge: "Core Programming"
  }
];

export const achievements = [
  {
    id: "grade-a",
    title: "Grade 'A' in LPU Summer Training",
    category: "Academic Excellence",
    description: "Earned Grade 'A' in LPU's intensive summer training on Fundamentals of Data Structures: Learn, Apply and Build Projects.",
    stat: "Grade A",
    icon: "award"
  },
  {
    id: "leetcode",
    title: "100+ LeetCode Problems Solved",
    category: "Algorithmic Problem Solving",
    description: "Solved 100+ data structure and algorithm problems on LeetCode, continually honing problem-solving and algorithmic efficiency.",
    stat: "100+ Solved",
    icon: "code"
  }
];
