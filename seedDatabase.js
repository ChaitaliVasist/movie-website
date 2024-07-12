const mongoose = require('mongoose');
const fetch = require('node-fetch');

const MONGODB_URI = 'your_mongodb_connection_string_here';  // Replace with your MongoDB connection string
const API_URL = 'http://5.254.6.120:5000/api/v1/nsup/NowShowing';

// Define a movie schema
const movieSchema = new mongoose.Schema({
    id: Number,
    title: String,
    poster_path: String,
    rating: Number
});

const Movie = mongoose.model('Movie', movieSchema);

// Connect to MongoDB and seed the database
mongoose.connect(MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(async () => {
        console.log('MongoDB connected');

        // Fetch data from API
        const response = await fetch(API_URL);
        const data = await response.json();

        // Insert data into MongoDB
        await Movie.insertMany(data);
        console.log('Data inserted');

        mongoose.disconnect();
    })
    .catch(err => console.log(err));
