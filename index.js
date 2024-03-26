const express = require('express');
const si = require('systeminformation');
const app = express();

app.get('/', (req, res) => {
  res.send('Hello World!');
  si.cpu()
    .then(data => console.log(data))
    .catch(error => console.error(error));
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});