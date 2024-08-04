import express from 'express';

import { route } from './routes/index.js';

const app = express();

const PORT = 3000;

route(app);

app.listen(PORT, () => console.log(`App listening on port ${PORT}`));
