export default function StampBadge({ label = 'ПРОВЕРЕНО' }) {
  return (
    <div className="stamp">
      <span className="stamp__ring" />
      <span className="stamp__text">{label}</span>
    </div>
  )
}
