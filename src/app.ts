import express from 'express';
import routes from './routes';

const app = express();

routes.homepage(app);

export default app;
