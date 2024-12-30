import { redirect } from 'elysia';
import { Html } from '@elysiajs/html';
import Home from '../views/Home';
import About from '../views/About';
import Login from '../views/Login';

export const getHome = () => {
    return <Home />;
};

export const getAbout = () => {
    return <About />;
};

export const getLogin = () => {
    return <Login />;
};

export const postLogin = ({ body }: { body: { email: string; password: string } }) => {
    if (body.email === 'burakguney@email.com') {
        return redirect('/');
    }
    return <Login />;
};
