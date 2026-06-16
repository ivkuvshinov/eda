import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <div className="page">
      <h1 className="header__title">Рецепт не найден</h1>
      <p>Такой страницы нет — возможно, рецепт ещё не опубликован или ссылка устарела.</p>
      <Link to="/" className="back-link">
        ← Ко всем рецептам
      </Link>
    </div>
  )
}
