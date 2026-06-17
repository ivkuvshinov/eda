// Подхватывает все JSON-файлы рецептов из папки /recipes в корне репозитория
const modules = import.meta.glob('../../recipes/*.json', { eager: true })

export const recipes = Object.values(modules)
  .map((mod) => mod.default ?? mod)
  .sort((a, b) => (b.created_at || '').localeCompare(a.created_at || ''))

export function getRecipeBySlug(slug) {
  return recipes.find((r) => r.slug === slug)
}

export function getAllTags() {
  const tags = new Set()
  recipes.forEach((r) => (r.tags || []).forEach((t) => tags.add(t)))
  return Array.from(tags).sort()
}
