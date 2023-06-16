import express from 'express';

/**
 * Starts the server on the specified port.
 * @param port The port number to listen on.
 */
function startServer(port: number) {
    const app = express();

    app.get('/', (req, res) => {
        res.send('Hello World!');
    });

    app.listen(port, () => {
        console.log(`Server listening at http://localhost:${port}`);
    });
}

startServer(3000);
