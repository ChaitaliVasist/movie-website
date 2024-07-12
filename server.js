const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const PORT = 5000;  // You can choose any available port
const MONGODB_URI = 'your_mongodb_connection_string_here';  // Replace with your MongoDB connection string

// Middleware
app.use(cors());
app.use(express.json());

// Connect to MongoDB
mongoose.connect(MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.log(err));

// Define a movie schema
const movieSchema = new mongoose.Schema({
    title: String,
    poster_path: String,
    rating: Number
});

const Movie = mongoose.model('Movie', movieSchema);

// Define a route to fetch movies
app.get('/api/movies', async (req, res) => {
    try {
        const movies = await Movie.find().limit(5);  // Limit to first 5 movies
        res.json(movies);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
