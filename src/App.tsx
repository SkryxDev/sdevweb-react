import logo from './images/logo.gif';
import './App.css';
import Cards from './components/cards';
import Navbar from './components/navbar'
import Aboutme from './components/aboutme'

export default function App() {
  return(
    <>
      <div className="App">
      <Navbar />
        <header className="App-header">
          <img src={logo} alt="logo" className="App-logo"/>
          <h1>SkryxDev</h1><p className="App-link">Made using ReactJS and TypeScript</p>
        </header>
        <Aboutme/>
        <Cards />
      </div>
    </>
  )
};
