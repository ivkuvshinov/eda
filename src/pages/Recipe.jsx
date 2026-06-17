import { useParams, Link } from 'react-router-dom'
import { getRecipeBySlug } from '../data/recipes.js'
import NotFound from './NotFound.jsx'

function Step({ step }) {
  return (
    <li>
      <span className="step__text">{step.text}</span>
      {step.timer_seconds && (
        <span className="step__timer">{Math.round(step.timer_seconds / 60)} мин</span>
      )}
      {step.photo && <img src={step.photo} alt="" className="step__photo" loading="lazy" />}
    </li>
  )
}

export default function Recipe() {
  const { slug } = useParams()
  const recipe = getRecipeBySlug(slug)

  if (!recipe) return <NotFound />

  return (
    <div className="page page--recipe">
      <Link to="/" className="back-link">
        ← Ко всем рецептам
      </Link>

      <article>
        <div
          className="recipe__photo"
          style={recipe.photo ? { backgroundImage: `url(${recipe.photo})` } : undefined}
        >
          {!recipe.photo && <span className="photo-fallback">{recipe.title[0]}</span>}
        </div>

        <header className="recipe__header">
          <h1 className="recipe__title">{recipe.title}</h1>
          {recipe.description && <p className="recipe__desc">{recipe.description}</p>}
          {recipe.tags?.length > 0 && (
            <ul className="tag-list">
              {recipe.tags.map((tag) => (
                <li key={tag}>{tag}</li>
              ))}
            </ul>
          )}
        </header>

        <div className="recipe__body">
          <section className="recipe__ingredients">
            <h2>Ингредиенты</h2>
            <ul>
              {recipe.ingredients.map((ing, i) => (
                <li key={i}>
                  <span className="amount">
                    {ing.amount ? `${ing.amount}${ing.unit ? ' ' + ing.unit : ''}` : ing.unit}
                  </span>
                  <span className="name">{ing.name}</span>
                </li>
              ))}
            </ul>
          </section>

          <section className="recipe__steps">
            <h2>Шаги</h2>
            {recipe.sections ? (
              recipe.sections.map((sec, si) => (
                <div className="step-section" key={si}>
                  <h3>{sec.title}</h3>
                  <ol>
                    {sec.steps.map((step, i) => (
                      <Step step={step} key={i} />
                    ))}
                  </ol>
                </div>
              ))
            ) : (
              <ol>
                {recipe.steps.map((step, i) => (
                  <Step step={step} key={i} />
                ))}
              </ol>
            )}
          </section>
        </div>

        {recipe.gallery?.length > 0 && (
          <section className="recipe__gallery">
            <h2>Фото</h2>
            <div className="gallery__grid">
              {recipe.gallery.map((src, i) => (
                <img key={i} src={src} alt="" loading="lazy" />
              ))}
            </div>
          </section>
        )}
      </article>
    </div>
  )
}
