import Head from 'next/head';
import Nav from "../components/Nav";
import Footer from "../components/Footer"
import Feature from "../components/Features"

const Home = () => (
  <div>
    <Nav />
    <Head>
      <title>My App</title>
    </Head>
    <header>
      <nav>
        <a href='/contact'>Contact</a>
        
        <a href='/about'>About</a>
      </nav>
    </header>
    <main>
      <h1>Welcome to my App!</h1>
      <p>This is the home page.</p>
    </main>
    <Feature/>
    <Footer />
  </div>
)

export default Home
