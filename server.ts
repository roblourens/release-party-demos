import express from 'express';

const port = 3000;
const app = express();

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.listen(serverPort, () => {
    console.log(`Server listening at http://localhost:${port}`);
});
