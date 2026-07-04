const Game = ({ game }) => {
    const date = new Date(game.released).toLocaleDateString('en-US', {
        month: 'long',
        day: 'numeric',
        year: 'numeric'
    });


    console.log(game);
    return (
        <div className='game-block'>
            <div className='game-thumbnail-wrapper'>
                <img src={game.background_image} className='game-thumbnail-img'></img>
            </div>
            <div className='game-info-block'>
                <h2>{game.name}</h2>
            </div>
            <div className='game-info-block'>
                <p>Released {date}</p>
                {game.metacritic ? <p>Metacritic Score: {game.metacritic}</p> : <p>Metacritic Score: N/A</p>}
            </div>
        </div>
    )
}

export default Game
