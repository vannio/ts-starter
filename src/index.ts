import dotenv from 'dotenv';
import express, { Request, Response} from 'express';
import request from 'request-promise-native';

const app = express();
dotenv.config({});

const giphyKey = process.env.GIPHY_API_KEY;
const giphyUrl = `https://api.giphy.com/v1/gifs/trending?api_key=${giphyKey}`;

app.get('/', (req: Request, res: Response) => {
  request(giphyUrl).then((result: Response) => res.send(result));
});

app.listen(3000, () => {
  console.log("Hi, I'm hogging port 3000");
});

export default app;
