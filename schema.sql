CREATE TABLE IF NOT EXISTS products (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    product_name TEXT NOT NULL,
    category TEXT NOT NULL,
    price REAL NOT NULL,
    stock INTEGER NOT NULL,
    description TEXT,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    updated_at DATETIME DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO products (product_name, category, price, stock, description) VALUES
('Dell XPS 13', 'Laptops', 1200.00, 15, '13-inch Ultra-portable Laptop'),
('MacBook Pro 14', 'Laptops', 1999.99, 10, 'M3 Pro Chip 18GB RAM'),
('Logitech MX Master 3S', 'Accessories', 99.99, 45, 'Wireless Ergonomic Mouse'),
('Keychron K2', 'Accessories', 79.50, 30, 'Mechanical Wireless Keyboard'),
('Samsung Odyssey G7', 'Monitors', 699.00, 8, '32-inch Curved Gaming Monitor'),
('Sony WH-1000XM5', 'Audio', 399.99, 25, 'Noise Canceling Headphones'),
('iPad Air 5', 'Tablets', 599.00, 20, '10.9-inch M1 Chip Tablet'),
('Anker PowerBank 20k', 'Accessories', 49.99, 50, 'Fast Charging Battery Pack'),
('LG C3 55 OLED', 'Monitors', 1399.00, 5, '4K Smart TV & Gaming Display'),
('Raspberry Pi 5', 'Components', 80.00, 100, '8GB Single Board Computer');