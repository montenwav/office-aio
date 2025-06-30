const express = require('express');
const path = require('node:path');
const app = express();

const PORT = process.env.PORT || 3000;

app.use(express.static('public/images'));
app.use(express.static('public/css'));
app.use(express.static('public/js'));
app.use(express.static('public/html'));

app.get('/', (req, res) => {
 res.sendFile(path.resolve(__dirname, './public/html/index.html'));
});

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
