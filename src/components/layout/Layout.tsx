import Header from './Header/Header';
import Footer from './Footer/Footer';
import { Outlet } from 'react-router-dom';
import '../../App.css'
import { ThemeProvider } from '../../context/ThemeProvider';


const Layout = () => {
    return (
        <ThemeProvider>
        <div className='containerApp'>
            <Header />
            <main>
                <Outlet />
            </main>
            <Footer />

        </div>
        </ThemeProvider>
    );
};

export default Layout;