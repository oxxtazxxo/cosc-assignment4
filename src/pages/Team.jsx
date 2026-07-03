function Team() {
  return (
    <main>
      <h1>Team</h1>
      <article class="team-member">
        <figure>
          <img src="https://via.placeholder.com/150" alt="Team Member 1" />
          <figcaption><h3>Team Member 1</h3></figcaption>
        </figure>
        <p class="title">Project team member</p>
        <p class="about">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>

        <nav araia-label="Social Media Links">
          <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a>
          <a href="https://www.github.com" target="_blank" rel="noopener noreferrer">GitHub</a>
        </nav>
      </article>
    </main>
  );
}

export default Team;