import {
	Router,
	Request,
	Response,
	NextFunction,
	RequestParamHandler
} from 'express';
import { ParamsDictionary } from 'express-serve-static-core';

interface RequestWithBody extends Request {
	body: { [key: string]: string | undefined };
}

function requireAuth(req: Request, res: Response, next: NextFunction) {
	if (req.session && req.session.loggedIn) {
		return next();
	}
	res.status(403).send('Not permitted');
}

const router = Router();

router.get('/login', (req, res) => {
	res.send(`
    <form method="POST">
      <div>
        <label>Email</label>
        <input name="email"/>
      </div>
      <div>
        <label>Password</label>
        <input name="password" type="password"></input>
      </div>
      <button type="submit">Submit</button>
    </form>
  `);
});

router.post('/login', (req: RequestWithBody, res) => {
	const { email, password } = req.body;

	if (email === 'hi@hi.com' && password === '12345') {
		req.session = { loggedIn: true };
		res.redirect('/');
	} else {
		res.send('Invalid email or password');
	}
});

router.get('/', (req, res) => {
	if (req.session && req.session.loggedIn) {
		res.send(`
      <div>
      <div>You are logged in</div>
      <a href="/logout">Logout</a>
      </div>
    `);
	} else {
		res.send(`
      <div>
      <div>You are not logged in</div>
      <a href="/login">Login</a>
      </div>
    `);
	}
});

router.get('/logout', (req, res) => {
	req.session = undefined;
	res.redirect('/');
});

router.get('/protected', requireAuth, (req, res) => {
	res.send('Welcome to protected route, logged in user');
});

export { router };
