const express = require('express');
const bodyParser = require('body-parser');
require('dotenv').config();

const app = express();

app.use(bodyParser.json());

app.use('/api', require('./routes/authRoutes'));

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('techtrek-app/build'));

  const path = require('path');
  app.get('*', (req, res) => {
    res.sendFile(
      path.resolve(__dirname, 'techtrek-app', 'build', 'index.html')
    );
  });
}

const PORT = process.env.PORT || 5000;
app.listen(PORT);
