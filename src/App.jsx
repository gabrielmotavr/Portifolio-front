import { Route, Routes } from 'react-router-dom';
import Home from './components/sections/home.jsx';
import GitHubDashboard from './components/GitHub/GitHubDashboard.jsx';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/github" element={<GitHubDashboard />} />
    </Routes>
  );
}