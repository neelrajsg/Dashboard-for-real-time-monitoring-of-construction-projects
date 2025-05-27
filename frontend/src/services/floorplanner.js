import axios from 'axios';

const API_URL = 'http://localhost:5001/api/floorplanner/create-project'; // Adjust to your backend URL

// Function to create a new project
export const createProject = async (projectData) => {
  try {
    const response = await axios.post(API_URL, { project: projectData });
    return response.data; // Return response data from the backend
  } catch (error) {
    console.error('Error creating project:', error);
    throw new Error('Error creating project');
  }
};
