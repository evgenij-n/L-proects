import './App.css';
import {Header} from './Heder/Header';
import {Main} from './Main/Main';
import {Nav} from './Nav/Nav';


function App() {
  return (
    <>
      <div className='gridWrap'>

        <Header />

        <Nav />

        <Main />

      </div>
    </>
  )
}

export default App;