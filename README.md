# mern-deployment
MERN Stack Deployment with CI/CD Pipeline using Vercel, Render and GitHub Actions


## 🚀 Live URLs
- **Frontend (Vercel):** https://your-app.vercel.app
- **Backend (Render):** https://your-app.onrender.com

## 🛠️ Tech Stack
- Frontend: React (Vite) → Deployed on Vercel
- Backend: Node.js + Express → Deployed on Render
- Database: MongoDB Atlas
- CI/CD: GitHub Actions

## 📁 Project Structure
mern-deployment/
├── client/         # React App
├── server/         # Express API
└── .github/workflows/ci.yml  # CI/CD

## 🔄 Deployment Process
1. Code push to GitHub main branch
2. GitHub Actions runs CI pipeline (build test)
3. Vercel auto-deploys frontend
4. Render auto-deploys backend

## 🌍 Environment Variables
### Backend (Render)
- MONGO_URI
- NODE_ENV=production
- PORT=5000

### Frontend (Vercel)
- VITE_API_URL=https://your-backend.onrender.com

