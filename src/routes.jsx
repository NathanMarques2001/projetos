import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Home } from './pages/home';
import { ProjectDescription } from './pages/project-description';

export function Rotas() {
  return (
    <Router>
      <Routes>
        <Route path="/projetos" element={<Home />} />
        <Route path="/csapp" element={<ProjectDescription projectTitle="csapp" />} />
        <Route path="/movie-match" element={<ProjectDescription projectTitle="movie-match" />} />
        <Route path="/britaldo-estoque" element={<ProjectDescription projectTitle="britaldo-estoque" />} />
        <Route path="/sistema-reconhecimento-facial" element={<ProjectDescription projectTitle="sistema-reconhecimento-facial" />} />
      </Routes>
    </Router>
  );
}