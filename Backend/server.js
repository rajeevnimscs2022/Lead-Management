const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

// 🔹 In-memory array
let leads = [];

// ================= CRUD =================

// ➤ CREATE
app.post("/leads", (req, res) => {
    const newLead = {
        id: Date.now().toString(),
        ...req.body,
        date: new Date().toLocaleString()
    };

    leads.push(newLead);
    res.json({ message: "Lead Added" });
});

// ➤ READ
app.get("/leads", (req, res) => {
    res.json(leads);
});

// ➤ DELETE
app.delete("/leads/:id", (req, res) => {
    leads = leads.filter(l => l.id !== req.params.id);
    res.json({ message: "Deleted" });
});

// ➤ UPDATE
app.put("/leads/:id", (req, res) => {
    leads = leads.map(l => {
        if (l.id === req.params.id) {
            return { ...l, ...req.body };
        }
        return l;
    });

    res.json({ message: "Updated" });
});

// Start server
app.listen(3000, () => {
    console.log("Server running on port 3000");
});