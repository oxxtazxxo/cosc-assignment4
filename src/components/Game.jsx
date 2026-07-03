const Game = ({ key, game }) => {

    console.log(game);
    return (
        <div className='game-block'>
            <h2>{game.name}</h2>
        </div>
    )
}

export default Game
