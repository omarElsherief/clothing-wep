import { Outlet } from 'react-router';
import Header from '../shared/Header';
import Footer from '../shared/Footer';

function Rootlayout() {
    return (
        <>
            <Header />
            <main>
                <Outlet />
            </main>
            <Footer />
        </>
    );
}

export default Rootlayout;
