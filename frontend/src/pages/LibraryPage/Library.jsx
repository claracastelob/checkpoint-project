import styles from "./styles.module.css"
import Sidebar from "../../components/Sidebar/Sidebar"
import GameCard from "../../components/GameCard/GameCard"
import NewGameModal from "../../components/NewGameModal/NewGameModal"
import { useState } from "react"
import Topbar from "../../components/Topbar/index"

const games = [
  {id: 1, name: "Avowed", img: "avowed", rating: 3},
  {id: 2, name: "Civilization VI", img: "civi", rating: 5},
  {id: 3, name: "Crash Bandicoot", img: "imagem", rating: 5},
  {id: 4, name: "Dishonored 2", img: "imagem", rating: 4},
  {id: 5, name: "Far Cry 3", img: "imagem", rating: 4},
  {id: 6, name: "GTA IV", img: "imagem", rating: 4},
  {id: 7, name: "The Sims 2", img: "imagem", rating: 3},
  {id: 8, name: "Zelda: Ocarina of Time", img: "imagem", rating: 4},
]

export default function Library() {
  const [openModal, setOpenModal] = useState(false)
  return(
    <div className={styles.container}>
      <Topbar />
      <main className={styles.content}>
        <div className={styles.header}>
          <h1>Minha Biblioteca</h1>
          <button className={styles.newGameButton} onClick={() => setOpenModal(true)}>+ Novo Jogo</button>
        </div>

        <div className={styles.gameGrid}>
          {games.map((game) => (
            <GameCard key={game.id} {...game}/>
          ))}
        </div>
      </main>
      <NewGameModal isOpen={openModal} onClose={() => setOpenModal(false)}/>
    </div>
  )
}