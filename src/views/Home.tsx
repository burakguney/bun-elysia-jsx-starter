import { Html } from '@elysiajs/html'
import HeadComponent from './components/HeadComponent'
import FooterComponent from './components/FooterComponent'
import NavbarComponent from './components/NavbarComponent'

const Home = () => {
  return (
    <html lang="en">
      <HeadComponent title={'Anasayfa'} />
      <body>
        <NavbarComponent />
        <div class="container">
          <h1>Anasayfa</h1>
        </div>
        <FooterComponent />
      </body>
    </html>
  )
}

export default Home