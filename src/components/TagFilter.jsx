export default function TagFilter({ tags, active, onToggle }) {
  if (!tags.length) return null
  return (
    <div className="tag-filter" role="group" aria-label="Фильтр по тегам">
      {tags.map((tag) => (
        <button
          key={tag}
          type="button"
          className={`tag-filter__item${active === tag ? ' is-active' : ''}`}
          onClick={() => onToggle(tag)}
          aria-pressed={active === tag}
        >
          {tag}
        </button>
      ))}
    </div>
  )
}
