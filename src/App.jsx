import Footer from './components/footer';
import Navbar from './components/navbar';
import Contacts from './pages/contacts/inadex';
import HomePage from './pages/homePage/inadex';
import Projects from './pages/projects/inadex';
import './styles/main.css';
import './App.css';

function App() {
    return (
        <div className='App'>
            <Navbar />
            {/* <HomePage /> */}
            {/* <Projects /> */}
            <Contacts />
            <Footer />
        </div>
    );
}

export default App;
