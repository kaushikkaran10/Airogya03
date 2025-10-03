# 🏥 Airogya - AI-Powered Healthcare Assistant

[![Next.js](https://img.shields.io/badge/Next.js-15.3.3-black)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-18.3.1-blue)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-blue)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4.17-38B2AC)](https://tailwindcss.com/)
[![Vercel](https://img.shields.io/badge/Deployed_on-Vercel-black)](https://vercel.com/)

**Airogya** (आरोग्य) is an AI-powered healthcare platform designed to provide accessible medical assistance and health services, particularly for rural communities in India. The name "Airogya" means "good health" in Sanskrit, reflecting our mission to make healthcare accessible to everyone.

## 🌟 Features

### 🤖 AI Medical Assistant
- **Intelligent Symptom Analysis**: Chat with Dr. Airogya, our AI medical assistant powered by Google's Gemini AI
- **Multi-language Support**: Available in English, Hindi (हिंदी), and Odia (ଓଡ଼ିଆ)
- **Emergency Detection**: Automatic detection of emergency situations with immediate guidance
- **Personalized Responses**: Context-aware medical advice tailored to user symptoms

### 🏥 Healthcare Services
- **Symptom Checker**: Interactive symptom analysis with AI-powered recommendations
- **Healthcare Center Locator**: Find nearby hospitals and medical facilities
- **Government Schemes**: Access information about health insurance and government healthcare programs
- **Vaccination Tracker**: Track and manage vaccination schedules
- **Health Risk Assessment**: Comprehensive health evaluation tools

### 🌾 Specialized Features
- **Farmer Health Module**: Specialized healthcare services for agricultural communities
- **Rural Healthcare Focus**: Designed specifically for underserved rural areas
- **Multilingual Interface**: Breaking language barriers in healthcare access

## 🚀 Live Demo

Visit the live application: [https://airogya05.vercel.app](https://airogya05.vercel.app)

## 🛠️ Tech Stack

### Frontend
- **Next.js 15.3.3** - React framework with App Router
- **React 18.3.1** - UI library
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first CSS framework
- **Radix UI** - Accessible component primitives
- **Lucide React** - Beautiful icons

### Backend & AI
- **Google Gemini AI** - Advanced language model for medical assistance
- **Genkit** - AI development framework
- **Next.js API Routes** - Serverless backend functions

### Database & Auth
- **Supabase** - Backend as a Service
- **NextAuth.js** - Authentication solution
- **Firebase** - Additional backend services

### Deployment
- **Vercel** - Hosting and deployment platform
- **GitHub** - Version control and CI/CD

## 📦 Installation

### Prerequisites
- Node.js 18+ 
- npm or yarn
- Git

### Setup Instructions

1. **Clone the repository**
   ```bash
   git clone https://github.com/kaushikkaran10/Airogya03.git
   cd Airogya
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Environment Setup**
   ```bash
   cp .env.example .env.local
   ```

4. **Configure Environment Variables**
   
   Edit `.env.local` with your API keys:
   ```env
   # Gemini AI Configuration
   GEMINI_API_KEY=your-gemini-api-key-here
   
   # Supabase Configuration
   NEXT_PUBLIC_SUPABASE_URL=your-supabase-url
   NEXT_PUBLIC_SUPABASE_ANON_KEY=your-supabase-anon-key
   
   # NextAuth Configuration
   NEXTAUTH_SECRET=your-nextauth-secret
   NEXTAUTH_URL=http://localhost:9006
   ```

5. **Get API Keys**
   - **Gemini API Key**: Visit [Google AI Studio](https://makersuite.google.com/app/apikey)
   - **Supabase**: Create a project at [Supabase](https://supabase.com/)

6. **Run the development server**
   ```bash
   npm run dev
   ```

7. **Open your browser**
   Navigate to [http://localhost:9006](http://localhost:9006)

## 🎯 Usage

### For Patients
1. **Symptom Analysis**: Describe your symptoms to get AI-powered medical guidance
2. **Emergency Help**: Get immediate assistance for urgent medical situations
3. **Find Healthcare**: Locate nearby hospitals and medical facilities
4. **Government Schemes**: Access information about available healthcare benefits

### For Healthcare Workers
1. **Patient Management**: Track and manage patient interactions
2. **Resource Access**: Quick access to medical resources and guidelines
3. **Community Health**: Monitor community health trends and alerts

## 🏗️ Project Structure

```
src/
├── ai/                 # AI configuration and flows
├── app/                # Next.js app router pages
│   ├── api/           # API routes
│   ├── symptom-checker/
│   ├── government-schemes/
│   └── ...
├── components/         # Reusable UI components
├── hooks/             # Custom React hooks
├── lib/               # Utility functions
└── translations/      # Multi-language support
```

## 🌐 API Endpoints

- `POST /api/gemini-chat` - AI medical consultation
- `GET /api/auth/[...nextauth]` - Authentication
- `POST /api/auth/signup` - User registration

## 🔧 Available Scripts

```bash
npm run dev          # Start development server (port 9006)
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint
npm run typecheck    # TypeScript type checking
npm run genkit:dev   # Start Genkit development
```

## 🌍 Supported Languages

- **English** - Primary language
- **Hindi (हिंदी)** - For Hindi-speaking users
- **Odia (ଓଡ଼ିଆ)** - For Odisha region users

## 🚨 Emergency Features

Airogya includes built-in emergency detection that:
- Identifies critical symptoms automatically
- Provides immediate emergency contact information
- Guides users to call appropriate emergency services (108, 102, 112)
- Offers multilingual emergency support

## 🤝 Contributing

We welcome contributions! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👥 Team

- **Kaushik Karan** - Lead Developer
- Built for Smart India Hackathon (SIH)

## 🙏 Acknowledgments

- Google Gemini AI for advanced language processing
- Supabase for backend infrastructure
- Vercel for seamless deployment
- The open-source community for amazing tools and libraries

## 📞 Support

For support and queries:
- **Emergency**: Call 108 (Ambulance) or 102 (Emergency Medical)
- **Technical Issues**: Create an issue on GitHub
- **General Inquiries**: Contact through the application

---

**Made with ❤️ for accessible healthcare in India**

*"Your Health, Our Priority" - आपका स्वास्थ्य, हमारी प्राथमिकता*