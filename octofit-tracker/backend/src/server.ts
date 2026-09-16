import express from 'express';

const app = express();
const PORT = Number(process.env.PORT) || 8000;

const CODESPACE_NAME = process.env.CODESPACE_NAME;

const API_BASE_URL = CODESPACE_NAME
  ? `https://${CODESPACE_NAME}-8000.app.github.dev`
  : `http://localhost:${PORT}`;

app.use(express.json());

app.get('/api/health', (_req, res) => {
  res.json({
    status: 'ok',
    apiBaseUrl: API_BASE_URL
  });
});

app.get('/api/users', (_req, res) => {
  res.json([
    { name: 'Ana', email: 'ana@example.com' },
    { name: 'Juan', email: 'juan@example.com' }
  ]);
});

app.get('/api/activities', (_req, res) => {
  res.json([
    { activity: 'Running', duration: 30 },
    { activity: 'Cycling', duration: 45 }
  ]);
});

app.listen(PORT, '0.0.0.0', () => {
  console.log(`OctoFit API listening on port ${PORT}`);
  console.log(`API URL: ${API_BASE_URL}`);
});
