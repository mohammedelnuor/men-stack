const express = require('express');

const router = express.Router();


// GET all workouts
router.get('/', (req, res) => {
    res.json({ message: 'get all workouts' });
});

// GET a single workout 
router.get('/:id', (req, res) => {
    res.json({ message: 'get a single workout' });
});

// POST a new workout
router.post('/', (req, res) => {
    res.json({ message: 'create a new workout' });
});

// DELETE a workout
router.delete('/:id', (req, res) => {
    res.json({ message: 'delete a workout' });
});

// UPDATE a workout
router.patch('/:id', (req, res) => {
    res.json({ message: 'update a workout' });
});

module.exports = router;