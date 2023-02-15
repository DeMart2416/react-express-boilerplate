const express = require("express");

const PORT = process.env.PORT || 5000;

const app = express();

app.get("/api", (req, res) => {
    res.json({ message: "Hello from server!" });
});

if (process.env.NODE_ENV === "production") {
    // Have Node serve the files for our built React app
    app.use(express.static("client/build"));

    // All other GET requests not handled before will return our React app
    const path = require("path");

    app.get("*", (req, res) => {
        res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
    });
}

app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
});
