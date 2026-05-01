# Satyam Gonkar — Portfolio

A modern, multi-page personal portfolio showcasing my journey as a Computer Science student, developer, and freelancer. This site is built with a focus on clean UI/UX, responsive design, and smooth animations to highlight my projects and professional experience.

## 🚀 Live Demo

 [https://satyamgonkar.github.io/portfolio](https://satyamgonkar.github.io/portfolio)

---

## 📧 Contact Form - Email Setup

The contact form now sends emails **directly** to your inbox! ⚡

### Quick Setup (Required)

To enable automatic email sending, you need to configure EmailJS:

1. **Create a free account** at https://www.emailjs.com/
2. **Connect your email** (Gmail, Outlook, or SMTP)
3. **Create an email template** for portfolio messages
4. **Get your credentials:**
   - User ID (from Account settings)
   - Service ID (from Services page)
   - Template ID (from Email Templates)
5. **Update `contact.html`** with your credentials:
   ```javascript
   emailjs.init("YOUR_USER_ID");
   emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', templateParams)
   ```

See `EMAIL_SETUP_GUIDE.md` for detailed instructions.

### Alternative Options

- **Web3Forms** (easier): https://web3forms.com/
- **Formspree** (simple): https://formspree.io/
- **EmailJS** (what's implemented): https://emailjs.com/

---

## 🛠️ Built With

* **HTML5** — Semantic structure for better SEO and accessibility.
* **CSS3** — Custom styling with CSS Variables, Flexbox, and Grid.
* **JavaScript** — Interactive elements, typewriter effects, and scroll animations.
* **EmailJS** — Client-side email sending without a backend.
* **Modern UI** — Dark mode aesthetics with glassmorphism and gradient accents.

---

## 📂 Project Structure

* `index.html`: Home page featuring a dynamic hero section and project highlights.
* `about.html`: Detailed background, education timeline, and personal interests.
* `experience.html`: Case studies of freelance work and internship milestones.
* `projects.html`: A gallery of built applications (Snake Game, Portfolio, etc.).
* `skills.html`: Technical stack and proficiency levels.
* `contact.html`: Contact form with direct email sending capability.
* `main.js`: Core JavaScript for animations, interactions, and form handling.
* `style.css`: Global styles and CSS variables.
* `EMAIL_SETUP_GUIDE.md`: Detailed email service setup instructions.

---

## ✨ Key Features

* **Glassmorphic Design:** Modern "card" layouts with subtle blurs and borders.
* **Interactive UI:** Custom cursor tracking and "Reveal on Scroll" animations.
* **Direct Email:** Contact form sends emails to your inbox automatically.
* **Timeline View:** A clean vertical timeline showing my progression from C programming to freelance projects.
* **Responsive:** Fully optimized for mobile, tablet, and desktop screens.
* **Freelance Case Study:** Dedicated section detailing real-world client work.

---

## 📈 My Journey Highlights

* **Education:** B.Tech CSE at Bansal College of Engineering, Bhopal (Batch 2024).
* **Languages:** Proficient in Python, Java, C++, C, and Web Technologies (HTML/CSS).
* **Freelancing:** Successfully delivered a landing page and logo design for a real-world client via Internshala.
* **Internship:** Secured first professional internship during 1st year of college.

---

## 🎯 New in This Version

### Direct Email Sending 
- No more opening email clients manually
- Messages sent instantly when form is submitted
- Success/error feedback for users
- Form validation before submission

### What Changed
1. **contact.html**: Updated form structure with proper HTML5 form element
2. **main.js**: Refactored contact form handling for EmailJS integration
3. **EmailJS Script**: Added CDN and initialization code
4. **EMAIL_SETUP_GUIDE.md**: Created comprehensive setup documentation

---

## 📬 Connect with Me

* **Email:** [gonkarsatyam0@gmail.com](mailto:gonkarsatyam0@gmail.com)
* **LinkedIn:** [in/satyamgonkar](https://linkedin.com/in/satyamgonkar)

---

### 📝 License

This project is open-source. Feel free to use it as inspiration for your own portfolio!

*© 2025 Satyam Gonkar*