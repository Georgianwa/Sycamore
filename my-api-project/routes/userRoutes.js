const express = require("express");
const router = express.Router();

router.get("/users", (reg, res) => {
    res.json([{ id: 1201, name: "Georgia" }, { id: 1202, name: "Eddie"}, { id: 1203, name: "Kofoworola" }]);
});

module.exports =router;
+
router.post("/users", (req, res) => {
    const { name, email } = req.body;
    const newUser = { id: Date.now(), name, email };
    res.status(201).json({message: "User created", user: newUser});
});

router.get("/users/:id", (req, res) => {
    const userId = req.params.id;
    res.json({ id: userId, name: "Georgia", email: "georgia.u.nwa@gmail.com"});
});

router.put("/users/:id", (req, res) => {
    const userId = req.params.id;
    const { name, email } = req.body;
    res.json({ message: `User ${userId} updated`, updatedUser" })
})
