const express = require('express');
const app = express();

app.use(express.json());

// homepage route
app.get('/', (req, res) => {
    res.send('Backend is running successfully!');
});

// example routes
const userRoutes = require('./routes/userRoutes');
app.use('/users', userRoutes);

app.listen(3000, () => {
    console.log('Server running on http://localhost:3000');
});