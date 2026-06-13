import type { APIRoute } from 'astro';
import { allTools } from '../data/tools';

export const GET: APIRoute = () => {
  const index = allTools.map(tool => ({
    id: tool.id,
    name: tool.name,
    description: tool.description,
    category: tool.category,
    tags: tool.tags,
    capabilities: tool.capabilities,
    top_models: tool.top_models,
    pricing: tool.pricing,
    notes: tool.notes,
    rating: tool.rating,
  }));

  return new Response(JSON.stringify(index), {
    headers: { 'Content-Type': 'application/json' },
  });
};
