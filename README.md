# 🪴 Meroji – Personal Idea Garden

> _"Grow your ideas like a garden. Some bloom. Some stay hidden. All are yours."_

---

## 🧠 What is Meroji?
Meroji is a **personal idea vault** where you can **store, manage, and grow your ideas**.

- **Seed ideas** that just popped up.
- **Grow ideas** as you refine them.
- **Launch ideas** when they're ready to shine.

Simple. Private. Yours.

---

## 🎯 Key Features
- ✅ **Create & Manage Ideas** with title, description, tag, and status.
- ✅ **Filter Ideas** by tag or status (_Seed_, _Growing_, _Launch_).
- ✅ **User Authentication** (Sign Up / Login / Logout).
- ✅ **Responsive UI** for both desktop and mobile.
- ✅ **Production Ready** – Deployed on Vercel.

---

## 🚀 Live Demo
👉 [https://meroji.vercel.app](https://meroji.vercel.app)

---

## 🛠️ Tech Stack
- **Next.js** – Fullstack React Framework
- **Supabase** – Database, Auth, and Storage
- **Tailwind CSS + shadcn/ui** – Component styling
- **Vercel** – Deployment and Hosting
- **GitHub Actions** – CI/CD Automation

---

## 🏗️ Folder Structure
```

/app           # Next.js app directory (pages, API routes)
/dashboard   # Idea management pages
/auth        # Login / Register pages
/api         # API routes for ideas
/components    # UI Components (IdeaCard, IdeaForm, etc.)
/lib           # Supabase client, helpers
/public        # Static assets (logo, icons)
/styles        # Global styles and themes

````

---

## 🧑‍💻 Local Development

```bash
# Clone the repository
git clone https://github.com/yourusername/meroji.git
cd meroji

# Install dependencies
npm install

# Setup environment variables
cp .env.example .env.local
# Add your SUPABASE_URL and SUPABASE_ANON_KEY to .env.local

# Run the development server
npm run dev
````

---

## 🛠️ Environment Variables Example

```
NEXT_PUBLIC_SUPABASE_URL=https://your-supabase-url.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key
```

---

## ✅ Roadmap

* [x] Idea CRUD (Create, Read, Update, Delete)
* [x] Tag & Status Management
* [x] User Authentication (Supabase)
* [x] Responsive Design
* [x] Production Deployment
* [ ] Multi-user Collaboration (Future)
* [ ] Public Idea Sharing (Future)

---

> *Meroji – Because every idea deserves a place to grow.*
