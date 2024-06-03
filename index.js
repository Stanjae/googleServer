const express = require('express');
const cors = require('cors');
const searchGoogle = require('./fetchData');

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

app.get('/api/search', async (req, res) => {
    /* const allowed_domain = '*'  // Adjust with your domain or localhost port
    res.setHeader('Access-Control-Allow-Origin', allowed_domain);
    res.setHeader('Access-Control-Allow-Methods', 'GET');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type'); */
    const queri = req.query.q;


     if (!queri) {

        return res.status(400).json({ error: 'Query parameter is required' });
    }

    try {
        const response = await searchGoogle(queri);
        console.log(response);
        res.json(response);
        res.statusCode = 200;
        //res.setHeader('Content-Type', 'application/json');
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch data from Google' });
    }
    
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});



/* const { createServer } = require('node:http');
const { getJson } = require("serpapi")

const hostname = '127.0.0.1';
const port = 3000;

const server = createServer(async(req, res) => {
  res.statusCode = 200;
  //res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World');

  const url = new URL(req.url, `http://localhost:3000/`);
    const searchParams = url.searchParams;
    const query = searchParams.get('query');

    try {
        const response = await getJson({
            engine: "google",
            api_key: "b442dad55237a34907cf109aa0402206d10428a8f1e23fd5f4920d47f5854901", // Get your API_KEY first
            q: 'dog', 
            location: "Austin, Texas",
        });

        res.statusCode = 200;
        //res.setHeader('Content-Type', 'application/json');
        res.end(JSON.stringify(response));
        console.log(response);
    } catch (error) {
        res.statusCode = 500;
        res.setHeader('Content-Type', 'application/json');
        res.end(JSON.stringify({ error: error.message }));
    }
});

server.listen(port, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
}); */








/* 
const server = http.createServer(async (req, res) => {
    // read query parameters
    const url = new URL(req.url, `http://${req.headers.host}`);
    const searchParams = url.searchParams;
    const query = searchParams.get('query');

    try {
        const response = await getJson({
            engine: "google",
            api_key: "API_KEY", // Get your API_KEY first
            q: query, 
            location: "Austin, Texas",
        });

        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.end(JSON.stringify(response));
    } catch (error) {
        res.statusCode = 500;
        res.setHeader('Content-Type', 'application/json');
        res.end(JSON.stringify({ error: error.message }));
    }
}); */