'use client'
import Image from "next/image"
import { useState } from "react"
import styles from "./search.module.css"
import search from "./search.png"

export const Search = () => {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <div className={`${styles.search} ${isFocused ? styles.focused : ''}`}>
      <Image src={search} alt="Lupa"/>
      <input 
        type="text" 
        placeholder="Digite o que você procura"
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        onChange={(e) => setIsFocused(e.target.value.length > 0)}
      />
    </div>
  )
}