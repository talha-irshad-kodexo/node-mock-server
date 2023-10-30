const express = require("express");
const bodyParser = require("body-parser");

const app = express();

// Middleware to parse JSON payloads
app.use(bodyParser.json());

app.get("/", (_, res) => {
  res.send("<h1>Server is running</h1>");
});
// Mock login route
app.post("/login", (req, res) => {
  const { email, password } = req.body;

  // In a real-world scenario, you'd verify email & password against a database.
  // For now, let's just mock the login response.
  if (email === "test@gmail.com" && password === "test123") {
    res.json({
      success: true,
      message: "Login successful",
      token: "mockToken12345",
      user: {
        email: "test@gmail.com",
        role: "user",
      },
    });
  } else {
    res.status(401).json({
      success: false,
      message: "Invalid email or password",
    });
  }
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
