import { Request, Response, NextFunction } from 'express';
import { get, post, controller, bodyValidator, use } from './decorators';

function requireAuth(req: Request, res: Response, next: NextFunction) {
	if (req.session && req.session.loggedIn) {
		return next();
	}
	res.status(403).send('Not permitted');
}

@controller('')
class RootController {
	@get('/')
	getRoot(req: Request, res: Response) {
		if (req.session && req.session.loggedIn) {
			res.send(`
        <div>
        <div>You are logged in</div>
        <a href="/auth/logout">Logout</a>
        </div>
      `);
		} else {
			res.send(`
        <div>
        <div>You are not logged in</div>
        <a href="/auth/login">Login</a>
        </div>
      `);
		}
	}

	@get('/protected')
	@use(requireAuth)
	getProtected(req: Request, res: Response) {
		res.send('Welcome to protected route, logged in user');
	}
}
