require("dotenv").config();
const express = require("express");
const cors = require("cors");
const path = require("path");
const connectDB = require("./config/db");
const authRoutes = require("./routes/authRoutes");


const app = express();

// Middleware to handle CORS

app.use(
    cors( {
        origin: process.env.CLIENT_URL || "*",
        methods: ["GET", "POST", "PUT", "DELETE"],
        allowedHeaders: ["Content-Type", "Authorization"],

    }
    ));

    app.use(express.json());
    app.use(express.urlencoded({ extended: false }));

    // Handle invalid JSON payloads gracefully
    app.use((err, req, res, next) => {
        if (err instanceof SyntaxError && err.status === 400 && 'body' in err) {
            return res.status(400).json({ message: 'Invalid JSON payload' });
        }
        next(err);
    });

     connectDB();
    
     app.use("/api/v1/auth",authRoutes)




    const PORT = process.env.PORT || 5000;
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
    });