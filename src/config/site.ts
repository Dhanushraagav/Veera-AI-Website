export interface WorkflowStep {
  number: string;
  title: string;
  summary: string;
}

export interface ReliabilityPillar {
  title: string;
  badge: string;
  description: string;
  highlight: string;
}

export interface FeatureItem {
  id: string;
  number: string;
  title: string;
  description: string;
  iconName: string;
  tag: string;
  bullets?: string[];
}

export const SITE_CONFIG = {
  SITE_NAME: 'VEERA AI',
  TAGLINE: 'Your crush could never.',
  SMALL_LABEL: 'AI QUESTION SOLVER',
  HEADLINE: 'VEERA AI',
  SUPPORTING_TEXT: 'Prepare with real-time transcription, context-aware answer suggestions, coding assistance, and flexible controls. Configure your own supported API credentials and choose how you want to work.',
  PRIMARY_CTA: 'Download Veera AI',
  SECONDARY_CTA: 'Explore Features',

  CAPABILITY_LABELS: [
    'Real-Time Speech Transcription',
    'Context-Aware Answer Generation',
    'Personal API Key Control',
    'Native Windows Desktop',
  ],

  // Windows installer metadata pointing directly to verified GitHub downloads repository
  DOWNLOAD_URL: 'https://github.com/Dhanushraagav/Veera-AI-Downloads/raw/refs/heads/main/Veera-AI-Standard-2.0.0-x64-setup.exe',
  INSTALLER_FILENAME: 'Veera-AI-Standard-2.0.0-x64-setup.exe',
  INSTALLER_SIZE: '3.90 MB',
  VERSION: '2.0.0',
  SUPPORTED_PLATFORM: 'Windows 10 / Windows 11',
  ARCHITECTURE: '64-bit (x64) Windows Desktop App',
  REQUIREMENTS: 'Windows 10 (Build 19041+) or Windows 11 (64-bit), 4 GB RAM minimum',

  SYSTEM_REQUIREMENTS: [
    { label: 'Operating System', value: 'Windows 10 / 11 (64-bit native)' },
    { label: 'Processor', value: 'Intel Core i3 / AMD Ryzen 3 or higher' },
    { label: 'Memory', value: '4 GB RAM minimum' },
    { label: 'Package Size', value: '3.83 MB standalone installer' },
    { label: 'API Credentials', value: 'User-configured personal API keys in Settings' },
  ],

  // 3-Step Clear Workflow
  WORKFLOW_STEPS: [
    {
      number: '01',
      title: 'Configure & Initialize',
      summary: 'Add your personal API credentials securely in desktop Settings, select your interview session context, and verify microphone readiness.',
    },
    {
      number: '02',
      title: 'Listen or Capture',
      summary: 'Veera AI captures speech in real time with question intent detection (English & Tamil) or ingests visual question screenshots on demand.',
    },
    {
      number: '03',
      title: 'Generate & Review',
      summary: 'View direct answer-first conclusions for aptitude, optimal code with time/space complexity, or structured technical and behavioral responses.',
    },
  ] as WorkflowStep[],

  // Polished Feature Set
  FEATURES: [
    {
      id: 'live-audio-transcription',
      number: '01',
      title: 'Live Audio & Intent Detection',
      description: 'Continuous real-time speech transcription and automated question boundary detection. Verified for English and Tamil (including colloquial phrasing and Tanglish code-switching), extracting the interviewer\'s actual intent rather than literal translation.',
      iconName: 'Mic',
      tag: 'Speech & Multilingual',
      bullets: [
        'Real-time microphone capture & detection',
        'English & Tamil intent understanding',
        'Noise-resilient question isolation',
      ],
    },
    {
      id: 'intelligent-answers',
      number: '02',
      title: 'Intelligent Answer Generation',
      description: 'Concise, direct answer-first formatting for quantitative aptitude and logical reasoning. Technical interview questions receive step-by-step depth, while behavioral prompts follow structured STAR-method breakdowns adapted to your role.',
      iconName: 'Brain',
      tag: 'Reasoning & Answers',
      bullets: [
        'Immediate answer-first clarity',
        'Technical depth & system concepts',
        'Context-aware STAR responses',
      ],
    },
    {
      id: 'coding-solutions',
      number: '03',
      title: 'Coding & Algorithmic Solutions',
      description: 'Synthesizes clean, production-grade code for algorithmic challenges with language targeting, approach explanation, edge-case coverage, and explicit Big-O time and space complexity benchmarks.',
      iconName: 'Code',
      tag: 'Algorithms & Code',
      bullets: [
        'Optimal time & space complexity',
        'Language-idiomatic code structure',
        'Edge case and trade-off notes',
      ],
    },
    {
      id: 'operator-controls',
      number: '04',
      title: 'Manual & Automated Controls',
      description: 'Maintain complete command over your preparation session with a deliberate "Answer Now" manual trigger, optional automated answers, stealth global hotkey (Ctrl + D) to show or hide, and instant Clear Chat controls.',
      iconName: 'Sliders',
      tag: 'Session Controls',
      bullets: [
        'Manual "Answer Now" trigger',
        'Hands-free Auto Answers toggle',
        'Global shortcut (Ctrl + D)',
      ],
    },
    {
      id: 'screenshot-solving',
      number: '05',
      title: 'Screenshot Problem Solving',
      description: 'Capture on-screen multiple-choice questions, code snippets, geometry, or system diagrams through active window cropping or clipboard import, providing rapid extraction and verified solutions.',
      iconName: 'Crop',
      tag: 'Visual Ingestion',
      bullets: [
        'Window crop & clipboard paste',
        'Diagram & MCQ analysis',
        'Structured solution breakdown',
      ],
    },
    {
      id: 'provider-reliability',
      number: '06',
      title: 'Personal API Keys & Fallback',
      description: 'You control your own provider credentials. Veera AI manages automatic provider selection and resilient fallback routing if a configured provider encounters rate limits or temporary outages.',
      iconName: 'ShieldCheck',
      tag: 'BYOK & Reliability',
      bullets: [
        'Native Windows credential storage',
        'Automatic failover on HTTP 429',
        'Direct local-to-provider inference',
      ],
    },
  ] as FeatureItem[],

  // Architecture & Provider Reliability Pillars (No model names)
  RELIABILITY_PILLARS: [
    {
      title: 'Personal Key Ownership (BYOK)',
      badge: 'Credential Privacy',
      description: 'Configure your own API credentials directly in desktop settings. Usage limits and billing remain under your own provider accounts with zero vendor lock-in.',
      highlight: 'User-Controlled Access',
    },
    {
      title: 'Automatic Provider Routing',
      badge: 'Smart Selection',
      description: 'The engine dynamically routes transcription, text generation, and vision tasks to compatible configured providers based on task type and availability.',
      highlight: 'Task-Specific Matching',
    },
    {
      title: 'Resilient Quota Fallback',
      badge: 'Continuous Uptime',
      description: 'If a configured provider encounters quota exhaustion or rate limits, the system seamlessly redirects the request to your next available configured fallback.',
      highlight: 'Graceful Failover',
    },
    {
      title: 'Direct Client-to-API Privacy',
      badge: 'No Intermediaries',
      description: 'All network inference calls originate straight from your desktop client to provider endpoints. No middleman servers inspect, store, or log your session data.',
      highlight: 'Zero Proxy Servers',
    },
  ] as ReliabilityPillar[],

  // Honest, Accurate FAQs
  FAQS: [
    {
      question: 'What is Veera AI?',
      answer: 'Veera AI is a lightweight 64-bit Windows desktop companion designed for intelligent interview practice and problem solving. It combines live speech transcription, question intent detection, answer-first aptitude reasoning, coding solutions, and screenshot analysis in a compact desktop workflow.',
    },
    {
      question: 'How do personal API keys work in Veera AI?',
      answer: 'Veera AI operates on a Bring-Your-Own-Key (BYOK) model. You input your own supported API credentials inside desktop Settings, where they are saved securely in native Windows credential storage. You control your accounts, usage limits, and provider billing directly.',
    },
    {
      question: 'Which languages are supported for live speech understanding?',
      answer: 'Speech transcription and question detection are verified for English and Tamil, including natural code-switching (Tanglish). The system recognizes the interviewer\'s actual question intent, direct and indirect questions, and follow-ups.',
    },
    {
      question: 'How does provider routing and fallback work?',
      answer: 'You can configure multiple supported providers in application settings. Veera AI automatically selects a compatible provider for speech, vision, or reasoning tasks, and gracefully falls back to your next configured provider if rate limits (HTTP 429) or transient errors occur.',
    },
    {
      question: 'What controls do I have during an active practice session?',
      answer: 'You have full operator control: trigger solutions on demand with "Answer Now", toggle optional hands-free "Auto Answers", show or hide the application using the global hotkey (Ctrl + D), and wipe session history instantly using Clear Chat or End Session.',
    },
    {
      question: 'How is my session privacy protected?',
      answer: 'Audio streams and problem buffers exist only in temporary local memory during your session and are discarded upon completion. Inference requests travel directly from your local desktop client to your chosen provider APIs without intermediate relay servers.',
    },
    {
      question: 'Does Veera AI guarantee interview outcomes?',
      answer: 'No. Veera AI is an assistive practice and preparation companion. While it provides structured reasoning, algorithmic approaches, and explanations, AI outputs should always be critically evaluated during study and preparation.',
    },
  ],
};
