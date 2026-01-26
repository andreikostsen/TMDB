import s from "./header.module.scss"

export const Header = () => {
  return (
    <header className={s.header}>
      <img src={"src/assets/logo/blue_long.svg"}
           alt={'TMDB logo'}  className={s.logo} />
      <nav className={s.menu}>
        <a>Home</a>
        <a>Products</a>
        <a>Blog</a>
        <a>About</a>
        <a>Contact</a>
      </nav>
      <div>theme switch</div>

    </header>
  )
}