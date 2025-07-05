# 💻 Ogadimma Chibuike – Cybersecurity Portfolio

Welcome to **Ogadimma Chibuike’s portfolio** — a modern, responsive, and animated portfolio website built with **React** and **Tailwind CSS**. It showcases a cybersecurity specialist's background, projects, certifications, and skills in a sleek, professional layout.

---

## 🌟 Features

- 🎯 Smooth intro landing section with soft pink theme
- 👩‍💻 About section with image, skills, and certification grid
- 🔐 Projects section with SOC, SIEM, Splunk & more
- 📬 Contact form using Formspree + toast success message
- 💖 Fully responsive and mobile-first design
- 🎨 Soft pastel gradients and modern animations

---

## 🚀 Tech Stack

- **React** (with Vite)
- **Tailwind CSS**
- **React Icons**
- **React Toastify**
- **Formspree**

---

## 🔧 Getting Started

1. **Clone the repository:**

   ```bash
   git clone https://github.com/Ogad1/Ogadimma.git
   cd Ogadimma
   ```

## 🔧 Getting Started

### Install dependencies:

```bash
npm install
```

### Start the development server:

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser to view the site.

---

## 📬 Contact Form Setup (Formspree)

This project uses **Formspree** for backend-free contact form handling.

1. Go to [formspree.io](https://formspree.io) and create a new form
2. Get your unique endpoint (e.g. `https://formspree.io/f/abc123`)
3. Replace the placeholder in `Contact.tsx`:

```ts
fetch("https://formspree.io/f/your-form-id", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({ name, email, message }),
});
```

Now submissions go directly to your inbox 🎉

---

## 🖼️ Live Demo

🔗 [https://oga.vercel.app](https://oga.vercel.app) _(not a live URL)_

---

## ✨ Author

**Ogadimma Chibuike** – Cybersecurity Enthusiast, Ethical Hacker, and SOC Analyst  
📧 cybergirl@example.com  
💼 [LinkedIn](https://www.linkedin.com/in/ogadimma-chibuike)  
🐙 [GitHub](https://github.com/Ogad1)

---

## 📜 License

This project is licensed under the **MIT License**.  
Feel free to use it as a starter template for your own portfolio!

---

## 💡 Future Enhancements

- Form validation using **Formik** or **React Hook Form**
- Add **project filters** or categories
- Add **dark mode** toggle
- Include a **blog** or article section
- Host images and certs via a **CMS** (e.g., Sanity, Strapi)

---

> ⚡ Built with love, pink gradients, and cybersecurity dreams. Stay safe out there!
