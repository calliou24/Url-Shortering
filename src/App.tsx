import Footer from "./components/Footer/footer"
import Card from "./components/FooterCard/card"
import Intro from "./components/Intro/intro"
import Nav from "./components/Nav/nav"
import Stadistics from "./components/Stadistics/stadistics"
import UrlShorter from "./components/urlShorter/urlShorter"


function App() {

  return (
    <main className="App">
        <Nav/>
        <Intro/>
        <div className="url-shorted">
          <UrlShorter/>
          <Stadistics/>
        </div>
        <Card/>
        <Footer/>
    </main>
  )
}

export default App
