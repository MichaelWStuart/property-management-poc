import express from 'express';
import renderApp from './render-app';

const app = express();

app.get('*', (req, res) => res.send(renderApp()));

app.listen(8080);
