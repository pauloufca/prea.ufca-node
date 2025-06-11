import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import homeController from './controllers/homeController.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname  = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3000;

// View engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// Assets estáticos
app.use('/assets', express.static(path.join(__dirname, 'public')));

// Rotas
app.get('/', homeController.index);

// Inicia servidor
app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
