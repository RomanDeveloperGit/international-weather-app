import express  from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

import router from './routes/index.js';

dotenv.config();

console.log(process.env.PORT, process.env.WEATHER_API_KEY);

const PORT = process.env.PORT ?? 3001;

const app = express();

app.use(cors());
app.use('/api', router);

app.listen(PORT, () => {
  console.log('Server started.');
});
