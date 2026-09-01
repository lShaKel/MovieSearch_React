import type {PropsWithChildren, MouseEvent} from "react";
import styles from './Button.module.scss'

type ButtonVariant =  'burger' | 'search' | 'basic'

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
    basic: styles.discoverButton,
    burger: styles.burgerButton,
    search: styles.searchButton,
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
          width="35"
          height="35"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="lucide lucide-moon-icon lucide-moon"
        >
          <path d="M20.985 12.486a9 9 0 1 1-9.473-9.472c.405-.022.617.46.402.803a6 6 0 0 0 8.268 8.268c.344-.215.825-.004.803.401" />
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