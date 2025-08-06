import { Outlet } from 'react-router';
import Header from '../shared/Header';

function Rootlayout() {
    return (
        <>
            <Header />
            <main>
                <Outlet />
            </main>
        </>
    );
}

export default Rootlayout;
