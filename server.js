const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');


const authRoutes = require('./routes/auth'); 
const app = express();
const PORT = 3000;

app.use(bodyParser.json());
//Habilitando o cors para o funcionamento.
app.use(cors());


app.use('/api/auth', authRoutes);

// iniciação do serve.
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
