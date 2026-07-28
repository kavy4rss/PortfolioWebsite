export default function Tag({ children, color = '#F5C518', className = '' }) {
  return (
    <span
      className={`tag-chip ${className}`}
      style={{
        background: `${color}18`,
        borderColor: `${color}44`,
        color: color,
      }}
    >
      {children}
    </span>
  );
}
