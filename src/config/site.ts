export interface WorkflowStep {
  number: string;
  title: string;
  summary: string;
}

export interface AIProviderItem {
  name: string;
  badge: string;
  models: string;
  visionSupport: string;
}

export interface FeatureItem {
  id: string;
  number: string;
  title: string;
  description: string;
  iconName: string;
  tag: string;
}

export const SITE_CONFIG = {
  SITE_NAME: 'VEERA AI',
  TAGLINE: 'AI Question Solver',
  SMALL_LABEL: 'AI QUESTION SOLVER',
  HEADLINE: 'Wait… Let Me Cook !',
  SUPPORTING_TEXT: 'AI-powered screenshot solving for aptitude, reasoning, and code.',
  PRIMARY_CTA: 'Download for Windows',
  SECONDARY_CTA: 'Explore Features',

  CAPABILITY_LABELS: [
    'Screenshot AI',
    'Coding Solutions',
    'Auto Model Routing',
  ],

  // Windows installer metadata pointing directly to GitHub Release asset
  DOWNLOAD_URL: 'https://github.com/Dhanushraagav/Veera-AI-Desktop/releases/download/v1.0.0/Veera-AI-Standard-1.0.0-x64-setup.exe',
  INSTALLER_FILENAME: 'Veera-AI-Standard-1.0.0-x64-setup.exe',
  INSTALLER_SIZE: '3.83 MB',
  VERSION: '1.0.0',
  SUPPORTED_PLATFORM: 'Windows 10 / Windows 11',
  ARCHITECTURE: '64-bit (x64) Windows Desktop App',
  REQUIREMENTS: 'Windows 10 (Build 19041+) or Windows 11 (64-bit), 4 GB RAM minimum',

  SYSTEM_REQUIREMENTS: [
    { label: 'Operating System', value: 'Windows 10 / 11 (64-bit)' },
    { label: 'Processor', value: 'Intel Core i3 / AMD Ryzen 3 or higher' },
    { label: 'Memory', value: '4 GB RAM minimum' },
    { label: 'Package Size', value: '3.83 MB standalone installer' },
    { label: 'AI Credentials', value: 'User API key for Gemini, Groq, OpenRouter, or Cloudflare' },
  ],

  // Compact 3-Step Visual
  WORKFLOW_STEPS: [
    {
      number: '01',
      title: 'Capture',
      summary: 'Capture a question screenshot, crop an active window, paste from clipboard, or import an image.',
    },
    {
      number: '02',
      title: 'Analyze',
      summary: 'Veera AI sends the image to a configured compatible vision model (Gemini, Groq, OpenRouter, or Cloudflare).',
    },
    {
      number: '03',
      title: 'Solve',
      summary: 'View the detected question, verified answer, step-by-step reasoning, or code with complexity analysis.',
    },
  ] as WorkflowStep[],

  // Exactly 4 Distinctive Features
  FEATURES: [
    {
      id: 'screenshot-analysis',
      number: '01',
      title: 'Screenshot Analysis',
      description: 'Capture any on-screen question, crop an active window, paste from your clipboard, or import PNG, JPG, or WebP files.',
      iconName: 'Crop',
      tag: 'Capture & Ingest',
    },
    {
      id: 'aptitude-reasoning',
      number: '02',
      title: 'Aptitude & Reasoning',
      description: 'Extract statements, formulas, and multiple-choice options with clear step-by-step mathematical reasoning and verified answers.',
      iconName: 'Brain',
      tag: 'Quantitative & Logic',
    },
    {
      id: 'coding-solutions',
      number: '03',
      title: 'Coding Solutions',
      description: 'Generate clean, idiomatic code for programming problems with edge cases, algorithmic trade-offs, and time/space complexity analysis.',
      iconName: 'Code',
      tag: 'Algorithms & Code',
    },
    {
      id: 'auto-routing',
      number: '04',
      title: 'Automatic AI Routing',
      description: 'Intelligently route tasks across configured compatible AI providers with automatic fallback on HTTP 429 quota exhaustion.',
      iconName: 'Shuffle',
      tag: 'Resilient Failover',
    },
  ] as FeatureItem[],

  // Compact AI Providers
  AI_PROVIDERS: [
    {
      name: 'Google Gemini',
      badge: 'Multimodal Vision',
      models: 'gemini-2.5-flash, gemini-flash-latest',
      visionSupport: 'Native Vision',
    },
    {
      name: 'Groq LPU',
      badge: 'Ultra-Fast LPU',
      models: 'qwen/qwen3.8-27b, llama-3.3-70b',
      visionSupport: 'Qwen 3.8 Vision',
    },
    {
      name: 'OpenRouter',
      badge: 'Gateway',
      models: 'dots-studio/dots-3-note-preview:free, gemma-4',
      visionSupport: 'Free Multimodal',
    },
    {
      name: 'Cloudflare Workers AI',
      badge: 'Serverless Edge',
      models: '@cf/meta/llama-3.2-11b-vision-instruct',
      visionSupport: 'Edge Vision',
    },
  ] as AIProviderItem[],

  // Exactly the 5 useful FAQs requested
  FAQS: [
    {
      question: 'What is Veera AI?',
      answer: 'Veera AI is a lightweight Windows desktop application designed to solve and explain aptitude questions, multiple-choice problems, logical reasoning puzzles, and coding challenges from screenshots.',
    },
    {
      question: 'Which Windows versions are supported?',
      answer: 'Veera AI runs natively on 64-bit Windows 10 (Build 19041+) and Windows 11. The standalone installer is compact at approximately 3.83 MB.',
    },
    {
      question: 'Which AI providers are supported?',
      answer: 'Veera AI integrates with Google Gemini, Groq, OpenRouter, and Cloudflare Workers AI. You can select your preferred provider and enable automatic failover when quotas are reached.',
    },
    {
      question: 'Do I need API keys?',
      answer: 'Yes. Veera AI is a Bring-Your-Own-Key (BYOK) desktop application. You enter your API credentials in desktop settings, where they are saved securely in native Windows credential storage.',
    },
    {
      question: 'Is AI output always correct?',
      answer: 'No. While frontier vision models provide high accuracy for standard aptitude, reasoning, and coding problems, AI responses can make errors and should always be verified during study practice.',
    },
  ],
};
