const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");
const userRoutes = require("./routes/userRoutes");
const feedbackRoutes = require('./routes/feedbackRoutes');

const app = express();

app.use(cors());
app.use(express.json());
connectDB();
app.use("/api/users", userRoutes);
app.use('/api/feedback', feedbackRoutes);

app.listen(8080, '0.0.0.0', () => console.log("Server started on port 8080"));