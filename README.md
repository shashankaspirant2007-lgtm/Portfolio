# 🚀 Shashank Shukla — Personal Developer Portfolio

A modern, professional, visually impressive personal portfolio website for **Shashank Shukla**, Computer Science Engineering Student at **Lovely Professional University (2025–2029)**.

Designed with a high-end developer dark aesthetic, highlighting an active learning focus on **C++** and **Data Structures & Algorithms (DSA)** alongside practical **Python applications**.

---

## 📁 Project Structure

```text
shashank-portfolio/
├── index.html                  # Standalone ready-to-run app (zero dependencies required)
├── package.json                # React 18, Tailwind CSS, Lucide Icons & Vite configuration
├── vite.config.js              # Vite build setup
├── tailwind.config.js          # Custom dark colors, neon glows, and glassmorphism styling
├── postcss.config.js           # PostCSS configuration
├── README.md                   # Complete documentation, run and deployment guide
├── public/
│   └── favicon.svg             # Modern terminal bracket favicon
└── src/
    ├── main.jsx                # React root application entrypoint
    ├── App.jsx                 # Main layout and interactive state manager
    ├── index.css               # Tailwind CSS directives and custom styling
    ├── data/
    │   └── portfolioData.js    # 🎯 CENTRAL DATA FILE (Customize your links & info here!)
    └── components/
        ├── Navbar.jsx          # Sticky header, navigation links, theme toggle, mobile drawer
        ├── Hero.jsx            # Hero section with C++ & DSA spotlight and CTAs
        ├── About.jsx           # Student profile, LPU degree, and engineering principles
        ├── Skills.jsx          # C++ & DSA prominent spotlight, Python, HTML, CSS & soft skills
        ├── LearningFocus.jsx   # Dedicated C++ and DSA visual progression roadmap
        ├── Projects.jsx        # Strictly the 4 authentic Python projects with tags and links
        ├── Education.jsx       # Academic timeline (LPU, 12th CBSE, 10th CBSE)
        ├── Certification.jsx   # Verified Skillup "Digital Leadership in Business" showcase
        ├── Contact.jsx         # Contact info cards, copy-to-clipboard, and interactive form
        └── Footer.jsx          # Modern footer with quick navigation and social icons
```

---

## ⚡ How to Run Locally

### Option 1: Instant Zero-Setup Preview (Recommended right now)
You do **not** need Node.js or npm installed to run and view this website immediately!

1. **Direct Browser View**:
   Simply navigate to `C:\Users\Shashank Shukla\.gemini\antigravity\scratch\shashank-portfolio` and double-click `index.html` to open it directly in Chrome, Edge, or any web browser.

2. **Using Python Built-in Server**:
   Open PowerShell or Terminal in the project folder and run:
   ```bash
   python -m http.server 3000
   ```
   Then open your browser at `http://localhost:3000`.

---

### Option 2: Modern React + Vite Development (If Node.js is installed)
If you install Node.js (v18 or newer), you can run the full Vite development environment:

1. Install dependencies:
   ```bash
   npm install
   ```
2. Start the hot-reloading development server:
   ```bash
   npm run dev
   ```
3. Build for production:
   ```bash
   npm run build
   ```

---

## 🔗 Where to Add Your Real Links & Files (Placeholder Guide)

All personal details, URLs, and project links are organized in **one central file**:
👉 [`src/data/portfolioData.js`](src/data/portfolioData.js) (and mirrored in [`index.html`](index.html)).

| Item | Placeholder Location | Current Default | How to Update |
| :--- | :--- | :--- | :--- |
| **GitHub Profile** | `socialLinks.github` | `"https://github.com/your-username"` | Replace with your GitHub URL (e.g. `https://github.com/shashank-shukla`) |
| **LinkedIn Profile** | `socialLinks.linkedin` | `"https://linkedin.com/in/your-profile"` | Replace with your LinkedIn URL (e.g. `https://linkedin.com/in/shashankshukla`) |
| **Resume PDF** | `socialLinks.resumeUrl` | `"#resume"` | Place your `resume.pdf` into `public/` and set to `"/resume.pdf"` |
| **Rock-Paper-Scissors Repo** | `projectsData[0].githubUrl` | `"https://github.com/your-username/rock-paper-scissors"` | Replace with your repository link |
| **Basic Calculator Repo** | `projectsData[1].githubUrl` | `"https://github.com/your-username/basic-calculator"` | Replace with your repository link |
| **Student Management Repo** | `projectsData[2].githubUrl` | `"https://github.com/your-username/student-management-system"` | Replace with your repository link |
| **To-Do List App Repo** | `projectsData[3].githubUrl` | `"https://github.com/your-username/todo-list-app"` | Replace with your repository link |

---

## 🚀 How to Deploy Online

### 1. Free Deployment on Vercel
1. Push this folder to a GitHub repository.
2. Go to [vercel.com](https://vercel.com) and sign in with GitHub.
3. Click **"New Project"**, select your repository, and click **"Deploy"**.

### 2. Free Deployment on Netlify
1. Go to [netlify.com](https://netlify.com).
2. Drag and drop the `shashank-portfolio` folder directly into the Netlify dashboard for instant live deployment!

### 3. GitHub Pages
1. Go to your repository on GitHub.
2. Navigate to **Settings** > **Pages**.
3. Under **Branch**, select `main` (or `gh-pages`) and choose `/ (root)`.
4. Click **Save** — your site will be live at `https://<your-username>.github.io/<repo-name>/`.

---

## 🛡️ Accuracy & Verification Checklist

- [x] **No JavaScript Projects**: Removed all JavaScript projects (Digital Clock, Color Picker, Form Validation, Quote Generator).
- [x] **Clear Focus on C++ & DSA**: Prominently showcased across Hero, Skills, and Dedicated Learning sections.
- [x] **Exact 4 Python Projects**: Rock-Paper-Scissors, Basic Calculator (Tkinter), Student Management System, To-Do List App.
- [x] **Verified Education History**: Lovely Professional University (2025–2029), 12th CBSE (73%), 10th CBSE (91%).
- [x] **Certification**: Digital Leadership in Business (Skillup).
- [x] **Accurate Contact**: `shashankaspirant2007@gmail.com`, `6280044160`, SAS Nagar, Mohali, Punjab.
- [x] **Clean UX**: Dark/Light mode toggle, sticky responsive navbar, mobile menu drawer, copy-to-clipboard, interactive contact form.
