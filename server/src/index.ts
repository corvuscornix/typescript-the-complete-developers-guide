import express from 'express';
import bodyParser from 'body-parser';
import cookieSession from 'cookie-session';
import './controllers';
import { AppRouter } from './appRouter';

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieSession({ keys: ['asdlkj'] }));
app.use(AppRouter.getInstance());

app.listen(3000, () => {
	console.log('Server running on port 3000');
});
