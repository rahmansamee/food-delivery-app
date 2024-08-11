const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5050;

app.use(cors());
app.use(express.json());

// Database connection
mongoose.connect(process.env.ATLAS_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error(err));

app.get('/', (req, res) => {
  res.send('Welcome to the Food Delivery API');
});

app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
});
