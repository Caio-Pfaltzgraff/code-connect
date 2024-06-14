import Image from 'next/image'
import styles from './aside.module.css'
import logo from './logo.png'

import Link from 'next/link'
import aboutusIcon from './aboutus.png'
import exitIcon from './exit.png'
import feedIcon from './feed.png'
import profileIcon from './profile.png'

const links = [
  {
    name: 'Feed',
    icon: feedIcon
  },
  {
    name: 'Perfil',
    icon: profileIcon
  },
  {
    name: 'Sobre nós',
    icon: aboutusIcon
  },
  {
    name: 'Sair',
    icon: exitIcon
  },
]

export const Aside = () => {
  return (
    <aside className={styles.aside}>
      <Link href="/">
        <Image src={logo} alt="Logo da Code Connect"/>
      </Link>
      <ul className={styles.items}>
        <li>
          <button>Publicar</button>
        </li>
        {links.map(l => (
          <li key={l.name}>
            <Image
              src={l.icon} 
              alt={`Icone ${l.name}`}
              width={32}
              height={32}
            />
            <p>{l.name}</p>
          </li>
        ))}
      </ul>
    </aside>
  )
}