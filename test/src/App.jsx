import './App.css';
import { Dialog } from './Dialog/Dialog';
import { Header } from './Heder/Header';
import { Main } from './Main/Main';
import { Nav } from './Nav/Nav';
import { News } from './News/News';
import { Music } from './Music/Music';
import { Settings } from './Settings/Settings';
import { BrowserRouter, Route, Routes } from 'react-router-dom';


function App(props) {
  return (
    <>
      <BrowserRouter>
        <div className='gridWrap'>
          <Header />
          <Nav />
          <div className='main'>
          <Routes>
            <Route path="/dialog" element={<Dialog />} />
            <Route path="/main" element={<Main />} />
            <Route path="/news" element={<News />} />
            <Route path="/music" element={<Music />} />
            <Route path="/settings" element={<Settings />} />
          </Routes>
          </div>
        </div>
      </BrowserRouter>
    </>
  )
}

export default App;