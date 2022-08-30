import LoginPage from './screens/LoginPage'
import ProfilePage from './screens/ProfilePage'
import ListPage from './screens/ListPage';
import UploadPage from "./screens/UploadPage";
import RegisterPage from './screens/RegisterPage';
import TablePage from './components/TablePage';
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import './App.css';
import Register from './screens/RegisterPage';

function App() {
  return (
    <>
     <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
           <Route path="/lists" element={<ListPage />} />
           <Route path="/table/:id" element={<TablePage />} />
           <Route path="/upload" element={<UploadPage />} />
           <Route path="/profile" element={<ProfilePage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
