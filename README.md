# PlanMate 🧳

**PlanMate** is an AI-powered travel planner that creates personalized itineraries in seconds — making solo, family, or group trips effortless and fun.  
🔗 [Live Demo](https://plan-mate-one.vercel.app) | 🔗 [GitHub Repo](https://github.com/hemantpatel011/PlanMate)

---

## 🚀 Features

- **✨ Smart Itinerary Generator** – Powered by Gemini AI, PlanMate dynamically crafts travel schedules based on user inputs: destination, trip duration, budget, and preferences.
- **📸 Google Places & Photos** – Fetches travel images and place data using Google Maps, Places, and Photos APIs.
- **🔐 Google OAuth Authentication** – Secure login handled client-side using `@react-oauth/google`.
- **☁️ Real-time Plan Storage** – Firebase Firestore stores and syncs users’ trip data.
- **📱 Responsive UI** – Clean, mobile-friendly interface built with React, Vite, Tailwind CSS, and Shadcn UI.

---

## 🧱 Tech Stack

| Layer              | Technologies                                           |
|--------------------|--------------------------------------------------------|
| **Frontend**       | React, Vite, Tailwind CSS, Shadcn UI                  |
| **Backend/API**    | Client-side only (No custom backend)                  |
| **Database**       | Firebase Firestore (NoSQL, real-time database)        |
| **Authentication** | Google OAuth 2.0 (`@react-oauth/google`)              |
| **AI Engine**      | Gemini AI API (Google)                                |
| **APIs & Services**| Google Maps API, Places API, Photos API               |

---

## 🏛️ Architecture

This project follows a **two-tier architecture**:
- **Client Layer**: Handles all logic, UI, and external API calls (AI, Auth, Database).
- **Data Layer**: Firebase Firestore + Google services.

> ⚠️ No backend server or Firebase Cloud Functions are used.

---

## 📂 Folder Structure

```
PlanMate/
   ├──client/
      ├── public/                        # Static assets (favicon, icons)
      ├── src/
      │   ├── assets/                    # App-specific images/icons
      │   ├── components/
      │   │   ├── custom/                # Custom UI like LocationSearch, Header, Footer
      │   │   ├── ui/                    # ShadCN UI components 
      │   │   ├── constants/             # Static values like options & prompts
      │   │   └──componentsAssets        # Dummy Images
      │   ├── context/                   # UserContext for managing user state
      │   ├── pages/                     # Pages: Home, CreateTrip, MyTrip
      │   ├── config/                    # API helpers: Gemini, Google, Firestore
      │   ├── App.jsx                    # App routing setup
      │   ├── main.jsx                   # Root entry with AuthProvider
      │   └── index.css                  # Tailwind base styles
      ├── .env                           # Environment variables
      ├── .gitignore
      ├── index.html
      ├── package.json
      ├── postcss.config.js
      ├── tailwind.config.js
      └── vite.config.js
```

---

## 🛠️ Getting Started

### Prerequisites
- Node.js v16 or higher
- Firebase project
- Google OAuth Client ID
- Gemini AI API Key

### Setup Instructions

1. **Clone the repository**
   ```bash
   git clone https://github.com/hemantpatel011/PlanMate.git
   cd PlanMate/client
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Create a `.env` file** in the root directory:
   ```env
   VITE_PLACE_API_KEY = your_google_places_api_key
   VITE_GEMINI_API_KEY = your_gemini_api_key
   VITE_GOOGLE_AUTH_CLIENT_ID = your_google_client_id
   VITE_FIREBASE_API_KEY = your_firebase_api_key
   ```

4. **Run in development mode**
   ```bash
   npm run dev
   ```

5. **Build for production**
   ```bash
   npm run build
   ```

---

## 🎯 What I Learned

- Integrated Gemini AI for generating intelligent travel itineraries.
- Implemented Google OAuth login using `@react-oauth/google` in a secure, frontend-only flow.
- Used Firebase Firestore for real-time storage of dynamic trip plans.
- Built a responsive, modular UI using Tailwind CSS and Shadcn UI.
- Managed authentication and session state globally with React Context.

---

## 🤝 Contributing

Contributions are welcome!

You can:
- Add new features (trip export, collaborative planning)
- Enhance UI/UX experience
- Extend AI functionality or connect more APIs

To contribute:
1. Fork the repository
2. Create a new branch (`git checkout -b feature/your-feature`)
3. Commit your changes
4. Push and open a pull request

---

## 📞 Contact & Feedback

📬 [Open an issue](https://github.com/hemantpatel011/PlanMate/issues)  
📧 Reach out via [LinkedIn](https://www.linkedin.com/in/hemant-patel-a67031341/) for suggestions or collaboration!

---

## 🔖 License

Distributed under the **MIT License**.
