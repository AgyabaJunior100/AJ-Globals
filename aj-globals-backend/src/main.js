const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const { PrismaClient } = require('@prisma/client');
const app = express();
const prisma = new PrismaClient();

app.use(express.json());
app.use(cors());
app.use(helmet());

app.get('/', (req, res) => {
  res.send('AJ Globals Backend API');
});

// Example: Get all products
app.get('/products', async (req, res) => {
  const products = await prisma.product.findMany();
  res.json(products);
});

// Add more endpoints as needed...

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
