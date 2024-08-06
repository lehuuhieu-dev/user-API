import express from 'express';

import { route } from './routes/index.js';

const app = express();

const PORT = process.env.PORT || 3001;

// for parsing application/json
app.use(express.json());
// for parsing application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

route(app);

app.listen(PORT, () => console.log(`App listening on port ${PORT}`));
