import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { HomePage } from './components/HomePage/HomePage';
import { NavBar } from './components/NavBar/NavBar';
import { PhotoListPage } from './components/PhotoListPage/PhotoList';
import { TodoListPage } from './components/TodoListPage/TodoListPage';

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="*" element={<Navigate to="/home" />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/todolist" element={<TodoListPage />} />
        <Route path="/photolist" element={<PhotoListPage />} />
      </Routes>
    </Router>
  );
}

export default App;
