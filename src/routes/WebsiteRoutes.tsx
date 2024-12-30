import Elysia from "elysia";
import { getHome, getAbout, getLogin, postLogin } from "../controllers/WebsiteController";

const WebsiteRoutes = new Elysia({ prefix: '' })
    .get('/', getHome)
    .get('/about', getAbout)
    .get('/login', getLogin)
    .post('/login', postLogin);

export default WebsiteRoutes;