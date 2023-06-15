require('express-async-errors');
require('dotenv/config');

const AppError = require('./utils/AppError');

const cors = require('cors');
const express = require('express');
const routes = require('./routes');
const app = express();

app.use(express.json());
app.use(cors());
app.use(routes);
app.use((error, req, res, next) => {
  const isClientError = error instanceof AppError;

  if(isClientError) {
    return res.status(error.statusCode).json({ message: error.message });
  }

  console.log(error.message);
  
  return res.status(500).json({ message: 'Internal Server Error' });
})

const PORT =  process.env.PORT || 3000;


app.listen(PORT,() => console.log(`[server] listening on ${PORT}`, `http://localhost:${PORT}`));