const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors());
app.use(express.json());

app.get('/health', (_, res) => res.json({ status: 'ok' }));

// Mocked weather endpoint
app.get('/weather', (req, res) => {
  const city = (req.query.city || 'Unknown').toLowerCase();
  const sample = {
    accra: { temp: 30, units: 'C', desc: 'Sunny' },
    london: { temp: 12, units: 'C', desc: 'Cloudy' },
    nyc: { temp: 18, units: 'C', desc: 'Partly Cloudy' }
  };
  res.json({ city, data: sample[city] || { temp: 25, units: 'C', desc: 'Clear' } });
});

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Weather backend listening on ${port}`));
