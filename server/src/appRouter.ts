import express from 'express';

// Singleton
export class AppRouter {
	private static instance: express.Router;

	static getInstance(): express.Router {
		if (AppRouter.instance) return this.instance;
		AppRouter.instance = express.Router();

		return AppRouter.instance;
	}
}
