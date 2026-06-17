import { Link } from 'react-router-dom'

export default function RecipeCard({ recipe }) {
  return (
    <Link to={`/recipe/${recipe.slug}`} className="card">
      <div
        className="card__photo"
        style={recipe.photo ? { backgroundImage: `url(${recipe.photo})` } : undefined}
      >
        {!recipe.photo && <span className="photo-fallback">{recipe.title[0]}</span>}
      </div>
      <div className="card__body">
        <h3 className="card__title">{recipe.title}</h3>
        {recipe.description && <p className="card__desc">{recipe.description}</p>}
        {recipe.tags?.length > 0 && (
          <ul className="tag-list">
            {recipe.tags.map((tag) => (
              <li key={tag}>{tag}</li>
            ))}
          </ul>
        )}
      </div>
    </Link>
  )
}
