/**
 * ==============================================================================
 * PORTFOLIO DATA CONFIGURATION - SHASHANK SHUKLA
 * ==============================================================================
 * 
 * 💡 HOW TO CUSTOMIZE:
 * Update the placeholders (e.g., GITHUB_URL, LINKEDIN_URL, RESUME_URL) below
 * with your real profiles and file paths when ready!
 */

export const personalInfo = {
  name: "Shashank Shukla",
  title: "Computer Science Engineering Student",
  institution: "Lovely Professional University",
  degree: "B.Tech – Computer Science & Engineering",
  duration: "2025–2029",
  location: "SAS Nagar, Mohali, Punjab",
  email: "shashankaspirant2007@gmail.com",
  phone: "6280044160",
  bioShort: "I am a Computer Science Engineering student passionate about programming and problem solving. I am currently learning and practicing C++ and Data Structures & Algorithms while building practical projects with Python.",
  bioLong: "I am pursuing a B.Tech in Computer Science and Engineering at Lovely Professional University. I enjoy learning programming, solving problems and building practical projects. Currently, I am focusing on improving my C++ and Data Structures & Algorithms skills and developing a strong foundation in computer science.",
  photo: "public/shashank-profile.jpg",
  
  // 🔗 Social links:
  socialLinks: {
    github: "https://github.com/shashankaspirant2007-lgtm",
    linkedin: "https://www.linkedin.com/in/shashank-shukla",
    resumeUrl: "public/resume.pdf",
  }
};

export const currentFocus = {
  headline: "Currently Learning & Practicing",
  tagline: "Building core engineering fundamentals with a strong algorithmic mindset",
  description: "Currently learning and practicing C++ and Data Structures & Algorithms to strengthen my programming, problem-solving and algorithmic thinking skills.",
  topics: [
    {
      id: "cpp",
      name: "C++ Programming",
      badge: "Core Language",
      description: "Currently learning and practicing C++ to improve programming fundamentals and problem-solving skills.",
      icon: "Code2",
      accentColor: "from-blue-500/20 to-cyan-500/20 border-cyan-500/30 text-cyan-400",
      steps: ["Learning", "Practicing", "Building", "Improving"],
      activeStepIndex: 1, // Currently at 'Practicing'
      keyAreas: ["Object-Oriented Programming (OOP)", "Memory Management & Pointers", "Standard Template Library (STL)", "Modular Problem Solving"]
    },
    {
      id: "dsa",
      name: "Data Structures & Algorithms (DSA)",
      badge: "Algorithmic Focus",
      description: "Currently studying and practicing Data Structures & Algorithms to develop strong algorithmic thinking and problem-solving skills.",
      icon: "Binary",
      accentColor: "from-emerald-500/20 to-teal-500/20 border-emerald-500/30 text-emerald-400",
      steps: ["Learning", "Practicing", "Building", "Improving"],
      activeStepIndex: 1, // Currently at 'Practicing'
      keyAreas: ["Arrays & Strings", "Linked Lists & Stacks", "Searching & Sorting Algorithms", "Time & Space Complexity Analysis"]
    }
  ]
};

export const skillsData = {
  primaryFocus: [
    {
      name: "C++",
      category: "Currently Learning & Practicing",
      level: "Active Practice",
      highlight: true,
      description: "Focusing on syntax, pointers, STL, and foundational problem solving."
    },
    {
      name: "Data Structures & Algorithms (DSA)",
      category: "Currently Learning & Practicing",
      level: "Active Practice",
      highlight: true,
      description: "Building strong analytical thinking, logic, and complexity comprehension."
    }
  ],
  programmingAndWeb: [
    { name: "Python", category: "Programming", icon: "FileCode", description: "Used for creating practical utility scripts, GUI tools, and console software." },
    { name: "HTML", category: "Web Technologies", icon: "Layout", description: "Semantic markup for web content structure." },
    { name: "CSS", category: "Web Technologies", icon: "Palette", description: "Styling, layouts, responsive design, and modern CSS properties." }
  ],
  softSkills: [
    { name: "Teamwork", description: "Collaborative mindset for peer learning and project development." },
    { name: "Time Management", description: "Balancing academic coursework, coding practice, and skill-building." },
    { name: "Leadership", description: "Taking initiative and encouraging peer discussions." },
    { name: "Effective Communication", description: "Articulating technical concepts and ideas clearly." },
    { name: "Critical Thinking", description: "Breaking down complex problems into structured, manageable steps." }
  ]
};

