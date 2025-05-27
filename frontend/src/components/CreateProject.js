import React, { useState } from 'react';
import { createProject } from '../services/floorplannerApi'; // Import the API function

const CreateProject = () => {
  const [projectName, setProjectName] = useState('');
  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const projectData = {
      name: projectName,
      public: true,
      enable_vr_tour: true,
      creator_email: 'neelrajsg@gmail.com', // Use the creator email here
    };

    try {
      const result = await createProject(projectData); // Call the API function
      setResponse(result);
      setError(null); // Clear any previous errors
    } catch (err) {
      setError('Error creating project');
      setResponse(null);
    }
  };

  return (
    <div className="create-project">
      <h1>Create a New Floorplanner Project</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={projectName}
          onChange={(e) => setProjectName(e.target.value)}
          placeholder="Enter Project Name"
          required
        />
        <button type="submit">Create Project</button>
      </form>

      {response && <div>Project created: {JSON.stringify(response)}</div>}
      {error && <div style={{ color: 'red' }}>{error}</div>}
    </div>
  );
};

export default CreateProject;
