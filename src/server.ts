import express from 'express';

import apiRoutes from './routes/apiRoute';
import authRoutes from './routes/authRoute';
import * as db from './db';

require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 7700;
const DEVELOPMENT_DB = process.env.DEVELOPMENT_DB as string;

app.use('/api', apiRoutes);
app.use('/auth', authRoutes);

db.connect(DEVELOPMENT_DB)
  .then(() => {
    console.log('Connected to MongoDB');

    app.listen(PORT, () => {
      console.log(`Server started at http://localhost:${PORT}`);
    });
  })
  .catch((err: Error) => {
    console.error(err);
  });
