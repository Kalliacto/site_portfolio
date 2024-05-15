import Footer from './components/footer';
import Navbar from './components/navbar';
import Contacts from './pages/contacts/index';
import HomePage from './pages/homePage/index';
import Projects from './pages/projects/index';
import './styles/main.css';
import './App.css';
import { Route, Routes } from 'react-router';
import ProjectPage from './pages/projectPage';

function App() {
    return (
        <div className='App'>
            <Navbar />
            <Routes>
                <Route path='/' element={<HomePage />} />
                <Route path='/allProjects' element={<Projects />} />
                <Route path='/project/:id' element={<ProjectPage />} />
                <Route path='/contacts' element={<Contacts />} />
            </Routes>
            <Footer />
        </div>
    );
}

// TODO: Сделать кнопку скачать резюме активной

export default App;
