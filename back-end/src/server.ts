import express from 'express';
import cors from 'cors';
import routes from './routes';
import { errors } from 'celebrate';

const app = express();

app.use(cors())
app.use(express.json());
app.use(routes);


app.use(errors());

const port = 3333
app.listen(port);
console.log("Backend running on port " + port)
