require('dotenv').config();
const express = require('express');
const cors = require('cors');
const { sequelize } = require('./models');
const projectRoutes = require('./routes/projectRoutes');

const app = express();

app.use(cors());
app.use(express.json());
app.use('/api/projects', projectRoutes);

// Health check route
app.get('/health', (req, res) => {
  res.json({ status: 'ok' });
});

// Placeholder root route
app.get('/', (req, res) => {
  res.json({ message: 'Client Feedback Tool API is running.' });
});

const PORT = process.env.PORT || 5000;

sequelize.sync()
  .then(() => {
    console.log('Database synced');
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.error('Failed to sync database:', err);
  });
