# Rahul R — Personal Portfolio Website
### AI & Data Science Student | Chennai Institute of Technology

A modern, minimalist, editorial-style personal portfolio inspired by high-end design principles. Built with React, Vite, Tailwind CSS, and Framer Motion.

---

## 🚀 Quick Start

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Start the local development server:**
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) in your browser.

3. **Build for production:**
   ```bash
   npm run build
   ```

---

## 📸 Hero Portrait Photo

To use your actual selfie / portrait photo as the main hero image:
1. Place your portrait photo inside the `public/` folder and name it:
   `public/rahul-portrait.jpg`
2. Or you can click the **"Upload Rahul's Photo to Preview"** button directly on the website hero section to preview your selfie live.
3. The image automatically receives an editorial monochrome treatment and a seamless gradient bottom fade into the page background, exactly matching the reference design.

---

## 📝 Customization & Placeholders

All portfolio content is centralized in:
`src/data/portfolioData.js`

- **Email**: Update `emailPlaceholder` with your actual email address.
- **LinkedIn / GitHub**: Update `linkedinPlaceholder` and `githubPlaceholder` with your profile links.
- **Resume**: Replace or place your actual PDF resume in `public/Rahul_R_Resume.pdf`.

---

## 🎨 Sections Included

- **Header / Navigation**: Rounded glassmorphism navigation with quick links and modal resume download trigger.
- **Hero**: Editorial layout matching the design reference with +9.1 CGPA, +4 Projects, availability status badge, and portrait hero.
- **About Me**: Academic background at Chennai Institute of Technology, core pillars, and credentials.
- **Technical Skills**: Interactive category tabs for Programming, Data Science, Web Development, Tools, and AI Competencies.
- **Featured Projects**: WorkPulse, SafeBus Nexus, AI Resume Analyzer, and NOVA with interactive architecture modals.
- **Education Timeline**: B.Tech AI & DS track at CIT Chennai with 9.1 CGPA.
- **Certifications**: Cisco Python, MongoDB Skillathon, and Prompt Engineering credentials with preview popups.
- **Contact**: Functional direct messaging form, copy-to-clipboard email action, and social profile links.
- **Resume Modal**: Interactive full-document resume viewer with copy text and print/PDF export.
