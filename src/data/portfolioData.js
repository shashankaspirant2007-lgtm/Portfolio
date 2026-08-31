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
  
  // 🔗 Social links:
  socialLinks: {
    github: "https://github.com/shashankaspirant2007-lgtm",
    linkedin: "https://linkedin.com/in/your-profile", // <-- REPLACE with your LinkedIn URL
    resumeUrl: "#resume", // <-- REPLACE with your Resume PDF link (e.g., "/resume.pdf")
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
    title: "Rock-Paper-Scissors Game",
    category: "Python Game / Logic",
    technology: ["Python"],
    description: "A Rock-Paper-Scissors game where the user plays against the computer. Implements game loops, random selection algorithms, and score tracking logic in Python.",
    highlights: ["Interactive user input handling", "Randomized computer logic", "Score counter and replay mechanism"],
    githubUrl: "https://github.com/your-username/rock-paper-scissors", // <-- Placeholder
    liveDemoUrl: "", // <-- Placeholder (Console based)
    isConsole: true
  },
  {
    id: "basic-calculator",
    title: "Basic Calculator",
    category: "GUI Application",
    technology: ["Python", "Tkinter"],
    description: "A basic calculator application with a graphical user interface (GUI) built using Python and Tkinter. Supports arithmetic computations with responsive button interactions.",
    highlights: ["Tkinter GUI layout & grid design", "Arithmetic expression evaluation", "Error handling for invalid calculations"],
    githubUrl: "https://github.com/your-username/basic-calculator", // <-- Placeholder
    liveDemoUrl: "", // <-- Placeholder
    isConsole: false
  },
  {
    id: "student-management-system",
    title: "Student Management System",
    category: "Console Application",
    technology: ["Python"],
    description: "A console-based Student Management System developed in Python. Allows adding, viewing, updating, and managing student records in an organized and structured format.",
    highlights: ["CRUD operations for student records", "Data validation & formatted display", "Modular file/in-memory data handling"],
    githubUrl: "https://github.com/your-username/student-management-system", // <-- Placeholder
    liveDemoUrl: "", // <-- Placeholder
    isConsole: true
  },
  {
    id: "todo-list-app",
    title: "To-Do List App",
    category: "Productivity Tool",
    technology: ["Python"],
    description: "A practical To-Do List application designed to organize daily tasks, mark completions, and manage personal productivity effectively.",
    highlights: ["Task creation and status tracking", "Persistent list management", "Clean user menu flow"],
    githubUrl: "https://github.com/your-username/todo-list-app", // <-- Placeholder
    liveDemoUrl: "", // <-- Placeholder
    isConsole: true
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
    icon: "Award",
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
