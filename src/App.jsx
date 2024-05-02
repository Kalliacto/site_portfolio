import Footer from './components/footer';
import Navbar from './components/navbar';
import HomePage from './pages/homePage/inadex';
import Projects from './pages/projects/inadex';
import './styles/main.css';

function App() {
    return (
        <div className='App'>
            <Navbar />
            {/* <HomePage /> */}
            <Projects />
            <Footer />
        </div>
    );
}

export default App;
