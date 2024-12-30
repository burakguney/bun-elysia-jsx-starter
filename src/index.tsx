import Elysia from 'elysia'
import html from '@elysiajs/html'

import websiteRoutes from './routes/WebsiteRoutes'
import adminRoutes from './routes/AdminRoutes'

new Elysia()
  .use(html())
  .use(websiteRoutes)
  .use(adminRoutes)
  .listen(3000)