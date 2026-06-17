import { useMemo, useState } from 'react'
import { recipes, getAllTags } from '../data/recipes.js'
import RecipeCard from '../components/RecipeCard.jsx'
import TagFilter from '../components/TagFilter.jsx'

export default function Home() {
  const [activeTag, setActiveTag] = useState(null)
  const tags = useMemo(getAllTags, [])

  const visible = activeTag ? recipes.filter((r) => r.tags?.includes(activeTag)) : recipes

  function toggleTag(tag) {
    setActiveTag((current) => (current === tag ? null : tag))
  }

  return (
    <div className="page">
      <header className="header">
        <p className="header__eyebrow">Личная книга рецептов</p>
        <h1 className="header__title">Готовлю. Проверяю. Записываю.</h1>
        <p className="header__lead">
          Здесь только мои проверенные рецепты.
        </p>
      </header>

      <TagFilter tags={tags} active={activeTag} onToggle={toggleTag} />

      {visible.length === 0 ? (
        <p className="empty">
          {recipes.length === 0 ? 'Рецептов пока нет — скоро появятся.' : 'Рецептов с этим тегом пока нет.'}
        </p>
      ) : (
        <div className="grid">
          {visible.map((recipe) => (
            <RecipeCard key={recipe.slug} recipe={recipe} />
          ))}
        </div>
      )}
    </div>
  )
}
