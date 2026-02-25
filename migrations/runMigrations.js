const User = require("../src/models/Users");

const runMigrations = async () => {
  console.log("🚀 Running migrations...");

  await User.syncIndexes();

  const count = await User.countDocuments();
  if (count === 0) {
    console.log("🌱 No users found in the database");
  }

  console.log("✅ Migrations complete");
};

module.exports = runMigrations;