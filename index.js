const express = require('express');
const orderRoutes = require('./routes/orderRoutes');

const app = express();

app.use(express.json());

app.use('/api', orderRoutes);

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});