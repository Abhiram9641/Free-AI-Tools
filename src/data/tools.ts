import type { Tool } from './types';
import { CATEGORY_META } from './types';

// Raw JSON imports — Astro handles these natively
import chattingRaw from '../../data/chatting_interfaces.json';
import imageRaw from '../../data/image_generation.json';
import audioRaw from '../../data/audio_generation.json';
import musicRaw from '../../data/music_generation.json';
import videoRaw from '../../data/video_generation.json';
import vsCodeRaw from '../../data/vs_code_extensions.json';
import cliRaw from '../../data/cli_coding_agents.json';
import byokRaw from '../../data/byok_extensions.json';
import idesRaw from '../../data/standalone_ides.json';
import apiRaw from '../../data/api_providers.json';
import claudeCodexRaw from '../../data/free_claude_codex.json';

// Normalize: some files are { category, tools: [...] }, others are plain arrays
function extractTools(raw: unknown, category: string): Tool[] {
  const arr: unknown[] = Array.isArray(raw)
    ? (raw as unknown[])
    : ((raw as { tools?: unknown[] }).tools ?? []);

  return (arr as Tool[]).map((t, i) => ({
    ...t,
    id: `${category}-${i}-${t.name.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`,
    category,
    top_models: t.top_models ?? [],
    capabilities: t.capabilities ?? [],
    tags: t.tags ?? [],
    rating: t.rating ?? 0,
    models_count: t.models_count ?? 0,
    screenshot: t.screenshot ?? '',
  }));
}

const rawSources: [unknown, string][] = [
  [chattingRaw, 'chatting_interfaces'],
  [imageRaw, 'image_generation'],
  [audioRaw, 'audio_generation'],
  [musicRaw, 'music_generation'],
  [videoRaw, 'video_generation'],
  [vsCodeRaw, 'vs_code_extensions'],
  [cliRaw, 'cli_coding_agents'],
  [byokRaw, 'byok_extensions'],
  [idesRaw, 'standalone_ides'],
  [apiRaw, 'api_providers'],
  [claudeCodexRaw, 'free_claude_codex'],
];

export const allTools: Tool[] = rawSources.flatMap(([raw, cat]) =>
  extractTools(raw, cat)
);

export const toolsByCategory: Record<string, Tool[]> = allTools.reduce(
  (acc, tool) => {
    if (!acc[tool.category]) acc[tool.category] = [];
    acc[tool.category].push(tool);
    return acc;
  },
  {} as Record<string, Tool[]>
);

// Derive unique filter values from data
export const allCapabilities: string[] = [
  ...new Set(allTools.flatMap((t) => t.capabilities)),
].sort();

export const allTags: string[] = [
  ...new Set(allTools.flatMap((t) => t.tags)),
].sort();

export const categories = Object.keys(CATEGORY_META);

// Stats for homepage
export const stats = {
  totalTools: allTools.length,
  totalCategories: categories.length,
  freeTools: allTools.filter((t) => t.pricing === 'free').length,
  activeTools: allTools.filter((t) => t.status === 'active').length,
};

// Top-rated tools for featured section
export const featuredTools: Tool[] = allTools
  .filter((t) => t.status === 'active' && t.rating >= 4.5)
  .sort((a, b) => b.rating - a.rating)
  .slice(0, 12);
