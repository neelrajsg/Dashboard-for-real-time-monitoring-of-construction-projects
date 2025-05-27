import axios from 'axios';

const API_BASE_URL = "http://localhost:5001/api"; // ✅ Match your existing base URL

export const getTodos = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/todos`);
    return response.data;
  } catch (error) {
    console.error("❌ Error fetching todos:", error.response?.data || error.message);
    return [];
  }
};

export const createTodo = async (data) => {
  try {
    console.log("📤 Creating Todo with Data:", data);
    const response = await axios.post(`${API_BASE_URL}/todos`, data, {
      headers: { "Content-Type": "application/json" }, // ✅ Ensure correct headers
    });
    console.log("✅ Todo Created Successfully:", response.data);
    return response.data;
  } catch (error) {
    console.error("❌ Error creating todo:", error.response?.data || error.message);
    return null;
  }
};

export const updateTodoStatus = async (id, status) => {
  try {
    console.log(`✏️ Updating Todo ID: ${id} with Status: ${status}`);
    const response = await axios.put(`${API_BASE_URL}/todos/${id}`, { status }, {
      headers: { "Content-Type": "application/json" },
    });
    console.log("✅ Todo Status Updated Successfully:", response.data);
    return response.data;
  } catch (error) {
    console.error("❌ Error updating todo status:", error.response?.data || error.message);
    return null;
  }
};

export const deleteTodo = async (id) => {
  try {
    console.log(`🗑️ Deleting Todo ID: ${id}`);
    const response = await axios.delete(`${API_BASE_URL}/todos/${id}`);
    console.log("✅ Todo Deleted Successfully");
    return response.data;
  } catch (error) {
    console.error("❌ Error deleting todo:", error.response?.data || error.message);
    return null;
  }
};
