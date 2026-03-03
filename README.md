# Oluwaseunfunmi Cynthia Omisore — Portfolio

A premium dark-mode portfolio built with **Next.js 14**, **TypeScript**, and **Tailwind CSS**.

---

## 🚀 Getting Started

### 1. Install dependencies
```bash
npm install
```

### 2. Set up EmailJS (for the contact form)
1. Go to [https://www.emailjs.com/](https://www.emailjs.com/) and create a free account
2. Create a new **Email Service** (connect your Gmail)
3. Create a new **Email Template** — use these variables in your template:
   - `{{from_name}}` — sender's name
   - `{{from_email}}` — sender's email
   - `{{enquiry_type}}` — type of enquiry
   - `{{message}}` — the message body
4. Copy your **Service ID**, **Template ID**, and **Public Key**

### 3. Create your `.env.local` file
```bash
cp .env.local.example .env.local
```
Then fill in your EmailJS credentials:
```
NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key
```

### 4. Run the development server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) 🎉

---

## 📦 Build for production
```bash
npm run build
npm start
```

---

## 🌍 Deploy to Vercel

1. Push your code to GitHub
2. Go to [https://vercel.com](https://vercel.com) and import your repo
3. Add your environment variables in Vercel's dashboard (Settings → Environment Variables)
4. Deploy! Your portfolio will be live at `your-name.vercel.app`

---

## ✏️ Customisation

### Update your projects
Edit `src/lib/data.ts` → `PROJECTS` array

### Update your skills
Edit `src/lib/data.ts` → `SKILLS` array

### Update blog posts
Edit `src/lib/data.ts` → `BLOG_POSTS` array

### Add your LinkedIn / Twitter
Edit `src/components/sections/Contact.tsx` → `socials` array

---

## 🛠 Tech Stack
- **Next.js 14** (App Router)
- **TypeScript**
- **Tailwind CSS**
- **EmailJS** (contact form)
- **Vercel** (deployment)

---

Built with 🖤 by Oluwaseunfunmi Cynthia Omisore