export const projectsData = [
  {
    id: "rock-paper-scissors",
    title: "Rock-Paper-Scissors Game (User vs Computer)",
    category: "Python Game / Logic",
    technology: ["Python", "Game State Logic", "CLI / Control Flow"],
    description: "An interactive game application in Python allowing real-time gameplay between the user and computer AI. Implements game state management, input validation, and decision matrices.",
    highlights: [
      "Developed an interactive game application in Python allowing real-time gameplay between the user and computer AI.",
      "Engineered randomized decision algorithms, round evaluation matrices, validation handling, and live score counters.",
      "Optimized state management routines and input parsing to ensure flawless real-time interaction and zero game-loop exceptions."
    ],
    githubUrl: "https://github.com/shashankaspirant2007-lgtm",
    liveDemoUrl: "",
    isConsole: true
  },
  {
    id: "ai-assistant-siri",
    title: "AI Assistant Siri (Desktop Voice Assistant)",
    category: "AI / Automation",
    technology: ["Python", "SpeechRecognition", "Pyttsx3", "System / Web Automation"],
    description: "An intelligent desktop voice assistant in Python utilizing speech recognition, automated query processing, and voice synthesis feedback.",
    highlights: [
      "Built an intelligent desktop voice assistant in Python utilizing speech recognition and automated query processing.",
      "Implemented voice command parsing for web search automation, application triggers, and synthesized voice feedback.",
      "Designed modular command architecture for rapid integration of custom OS-level tasks and web scraping utilities."
    ],
    githubUrl: "https://github.com/shashankaspirant2007-lgtm",
    liveDemoUrl: "",
    isConsole: false
  }
];

export const educationData = [
  {
    id: "lpu",
    institution: "Lovely Professional University",
    degree: "B.Tech – Computer Science & Engineering",
    duration: "2025–2029",
    status: "Currently Pursuing",
    location: "Punjab, India",
    description: "Enrolled in Bachelor of Technology in Computer Science & Engineering, building comprehensive foundational knowledge across core CS subjects, software development, and algorithms."
  },
  {
    id: "school-12",
    institution: "Lala Deep Chand Jain Public School, Punjab",
    degree: "CBSE Board — 12th Grade (Senior Secondary)",
    duration: "2025–2026",
    score: "73%",
    status: "Completed",
    location: "Punjab, India",
    description: "Completed Senior Secondary Education under the Central Board of Secondary Education (CBSE) with a solid analytical science and mathematics background."
  },
  {
    id: "school-10",
    institution: "Lala Deep Chand Jain Public School, Punjab",
    degree: "CBSE Board — 10th Grade (Secondary)",
    duration: "2023–2024",
    score: "91%",
    status: "Completed",
    location: "Punjab, India",
    description: "Graduated Secondary School with academic distinction (91%), demonstrating strong discipline, quantitative reasoning, and academic consistency."
  }
];

export const achievementsData = [
  {
    id: "jnv-exam",
    title: "Cleared Jawahar Navodaya Vidyalaya Entrance Exam (JNVST)",
    category: "Competitive Examination",
    badge: "National Level Selection",
    icon: "Sparkles",
    description: "Successfully cleared the prestigious and highly competitive Jawahar Navodaya Vidyalaya Selection Test (JNVST), recognized for identifying academic talent and problem-solving aptitude."
  },
  {
    id: "mastered-c",
    title: "Mastered C Programming Language",
    category: "Language Mastery",
    badge: "Core Engineering",
    icon: "Code2",
    description: "Achieved comprehensive mastery of C programming, including low-level memory management, pointers, dynamic memory allocation, and structured modular coding."
  },
  {
    id: "mastered-python",
    title: "Mastered Python Programming Language",
    category: "Language Mastery",
    badge: "Application Development",
    icon: "Terminal",
    description: "Mastered Python programming for building real-world console applications, Tkinter graphical user interfaces (GUIs), automation scripts, and data handling workflows."
  }
];

export const certificationData = [
  {
    id: "infosys-c",
    title: "Programming in C",
    issuer: "Infosys Springboard (Digital Academy)",
    issueDate: "March 27, 2026",
    badge: "Verified Course",
    image: "/certificates/infosys-c-programming.jpg",
    pdfUrl: "/certificates/infosys-c-programming.pdf",
    verifyUrl: "https://validate.onwingspan.com",
    description: "Successfully mastered low-level memory management, pointers, struct data models, dynamic arrays, and structured algorithms in C programming through Infosys Springboard.",
    credentialId: "Wingspan QR Validated"
  },
  {
    id: "cse101-neo",
    title: "Computer Programming (CSE101)",
    issuer: "iamneo / neo colab & Lovely Professional University",
    issueDate: "May 21, 2026",
    badge: "150 Hours Coursework",
    image: "/certificates/cse101-computer-programming.jpg",
    pdfUrl: "/certificates/cse101-computer-programming.pdf",
    verifyUrl: "",
    description: "Certificate of Appreciation awarded for demonstrating strong commitment, consistency, and academic excellence across 150 hours of intensive computer programming.",
    credentialId: "15Ae0df7Cg2Ch2Di3B11"
  },
  {
    id: "simplilearn-digital",
    title: "Digital Leadership in Business",
    issuer: "Simplilearn SkillUp",
    issueDate: "October 25, 2025",
    badge: "Verified Completion",
    image: "/certificates/digital-leadership.jpg",
    pdfUrl: "/certificates/digital-leadership.pdf",
    verifyUrl: "",
    description: "Certificate of Completion recognizing strategic initiative, technological leadership mindset, and digital transformation concepts in modern enterprise workflows.",
    credentialId: "9237776"
  }
];

