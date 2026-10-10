export interface PricingPlan {
  planName: string;
  price: string;
  billingCycle: string;
  badge?: string;
  description: string;
  features: string[];
  ctaText: string;
}

export interface WorkflowStep {
  number: string;
  label: string;
  title: string;
  summary: string;
  details: string;
}

export interface AIProviderItem {
  name: string;
  badge: string;
  tagline: string;
  description: string;
  latency: string;
  role: string;
}

export interface FeatureItem {
  id: string;
  title: string;
  description: string;
  category: "Intelligence" | "Desktop" | "Privacy";
  iconName: string;
}

export const SITE_CONFIG = {
  SITE_NAME: "VEERA AI",
  TAGLINE: "AI-Powered Interview Intelligence",
  HEADLINE: "Interview Smarter.\nRespond Faster.",
  SUPPORTING_HEADLINE: "Your real-time AI interview copilot that listens, understands, and helps you respond with confidence.",
  SUBHEADLINE:
    "Built for live technical, HR, coding, and system-design interviews. Veera AI turns spoken questions into context-aware answers in real time.",
  DOWNLOAD_URL: "/downloads/Veera-AI_1.0.0_x64-setup.exe",
  INSTALLER_FILENAME: "Veera-AI_1.0.0_x64-setup.exe",
  INSTALLER_SIZE: "~3.83 MB",
  INSTALLER_TYPE: "Windows installer",
  VERSION: "1.0.0",
  SUPPORTED_PLATFORM: "Windows 10 / Windows 11",
  ARCHITECTURE: "64-bit (x64) Desktop App",
  REQUIREMENTS: "Windows 10 or 11 (64-bit), 4GB RAM, Microphone input",

  PRICING: {
    planName: "VEERA AI PRO",
    price: "₹499",
    billingCycle: "/ year",
    badge: "ANNUAL PLAN",
    description: "Full access to real-time interview intelligence on your Windows desktop.",
    features: [
      "Real-time live AI assistance",
      "Multiple AI providers (Gemini, Groq, OpenRouter)",
      "Resume & job-aware context",
      "Conversation memory for follow-ups",
      "Native Windows app with global shortcut (Ctrl + D)",
      "Lightweight background & system tray mode",
      "Private runtime memory — zero stored audio",
    ],
    ctaText: "Get Veera AI",
  } as PricingPlan,

  WORKFLOW_STEPS: [
    {
      number: "01",
      label: "Listen",
      title: "Real-Time Audio Capture",
      summary: "Veera AI processes incoming speech as the interviewer talks.",
      details: "Captures audio cleanly and converts speech to text in real time.",
    },
    {
      number: "02",
      label: "Understand",
      title: "Automatic Question Detection",
      summary: "Identifies the core question and context instantly.",
      details: "Detects technical, coding, and HR questions the moment they are asked.",
    },
    {
      number: "03",
      label: "Think",
      title: "Fast AI Reasoning",
      summary: "Matches the question with your resume, role, and past answers.",
      details: "The selected model analyzes your background to craft an accurate answer.",
    },
    {
      number: "04",
      label: "Respond",
      title: "Instant Answer Suggestions",
      summary: "A clear, natural answer appears right on your screen.",
      details: "Gives you key talking points, concise summaries, or code snippets immediately.",
    },
  ] as WorkflowStep[],

  AI_PROVIDERS: [
    {
      name: "Groq LPU",
      badge: "Ultra-Fast",
      tagline: "Sub-second response time",
      description: "Powered by LPUs to generate answers with practically zero delay.",
      latency: "Fastest",
      role: "Best for quick conversational pacing and immediate talking points.",
    },
    {
      name: "Google Gemini",
      badge: "Deep Reasoning",
      tagline: "Gemini 2.5 Flash",
      description: "Handles complex system architecture, tradeoffs, and deep technical questions.",
      latency: "High Accuracy",
      role: "Best for software design, system architecture, and detailed explanations.",
    },
    {
      name: "OpenRouter",
      badge: "Flexible",
      tagline: "Access to multiple open models",
      description: "Connect to top open-weights models suited for coding and niche domains.",
      latency: "Flexible",
      role: "Best for customized model selection and specialized coding prompts.",
    },
  ] as AIProviderItem[],

  FEATURES: [
    {
      id: "realtime-audio",
      title: "Real-Time Speech Recognition",
      description: "Transcribes spoken audio as it happens with incremental speech processing.",
      category: "Intelligence",
      iconName: "Activity",
    },
    {
      id: "question-detection",
      title: "Automatic Question Detection",
      description: "Automatically recognizes questions across Technical, Coding, and HR topics.",
      category: "Intelligence",
      iconName: "Target",
    },
    {
      id: "resume-grounding",
      title: "Resume & Job Context",
      description: "Answers are grounded strictly in your real projects and target job description.",
      category: "Intelligence",
      iconName: "FileText",
    },
    {
      id: "conversation-memory",
      title: "Conversation Context",
      description: "Remembers previous questions so follow-ups stay natural and coherent.",
      category: "Intelligence",
      iconName: "GitBranch",
    },
    {
      id: "low-latency",
      title: "Low-Latency AI Engine",
      description: "Built for speed so you get talking points before you need to answer.",
      category: "Intelligence",
      iconName: "Cpu",
    },
    {
      id: "global-hotkey",
      title: "Global Shortcut (Ctrl + D)",
      description: "Show or hide the assistant anytime with a simple keyboard shortcut.",
      category: "Desktop",
      iconName: "Command",
    },
    {
      id: "background-running",
      title: "Runs in the Background",
      description: "Stays quietly in your system tray, using minimal CPU and RAM while idle.",
      category: "Desktop",
      iconName: "Monitor",
    },
    {
      id: "minimal-hud",
      title: "Compact HUD Mode",
      description: "A clean, compact window that fits neatly beside Teams, Meet, or Zoom.",
      category: "Desktop",
      iconName: "Layers",
    },
    {
      id: "session-privacy",
      title: "Private & Local",
      description: "Session data stays in temporary memory during your call. Nothing is stored in the cloud.",
      category: "Privacy",
      iconName: "ShieldCheck",
    },
  ] as FeatureItem[],

  ACTIVATION_STEPS: [
    {
      step: 1,
      title: "Download Veera AI",
      text: "Get the installer directly from our download page.",
    },
    {
      step: 2,
      title: "Install the app",
      text: "Run the quick setup on Windows 10 or Windows 11.",
    },
    {
      step: 3,
      title: "Launch Veera AI",
      text: "Open the desktop app from your Start menu or desktop shortcut.",
    },
    {
      step: 4,
      title: "Enter your activation code",
      text: "Paste your unique license key to activate your copy.",
    },
    {
      step: 5,
      title: "Start your interview session",
      text: "You're all set to use real-time AI assistance.",
    },
  ],

  FAQS: [
    {
      question: "What is Veera AI?",
      answer: "Veera AI is a Windows desktop application that acts as your real-time interview copilot. It listens to interviewer questions as they're spoken and provides fast, context-aware answer suggestions.",
    },
    {
      question: "How does Veera AI work?",
      answer: "It follows four simple steps: Listen, Understand, Think, and Respond. It captures audio, detects the question, matches it with your resume and job description, and displays concise talking points instantly.",
    },
    {
      question: "Which platforms are supported?",
      answer: "Veera AI runs natively on 64-bit Windows 10 and Windows 11. It works alongside Microsoft Teams, Google Meet, Zoom, or web-based video calls.",
    },
    {
      question: "Which AI providers are supported?",
      answer: "You can use Google Gemini (for deep reasoning), Groq (for sub-second response speed), or OpenRouter (for a wide selection of open-weights models).",
    },
    {
      question: "Can I choose the AI model?",
      answer: "Yes. You can pick your preferred model inside each provider — including LLaMA 3.3 70B on Groq, Gemini 2.5 Flash on Google, or open models via OpenRouter.",
    },
    {
      question: "How do I activate Veera AI?",
      answer: "After installing the app, launch it and enter the activation code provided by the Veera AI team. Your app activates immediately.",
    },
    {
      question: "Where do I get an activation code?",
      answer: "Activation codes are currently issued directly by the Veera AI team. Contact support to request your license key.",
    },
    {
      question: "Does Veera AI require an account?",
      answer: "No. You don't need to sign up, create an account, or save credentials to the cloud. Your license is tied directly to your desktop app.",
    },
    {
      question: "Is payment available?",
      answer: "Online self-serve payments are coming soon. For now, access is provided through manual activation codes issued directly by our team.",
    },
    {
      question: "Does Veera AI work on Windows 10 and Windows 11?",
      answer: "Yes. Veera AI is fully optimized for both 64-bit Windows 10 and Windows 11.",
    },
  ],
};
