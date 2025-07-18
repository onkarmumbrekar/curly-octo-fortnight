const express = require('express');
const router = express.Router();
const { Project } = require('../models');

// Create a new project
router.post('/', async (req, res) => {
  try {
    const { name, description, ownerId } = req.body;
    const project = await Project.create({ name, description, ownerId });
    res.status(201).json(project);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Get all projects
router.get('/', async (req, res) => {
  try {
    const projects = await Project.findAll();
    res.json(projects);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Get a single project by ID
router.get('/:id', async (req, res) => {
  try {
    const project = await Project.findByPk(req.params.id);
    if (!project) return res.status(404).json({ error: 'Project not found' });
    res.json(project);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Update a project by ID
router.put('/:id', async (req, res) => {
  try {
    const { name, description } = req.body;
    const project = await Project.findByPk(req.params.id);
    if (!project) return res.status(404).json({ error: 'Project not found' });
    project.name = name ?? project.name;
    project.description = description ?? project.description;
    await project.save();
    res.json(project);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Delete a project by ID
router.delete('/:id', async (req, res) => {
  try {
    const project = await Project.findByPk(req.params.id);
    if (!project) return res.status(404).json({ error: 'Project not found' });
    await project.destroy();
    res.json({ message: 'Project deleted' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router; 