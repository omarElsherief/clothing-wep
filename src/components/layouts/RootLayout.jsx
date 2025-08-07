import { Outlet } from 'react-router';
import Header from '../shared/Header';
import Footer from '../shared/footer';

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
