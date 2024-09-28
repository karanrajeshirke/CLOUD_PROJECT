import React, { useState, useEffect } from "react";

function Header() {
  return (
    <header className="bg-dark text-white text-center py-4 mb-4 shadow-sm">
      <h1 className="display-4 neon-text">Chuck Norris Jokes</h1>
    </header>
  );
}

function Footer() {
  return (
    <footer className="bg-dark text-white text-center py-3 mt-auto">
      <p className="mb-0">
        &copy; 2024 Jokes Generator | Made with 💜 by Karan
      </p>
    </footer>
  );
}

function About() {
  return (
    <section className="text-center py-5 neon-section">
      <div className="container">
        <h2 className="display-6 neon-text">About This App</h2>
        <p className="lead">
          Enjoy some random Chuck Norris jokes powered by the Chuck Norris Joke
          API! Click the button below to get a new joke.
        </p>
      </div>
    </section>
  );
}

function JokeGenerator() {
  const [joke, setJoke] = useState("");

  const fetchJoke = async () => {
    try {
      const response = await fetch("https://api.chucknorris.io/jokes/random");
      const data = await response.json();
      setJoke(data.value);
    } catch (error) {
      setJoke("Failed to fetch joke. Please try again.");
    }
  };

  useEffect(() => {
    fetchJoke();
  }, []);

  return (
    <div className="text-center py-5">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-8">
            <div className="card custom-card shadow-lg border-0">
              <div className="card-body p-4">
                <blockquote className="blockquote mb-4 text-muted">
                  <p className="lead">{joke}</p>
                </blockquote>
                <button
                  className="btn btn-lg btn-primary rounded-pill"
                  onClick={fetchJoke}
                >
                  🔄 New Joke
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function App() {
  return (
    <div className="d-flex flex-column min-vh-100">
      <Header />
      <About />
      <JokeGenerator />
      <Footer />
    </div>
  );
}

export default App;
