import styles from './Button.module.scss'
const Button = (props) => {

  const {
    className = "",
    type = 'button',
    variant = '',
    children,
    onClick,
  } = props

  const variants = {
    discover: styles.discoverButton,
    theme: 'theme-changer',
    burger: styles.burgerButton
  };

  const classVariants = variants[variant] || '';

  if( variant === 'burger') {
    return (
      <button
        className={`${className} ${classVariants}`}
        type={type}
        onClick={onClick}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="50"
          height="50"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#ffd11a"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="lucide lucide-menu-icon lucide-menu"
        >
          <path d="M4 5h16" />
          <path d="M4 12h16" />
          <path d="M4 19h16" />
        </svg>
      </button>
    )
  }

  return (
    <button
      className={`${styles.button} ${className} ${classVariants}`}
      type={type}
      onClick={onClick}
    >
      {children}
    </button>
  )
}
export default Button