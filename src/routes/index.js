import { API_PREFIX } from '../constants/api.constant.js';
import { userRouter } from './user.route.js';

function route(app) {
    app.get('/', (req, res) => {
        res.json({ status: 'running' });
    });

    app.use(`${API_PREFIX}/users`, userRouter);
}

export { route };
