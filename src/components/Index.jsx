import { NavLink } from 'react-router-dom';
import WindowsTop from '../hooks/WindowsTop';


function Index() {
    WindowsTop();
    return (
        <div className="w-full py-10 px-4 mx-auto bg-blue-700">
            <h2 className="mb-10 text-white text-4xl font-bold">Il mondo delle Professioni Sanitarie</h2>
        </div>
    );
}

export default Index;