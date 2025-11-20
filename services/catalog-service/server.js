const express = require('express');
const bodyParser = require('body-parser');
const routes = require('./api/routes');

const app = express();
app.use(bodyParser.json());

// health
app.get('/health', (_, res) => res.json({ status: 'ok' }));

// routes
app.use('/', routes);

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log(`catalog-service listening on ${PORT}`));
