import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import sequelize from './db.js';
import Usuario from './models/Usuario.js';
import Ticket from './models/Ticket.js';

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// Guardar ticket nuevo
app.post('/api/tickets', async (req, res) => {
  const { name, email, github, avatar_url, password } = req.body;
  try {
    const usuario = await Usuario.create({ name, email, github, avatar_url, password });
    const num_ticket = Math.floor(Math.random() * 90000) + 10000;
    const ticket = await Ticket.create({ num_ticket, user_id: usuario.id });
    res.json({ ticket, usuario });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Obtener todos los tickets
app.get('/api/tickets', async (req, res) => {
  try {
    const tickets = await Ticket.findAll({ include: Usuario });
    res.json(tickets);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

const PORT = process.env.PORT || 3000;

sequelize.authenticate()
  .then(() => {
    console.log('Conectado a PostgreSQL con Sequelize');
    app.listen(PORT, () => console.log(`Servidor en http://localhost:${PORT}`));
  })
  .catch(err => console.error('Error de conexión:', err));