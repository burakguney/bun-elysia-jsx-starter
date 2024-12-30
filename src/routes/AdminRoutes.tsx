import Elysia from "elysia";
import { getAdminHome } from "../controllers/AdminController";

const AdminRoutes = new Elysia({ prefix: '/admin' })
    .get('/', getAdminHome)

export default AdminRoutes;