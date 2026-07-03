import { Link } from "react-router-dom";

function Home() {
  return (
    <main>
      <section className="hero">
        <h1>Welcome to Game Vault</h1>
        <p>Discover, search, and explore thousands of games.</p>
        <p>View ratings, screenshots, release info, and more — all in one place.</p>
        <Link to="/dashboard" className="cta-button">Browse Games</Link>
      </section>
    </main>
  );
}

export default Home;