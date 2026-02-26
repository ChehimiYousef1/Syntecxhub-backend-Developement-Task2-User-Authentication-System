require("dotenv").config(); // MUST be first line

const express = require("express");
const cors = require("cors"); // ✅ ADD THIS
const swaggerUi = require("swagger-ui-express");
const swaggerDocs = require("./swagger");
const authRoutes = require("./routes/auth.routes");
const connectDB = require("../config/db");
const runMigrations = require("../migrations/runMigrations");

const app = express();

// ✅ ADD THIS RIGHT AFTER app = express()
app.use(cors()); 

app.use(express.json());

// Home route
app.get("/", (req, res) => {
  res.send("Welcome from developer Youssef El Chehimi to User Authentication API! Visit /api-docs for Swagger UI.");
});

// Swagger documentation
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs));

// Auth routes
app.use("/api/auth", authRoutes);

const PORT = process.env.PORT || 3000;

const startServer = async () => {
  try {
    console.log("MONGO_URI:", process.env.MONGO_URI ? "✅ loaded" : "❌ undefined");

    await connectDB();
    await runMigrations();

    app.listen(PORT, () => {
      console.log(`🚀 Server running on http://localhost:${PORT}`);
      console.log(`📚 Swagger docs at http://localhost:${PORT}/api-docs`);
    });

  } catch (err) {
    console.error("❌ Startup error:", err);
    process.exit(1);
  }
};

startServer();