import { Heading } from '@/components/Heading'
import { ArrowBack } from '@/components/icons/ArrowBack'
import Image from 'next/image'
import Link from 'next/link'
import banner from './error/404.png'
import styles from './error/error.module.css'

export default function NotFound() {
  return (
    <div className={styles.container}>
      <Image src={banner}/>
      <Heading>OPS! Página não encontrada.</Heading>
      <p className={styles.text}>Você pode voltar ao feed e continuar buscando projetos incríveis!</p>
      <Link href="/">
        Voltar ao feed <ArrowBack color='#81FE88'/>
      </Link>
    </div>
  )
}