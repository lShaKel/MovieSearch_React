import type {PropsWithChildren, MouseEvent} from "react";
import styles from './Button.module.scss'

type ButtonVariant = 'discover' | 'theme' | 'burger'
type ButtonProps = {
  className?: string,
  type?:'button' | 'submit',
  variant?:ButtonVariant,
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void,
}

const Button = (props:PropsWithChildren<ButtonProps>) => {

  const {
    className,
    type,
    variant,
    children,
    onClick,
  } = props

  const variants:Record<ButtonVariant, string | undefined> = {
    discover: styles.discoverButton,
    theme: 'theme-changer',
    burger: styles.burgerButton
  };

  const classVariants = variant ? variants[variant] : '';

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