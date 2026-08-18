import type {PropsWithChildren, MouseEvent, AnchorHTMLAttributes} from "react";

type RouterProp = {
  to: string,
} & Omit<AnchorHTMLAttributes<HTMLAnchorElement>, 'href' | 'onClick'>

const RouterLink = (props:PropsWithChildren<RouterProp>) => {
const {
  to,
  children,
  ...rest
} = props

  const handleClick = (event:MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault()

    window.history.pushState({}, '', to)
    window.dispatchEvent(new PopStateEvent('popstate'))
  }

  return(
    <a href={to} onClick={handleClick} {...rest}>
      {children}
    </a>
  )
}

export default RouterLink

