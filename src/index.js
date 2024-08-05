import express from 'express';

import { route } from './routes/index.js';

const app = express();

const PORT = process.env.PORT;

route(app);

app.listen(PORT, () => console.log(`App listening on port ${PORT}`));
