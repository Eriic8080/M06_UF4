
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import './App.css'
import IndexMenu from './components/pages/IndexMenu';
import MoviesAdd from './components/MoviesAdd';
import MovieList from './components/pages/MoviesList';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<IndexMenu />} />
        <Route path="/movies/list" element={<MovieList />} />
        <Route path="/movies/add" element={<MoviesAdd />} />
      </Routes>
    </Router>
  )
}

export default App;