import { Application, Request, Response} from 'express';
import request from 'request-promise-native';

const giphyKey = process.env.GIPHY_API_KEY;
const giphyUrl = `https://api.giphy.com/v1/gifs/trending?api_key=${giphyKey}`;

export default (app: Application) => app.get('/', (req: Request, res: Response) => {
  request(giphyUrl).then((result: Response) => res.send(result));
});
