const express = require('express');
const app = express();
const port = 3000;

app.use(express.static('public'));
app.use(express.json());

app.post('/login', (req, res) => {
    const { username, password } = req.body;
    // Simple validation (replace with real authentication)
    if (username === 'user' && password === 'pass') {
        res.json({ success: true, message: 'Login successful' });
    } else {
        res.json({ success: false, message: 'Invalid credentials' });
    }
});

app.listen(port, () => console.log(`Server running on http://localhost:${port}`));