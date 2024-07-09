import './App.css';
import Home from './components/home/Home';
import NewsComponent from './components/news/NewsComponent';
import Video from './components/video/Video';
import { Route, BrowserRouter, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/video' element={<Video/>}/>
          <Route path='/news' element={<NewsComponent/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;