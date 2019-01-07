import express from 'express';
import path from 'path';
import bodyParser from 'body-parser';
import cors from 'cors';
import meetupsRoutes from './routes/meetupsRoutes';
import usersRoutes from './routes/usersRoutes';

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(cors());

app.use('/api/v1/meetups', meetupsRoutes);
app.use('/api/v1/questions', questionsRoutes);
app.use('/api/v1/users', usersRoutes);

app.get('/', (req, res) => {
  res.status(200).json({
    message: 'welcome to the api',
  });
});

const port = process.env.PORT || 3000;

app.listen(port, () => `connected on port ${port}`);

export default app;
