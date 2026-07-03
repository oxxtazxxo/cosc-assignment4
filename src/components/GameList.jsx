import Game from './Game'

const GameList = ({games}) => {
  return (
    <div className='games-block'>
      {games.results.map((game) => (
        <Game key={game.id} game={game}/>
      ))}
    </div>
  )
}

export default GameList
