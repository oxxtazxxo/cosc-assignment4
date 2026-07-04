import GameList from '../components/GameList'
import { useState, useEffect } from 'react'

function Dashboard() {

  const API_KEY='3fd058d792484392997db535625ae3d8'

  const [games, setGames] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    fetch(`https://api.rawg.io/api/games?key=${API_KEY}&search=Final+Fantasy&page_size=8`)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setGames(data);
        setLoading(false);
      }).catch((err) => {
        setError(err.message);
        setLoading(false);
      })
  },[])

  if (loading) return <h1>Loading...</h1>;
  if (error) return <h1>Network Error: {error}</h1>

  return <div className='dashboard'>
      <h1>Dashboard</h1>
      <GameList games={games}/>
    </div>;
}

export default Dashboard;