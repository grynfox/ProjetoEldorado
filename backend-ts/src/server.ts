import express from 'express';
import cors from 'cors';
import routes from './config/router';
//import { errors } from 'celebrate';

const app = express();

app.use(cors())
app.use(express.json());
app.use(routes);


//app.use(errors());

const port = 3001
app.listen(port);
console.log("[Eldorado Prime] Running on port " + port)
