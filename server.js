const express = require('express');
const cors = require('cors');
require('dotenv').config();
const db = require('./db');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

// GET all records
app.get('/api/products', (req, res) => {
    db.all('SELECT * FROM products ORDER BY id DESC', [], (err, rows) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json({ data: rows });
    });
});

// GET single record by ID
app.get('/api/products/:id', (req, res) => {
    db.get('SELECT * FROM products WHERE id = ?', [req.params.id], (err, row) => {
        if (err) return res.status(500).json({ error: err.message });
        if (!row) return res.status(404).json({ message: 'Product not found' });
        res.json({ data: row });
    });
});

// POST create record
app.post('/api/products', (req, res) => {
    const { product_name, category, price, stock, description } = req.body;
    const sql = `INSERT INTO products (product_name, category, price, stock, description) VALUES (?, ?, ?, ?, ?)`;
    db.run(sql, [product_name, category, price, stock, description], function (err) {
        if (err) return res.status(500).json({ error: err.message });
        res.status(201).json({ id: this.lastID, message: 'Product created successfully' });
    });
});

// PUT update record
app.put('/api/products/:id', (req, res) => {
    const { product_name, category, price, stock, description } = req.body;
    const sql = `UPDATE products SET product_name = ?, category = ?, price = ?, stock = ?, description = ?, updated_at = CURRENT_TIMESTAMP WHERE id = ?`;
    db.run(sql, [product_name, category, price, stock, description, req.params.id], function (err) {
        if (err) return res.status(500).json({ error: err.message });
        if (this.changes === 0) return res.status(404).json({ message: 'Product not found' });
        res.json({ message: 'Product updated successfully' });
    });
});

// DELETE record
app.delete('/api/products/:id', (req, res) => {
    db.run('DELETE FROM products WHERE id = ?', [req.params.id], function (err) {
        if (err) return res.status(500).json({ error: err.message });
        if (this.changes === 0) return res.status(404).json({ message: 'Product not found' });
        res.json({ message: 'Product deleted successfully' });
    });
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});