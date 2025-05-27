import axios from "axios";

export const createFloorplannerProject = async (projectName) => {
  try {
    const response = await axios.post("/api/floorplanner/create", { projectName });
    return response.data;
  } catch (error) {
    console.error("Error creating Floorplanner project:", error);
    return null;
  }
};

export const getFloorplannerProjects = async () => {
  try {
    const response = await axios.get("/api/floorplanner/projects");
    return response.data.projects;
  } catch (error) {
    console.error("Error fetching Floorplanner projects:", error);
    return [];
  }
};
