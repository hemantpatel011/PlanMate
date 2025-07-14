
# PlanMate 🧳

**PlanMate** is an AI-powered travel planner that helps users create personalized itineraries in seconds—making solo, family, or group trips effortless and fun. ([github.com](https://github.com/hemantpatel011/PlanMate--Your-Smart-AI-Trip-Planner/blob/main/README.md?utm_source=chatgpt.com))

---

## 🚀 Features

- **✨ Smart Itinerary Generator** – Powered by Gemini AI, PlanMate dynamically crafts travel schedules based on user inputs: destination, trip duration, budget, travel preferences.
- **📸 Google Places & Photos** – Integrated with Google Places and Photos APIs to enrich your plan with attractive destination details and images.
- **🔐 Secure Authentication** – Easy and safe login via Google OAuth with Firebase Auth.
- **☁️ Real‑time Data Storage** – Uses Firebase Firestore to save trip plans, allowing users to view and update them anytime.
- **📱 Fully Responsive UI** – Built with React, Vite, TailwindCSS, and Shadcn UI for a sleek experience across all screen sizes.

---

## 🧱 Tech Stack

| Layer        | Technologies |
|--------------|--------------|
| **Frontend** | React, Vite, TailwindCSS, Shadcn UI |
| **Backend**  | Firebase Cloud Functions (Node.js) |
| **Database** | Firebase Firestore |
| **Authentication** | Firebase Auth (Google OAuth) |
| **AI Engine** | Gemini AI API |
| **Third‑Party APIs** | Google Maps, Places, Photos |

---

## 📥 Demo & Live Version

Visit the live demo: [https://plan-mate-one.vercel.app](https://plan-mate-one.vercel.app)

---

## 🛠️ Getting Started

Make sure you have **Node.js** (v16+) installed.

1. **Clone the repo**
   ```bash
   git clone https://github.com/hemantpatel011/PlanMate.git
   cd PlanMate
   cd client
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   Create a `.env.local` with:
   ```bash
   REACT_APP_FIREBASE_API_KEY=…
   REACT_APP_FIREBASE_AUTH_DOMAIN=…
   REACT_APP_FIREBASE_PROJECT_ID=…
   REACT_APP_GEMINI_API_KEY=…
   REACT_APP_GOOGLE_MAPS_API_KEY=…
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

- **Integrating AI with frontend**: Learned how to work with Gemini AI to generate dynamic content client-side.
- **API orchestration**: Coordinated Google APIs (Maps, Places, Photos) for a rich travel experience.
- **Backend auth and real-time DB**: Implemented Firebase Auth and Firestore to manage secure user sessions and data updates.
- **Design systems**: Used TailwindCSS and Shadcn UI to build a modular, responsive UI.
- **State + async handling**: Improved state management with React hooks and Firestore’s async data flows.

---

## 📂 Project Structure

```
/src
├── components/        # Reusable UI components (cards, buttons, forms)
├── pages/             # Main pages (Home, Plan, MyTrips)
├── services/          # API clients: Gemini, Firebase, Google
├── hooks/             # Custom React hooks (useAuth, useFirestore)
└── styles/            # Global styling (Tailwind CSS + UI themes)
```

---

## 🤝 Contributing

Contributions are welcome! Feel free to open an issue or submit a PR to:

- Add new features (e.g., exporting itinerary)
- Improve UX/UI
- Integrate more AI recommendations

---

## 📞 Contact & Feedback

Reach out to me on LinkedIn or open an issue; I’d love to hear your feedback!

---

## 🔖 License

Distributed under the MIT License.
