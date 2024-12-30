import { Html } from '@elysiajs/html'
import HeadComponent from './components/HeadComponent'
import FooterComponent from './components/FooterComponent'
import NavbarComponent from './components/NavbarComponent'

const About = () => {
  return (
    <html lang="en">
      <HeadComponent title={'Hakkımızda'} />
      <body>
        <NavbarComponent />
        <div class="container">
          <h1>Hakkımızda</h1>
        </div>
        <FooterComponent />
      </body>
    </html>
  )
}

export default About