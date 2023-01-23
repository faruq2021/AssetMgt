import Head from 'next/head';
import Nav from "../components/Nav";
import Footer from "../components/Footer"
import Feature from "../components/Features"
import Welcome from '@/components/Welcome';
import Session from "@/components/Session"

// import Navbar from "../components/Navbar"

const Home = () => (
  <div>
    
    <Head>
      <title>My App</title>
    </Head>
    {/* <header>
    <Nav />
      <nav>
        <a href='/contact'>Contact</a>

        <a href='/about'>About</a>
      </nav>
    </header> */}

    <Nav />
    <Welcome/>
    <Session/>
    
    {/* <Navbar/> */}
    {/* <main>
      <h1>Welcome to my App!</h1>
      <p>This is the home page.</p>
    </main> */}
    <Feature/>
    <Footer />
  </div>
)

export default Home
