import React, { useEffect, useState } from "react";
import {
    fetchUsers,
    createUser,
    updateUser,
    deleteUser
} from "../services/api";
import {
    Container,
    Table,
    Button,
    Form,
    Modal,
    Alert,
    Row,
    Col,
    Card
} from "react-bootstrap";

const Users = () => {
    const [users, setUsers] = useState([]);
    const [show, setShow] = useState(false);
    const [showProfile, setShowProfile] = useState(false);
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
        role: "user",
        dob: "",
        gender: "male",
        nationality: "",
        designation: "",
        department: "",
        contact_number: "",
        project_assigned: ""
    });
    const [editId, setEditId] = useState(null);
    const [error, setError] = useState("");
    const [selectedUser, setSelectedUser] = useState(null);

    const [alertMessage, setAlertMessage] = useState("");
    const [alertVariant, setAlertVariant] = useState("success");

    const showAlert = (message, variant = "success") => {
        setAlertMessage(message);
        setAlertVariant(variant);
        setTimeout(() => setAlertMessage(""), 4000);
    };

    useEffect(() => {
        loadUsers();
    }, []);

    const loadUsers = async () => {
        try {
            const data = await fetchUsers();
            setUsers(data);
            showAlert("✅ Users loaded successfully!");
        } catch (error) {
            showAlert("❌ Failed to load users.", "danger");
            setError("Failed to load users.");
        }
    };

    const handleShow = (user = null) => {
        setError("");
        if (user) {
            setEditId(user.id);
            setFormData({
                name: user.name,
                email: user.email,
                password: "",
                role: user.role,
                dob: user.dob?.split("T")[0] || "",
                gender: user.gender || "male",
                nationality: user.nationality || "",
                designation: user.designation || "",
                department: user.department || "",
                contact_number: user.contact_number || "",
                project_assigned: user.project_assigned || ""
            });
        } else {
            setEditId(null);
            setFormData({
                name: "",
                email: "",
                password: "",
                role: "user",
                dob: "",
                gender: "male",
                nationality: "",
                designation: "",
                department: "",
                contact_number: "",
                project_assigned: ""
            });
        }
        setShow(true);
    };

    const handleClose = () => {
        setShow(false);
        setEditId(null);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            if (!editId && !formData.password) {
                setError("Password is required for new users.");
                return;
            }

            const dataToSubmit = { ...formData };

            if (editId) {
                await updateUser(editId, dataToSubmit);
                showAlert("✅ User updated successfully!");
            } else {
                await createUser(dataToSubmit);
                showAlert("✅ User created successfully!");
            }

            handleClose();
            loadUsers();
        } catch (error) {
            console.error("❌ Create/Update User Error:", error.response?.data || error.message);
            setError(error.response?.data?.error || "Failed to save user. Check your inputs.");
            showAlert("❌ Failed to save user.", "danger");
        }
    };

    const handleDelete = async (id) => {
        if (window.confirm("Are you sure you want to delete this user?")) {
            try {
                await deleteUser(id);
                loadUsers();
                showAlert("🗑️ User deleted successfully!");
            } catch {
                showAlert("❌ Failed to delete user.", "danger");
            }
        }
    };

    const handleViewProfile = (user) => {
        setSelectedUser(user);
        setShowProfile(true);
        showAlert("👤 Viewing user profile.");
    };

    const handleCloseProfile = () => {
        setShowProfile(false);
        setSelectedUser(null);
    };

    return (
        <Container className="mt-4 ml-0">
            <h1>Users Management</h1>

            {alertMessage && (
                <Alert variant={alertVariant} dismissible onClose={() => setAlertMessage("")}>
                    {alertMessage}
                </Alert>
            )}

            <Button variant="primary" onClick={() => handleShow()}>Add User</Button>
            <Table striped bordered hover className="mt-3">
                <thead>
                    <tr>
                        <th>EmpID</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Role</th>
                        <th>Designation</th>
                        <th>Department</th>
                        <th>Contact</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user) => (
                        <tr key={user.id}>
                            <td>{user.empid}</td>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                            <td>{user.role}</td>
                            <td>{user.designation}</td>
                            <td>{user.department}</td>
                            <td>{user.contact_number}</td>
                            <td>
                                <Button variant="warning" className="me-2" onClick={() => handleShow(user)}>Edit</Button>
                                <Button variant="info" className="me-2" onClick={() => handleViewProfile(user)}>View</Button>
                                <Button variant="danger" onClick={() => handleDelete(user.id)}>Delete</Button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>

            {/* Add/Edit Modal */}
            <Modal show={show} onHide={handleClose} size="lg">
                <Modal.Header closeButton>
                    <Modal.Title>{editId ? "Edit User" : "Add User"}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {error && <Alert variant="danger">{error}</Alert>}
                    <Form onSubmit={handleSubmit}>
                        <Row>
                            <Col md={6}>
                                <Form.Group className="mb-3">
                                    <Form.Label>Name</Form.Label>
                                    <Form.Control type="text" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} required />
                                </Form.Group>
                            </Col>
                        </Row>
                        <Row>
                            <Col md={6}>
                                <Form.Group className="mb-3">
                                    <Form.Label>Email</Form.Label>
                                    <Form.Control type="email" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} required />
                                </Form.Group>
                            </Col>
                            <Col md={6}>
                                <Form.Group className="mb-3">
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control type="password" value={formData.password} onChange={(e) => setFormData({ ...formData, password: e.target.value })} required={!editId} />
                                </Form.Group>
                            </Col>
                        </Row>
                        <Row>
                            <Col md={6}>
                                <Form.Group className="mb-3">
                                    <Form.Label>DOB</Form.Label>
                                    <Form.Control type="date" value={formData.dob} onChange={(e) => setFormData({ ...formData, dob: e.target.value })} />
                                </Form.Group>
                            </Col>
                            <Col md={6}>
                                <Form.Group className="mb-3">
                                    <Form.Label>Gender</Form.Label>
                                    <Form.Select value={formData.gender} onChange={(e) => setFormData({ ...formData, gender: e.target.value })}>
                                        <option value="male">Male</option>
                                        <option value="female">Female</option>
                                        <option value="other">Other</option>
                                    </Form.Select>
                                </Form.Group>
                            </Col>
                        </Row>
                        <Row>
                            <Col md={6}>
                                <Form.Group className="mb-3">
                                    <Form.Label>Nationality</Form.Label>
                                    <Form.Control type="text" value={formData.nationality} onChange={(e) => setFormData({ ...formData, nationality: e.target.value })} />
                                </Form.Group>
                            </Col>
                            <Col md={6}>
                                <Form.Group className="mb-3">
                                    <Form.Label>Contact Number</Form.Label>
                                    <Form.Control type="text" value={formData.contact_number} onChange={(e) => setFormData({ ...formData, contact_number: e.target.value })} />
                                </Form.Group>
                            </Col>
                        </Row>
                        <Row>
                            <Col md={6}>
                                <Form.Group className="mb-3">
                                    <Form.Label>Designation</Form.Label>
                                    <Form.Control type="text" value={formData.designation} onChange={(e) => setFormData({ ...formData, designation: e.target.value })} />
                                </Form.Group>
                            </Col>
                            <Col md={6}>
                                <Form.Group className="mb-3">
                                    <Form.Label>Department</Form.Label>
                                    <Form.Control type="text" value={formData.department} onChange={(e) => setFormData({ ...formData, department: e.target.value })} />
                                </Form.Group>
                            </Col>
                        </Row>
                        <Form.Group className="mb-3">
                            <Form.Label>Project Assigned</Form.Label>
                            <Form.Control type="text" value={formData.project_assigned} onChange={(e) => setFormData({ ...formData, project_assigned: e.target.value })} />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Role</Form.Label>
                            <Form.Select value={formData.role} onChange={(e) => setFormData({ ...formData, role: e.target.value })}>
                                <option value="user">User</option>
                                <option value="admin">Admin</option>
                            </Form.Select>
                        </Form.Group>
                        <Button variant="primary" type="submit">{editId ? "Update" : "Create"}</Button>
                    </Form>
                </Modal.Body>
            </Modal>

            {/* View Profile Modal */}
            <Modal show={showProfile} onHide={handleCloseProfile}>
                <Modal.Header closeButton>
                    <Modal.Title>User Profile</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {selectedUser && (
                        <Card>
                            <Card.Body>
                                <Card.Title>{selectedUser.name}</Card.Title>
                                <Card.Text><strong>Email:</strong> {selectedUser.email}</Card.Text>
                                <Card.Text><strong>Role:</strong> {selectedUser.role}</Card.Text>
                                <Card.Text><strong>DOB:</strong> {selectedUser.dob?.split("T")[0]}</Card.Text>
                                <Card.Text><strong>Gender:</strong> {selectedUser.gender}</Card.Text>
                                <Card.Text><strong>Nationality:</strong> {selectedUser.nationality}</Card.Text>
                                <Card.Text><strong>Contact:</strong> {selectedUser.contact_number}</Card.Text>
                                <Card.Text><strong>Designation:</strong> {selectedUser.designation}</Card.Text>
                                <Card.Text><strong>Department:</strong> {selectedUser.department}</Card.Text>
                                <Card.Text><strong>Project Assigned:</strong> {selectedUser.project_assigned}</Card.Text>
                                <Card.Text><strong>EmpID:</strong> {selectedUser.empid}</Card.Text>
                            </Card.Body>
                        </Card>
                    )}
                </Modal.Body>
            </Modal>
        </Container>
    );
};

export default Users;
