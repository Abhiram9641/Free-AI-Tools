export type PricingTier = 'free' | 'freemium' | 'paid' | 'unknown';
export type Status = 'active' | 'inactive';

export interface FreeTierLimits {
  [key: string]: string | number | boolean | null | undefined;
}

export interface Tool {
  id: string;
  name: string;
  url: string;
  category: string;
  sub_category: string;
  description: string;
  screenshot: string;
  models_count: number;
  top_models: string[];
  capabilities: string[];
  pricing: PricingTier;
  login_type: string;
  referrals: string;
  status: Status;
  rating: number;
  tags: string[];
  notes: string;
  last_verified: string;
  free_tier_limits?: FreeTierLimits;
  // API provider extras
  free_tier_models?: string[];
  best_for?: string[];
  popular_agents_using?: string[];
  paid_tier_starting?: string;
  provider_type?: string;
  // IDE extras
  platforms?: string[];
  // Claude Code / Codex proxy extras
  proxy_type?: string;
  claude_code_setup?: string;
  codex_setup?: string;
}

export interface CategoryMeta {
  id: string;
  label: string;
  icon: string;
  description: string;
  color: string;
  gradient: string;
}

export const CATEGORY_META: Record<string, CategoryMeta> = {
  chatting_interfaces: {
    id: 'chatting_interfaces',
    label: 'Chat Interfaces',
    icon: '💬',
    description: 'Conversational AI assistants and multi-model chat platforms',
    color: '#8b5cf6',
    gradient: 'linear-gradient(135deg, rgba(139,92,246,0.18) 0%, rgba(109,40,217,0.1) 100%)',
  },
  image_generation: {
    id: 'image_generation',
    label: 'Image Generation',
    icon: '🎨',
    description: 'AI-powered image creation, editing, and design tools',
    color: '#ec4899',
    gradient: 'linear-gradient(135deg, rgba(236,72,153,0.18) 0%, rgba(225,29,72,0.1) 100%)',
  },
  audio_generation: {
    id: 'audio_generation',
    label: 'Audio & Voice',
    icon: '🎙️',
    description: 'Text-to-speech, voice cloning, and audio AI tools',
    color: '#06b6d4',
    gradient: 'linear-gradient(135deg, rgba(6,182,212,0.18) 0%, rgba(2,132,199,0.1) 100%)',
  },
  music_generation: {
    id: 'music_generation',
    label: 'Music Generation',
    icon: '🎵',
    description: 'AI music composition, song generation, and audio production',
    color: '#10b981',
    gradient: 'linear-gradient(135deg, rgba(16,185,129,0.18) 0%, rgba(13,148,136,0.1) 100%)',
  },
  video_generation: {
    id: 'video_generation',
    label: 'Video Generation',
    icon: '🎬',
    description: 'AI video creation, animation, and video editing tools',
    color: '#f97316',
    gradient: 'linear-gradient(135deg, rgba(249,115,22,0.18) 0%, rgba(217,119,6,0.1) 100%)',
  },
  vs_code_extensions: {
    id: 'vs_code_extensions',
    label: 'VS Code Extensions',
    icon: '🔌',
    description: 'AI coding assistants and agents as VS Code extensions',
    color: '#3b82f6',
    gradient: 'linear-gradient(135deg, rgba(59,130,246,0.18) 0%, rgba(79,70,229,0.1) 100%)',
  },
  cli_coding_agents: {
    id: 'cli_coding_agents',
    label: 'CLI Coding Agents',
    icon: '⚡',
    description: 'Terminal-based AI coding agents and developer tools',
    color: '#84cc16',
    gradient: 'linear-gradient(135deg, rgba(132,204,22,0.18) 0%, rgba(22,163,74,0.1) 100%)',
  },
  byok_extensions: {
    id: 'byok_extensions',
    label: 'BYOK Extensions',
    icon: '🔑',
    description: 'Bring Your Own Key coding agents — full control, zero platform cost',
    color: '#eab308',
    gradient: 'linear-gradient(135deg, rgba(234,179,8,0.18) 0%, rgba(217,119,6,0.1) 100%)',
  },
  standalone_ides: {
    id: 'standalone_ides',
    label: 'Standalone IDEs',
    icon: '🖥️',
    description: 'AI-native full IDEs and app builders',
    color: '#6366f1',
    gradient: 'linear-gradient(135deg, rgba(99,102,241,0.18) 0%, rgba(124,58,237,0.1) 100%)',
  },
  api_providers: {
    id: 'api_providers',
    label: 'API Providers',
    icon: '🔗',
    description: 'LLM inference APIs, gateways, and model access providers',
    color: '#64748b',
    gradient: 'linear-gradient(135deg, rgba(100,116,139,0.18) 0%, rgba(82,82,91,0.1) 100%)',
  },
  free_claude_codex: {
    id: 'free_claude_codex',
    label: 'Free Claude Code & Codex',
    icon: '🤖',
    description: 'Proxy services and API gateways to run Claude Code CLI and OpenAI Codex CLI for free or at very low cost',
    color: '#f97316',
    gradient: 'linear-gradient(135deg, rgba(249,115,22,0.18) 0%, rgba(234,88,12,0.1) 100%)',
  },
};
