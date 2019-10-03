const express = require('express');
const app = express();
const cors = require('cors');
const ctrl = require('./Controllers/controllers')

app.use(cors())
app.use(express.json());

app.post('/api/users', ctrl.create);
app.get('/api/users', ctrl.create);
app.put('/api/users', ctrl.create);
app.delete('/api/users', ctrl.create);


app.listen(7777, () => console.log('The server is running on port 7777.'))