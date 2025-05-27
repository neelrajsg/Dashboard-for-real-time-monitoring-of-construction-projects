// routes/floorplannerRoutes.js

const express = require('express');
const axios = require('axios');
const router = express.Router();

// Replace with your actual Floorplanner API key
const FLOORPLANNER_API_KEY = '7qrxgm70go8hs';

// Base URL for Floorplanner API
const FLOORPLANNER_BASE_URL = 'https://api.floorplanner.com/v2';

// ✅ Route to create a new project
router.post('/create', async (req, res) => {
  try {
    const { projectName } = req.body;

    const response = await axios.post(`${FLOORPLANNER_BASE_URL}/projects`, {
      name: projectName,
      description: 'Created via Construction Dashboard'
    }, {
      headers: {
        'Authorization': `Bearer ${FLOORPLANNER_API_KEY}`,
        'Content-Type': 'application/json'
      }
    });

    res.status(201).json({ message: "Project created successfully", project: response.data });
  } catch (error) {
    console.error('❌ Error creating Floorplanner project:', error.response?.data || error.message);
    res.status(500).json({
      message: 'Failed to create project',
      error: error.response?.data || error.message,
    });
  }
});

// ✅ Route to get all projects
router.get('/projects', async (req, res) => {
  try {
    const response = await axios.get(`${FLOORPLANNER_BASE_URL}/projects`, {
      headers: {
        'Authorization': `Bearer ${FLOORPLANNER_API_KEY}`,
        'Content-Type': 'application/json'
      }
    });

    res.status(200).json({ projects: response.data });
  } catch (error) {
    console.error('❌ Error fetching Floorplanner projects:', error.response?.data || error.message);
    res.status(500).json({
      message: 'Failed to fetch projects',
      error: error.response?.data || error.message,
    });
  }
});

module.exports = router;
