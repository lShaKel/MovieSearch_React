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
  };

  const classVariants = variants[variant] || '';

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