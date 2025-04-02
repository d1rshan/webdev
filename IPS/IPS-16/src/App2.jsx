import React, {
  useState,
  useReducer,
  useEffect,
  useContext,
  createContext,
} from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  Navigate,
  useParams,
  useNavigate,
} from "react-router-dom";

import "./index.css";

// Context for theme management
const ThemeContext = createContext();

// Task reducer function for task management
const taskReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TASK":
      return [
        ...state,
        {
          id: Date.now(),
          title: action.payload.title,
          description: action.payload.description,
          completed: false,
          priority: action.payload.priority,
          dueDate: action.payload.dueDate,
        },
      ];
    case "REMOVE_TASK":
      return state.filter((task) => task.id !== action.payload);
    case "COMPLETE_TASK":
      return state.map((task) =>
        task.id === action.payload
          ? { ...task, completed: !task.completed }
          : task
      );
    default:
      return state;
  }
};

// Authentication Context
const AuthContext = createContext();

function AuthProvider({ children }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);

  const login = (username, password) => {
    // In a real application, this would validate against a backend
    if (username === "admin" && password === "password") {
      setIsAuthenticated(true);
      setCurrentUser({
        id: 1,
        username: username,
        name: "Admin User",
        role: "admin",
        email: "admin@taskflow.com",
      });
      return true;
    }
    return false;
  };

  const logout = () => {
    setIsAuthenticated(false);
    setCurrentUser(null);
  };

  return (
    <AuthContext.Provider
      value={{ isAuthenticated, currentUser, login, logout }}
    >
      {children}
    </AuthContext.Provider>
  );
}

// Protected Route Component
function ProtectedRoute({ children }) {
  const { isAuthenticated } = useContext(AuthContext);
  return isAuthenticated ? children : <Navigate to="/login" />;
}

// Login Form Component (Class Component)
class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      error: "",
    };
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { username, password } = this.state;
    const { login } = this.context;

    if (login(username, password)) {
      this.props.navigate("/dashboard");
    } else {
      this.setState({ error: "Invalid credentials. Try admin/password." });
    }
  };

  render() {
    return (
      <div className="login-container">
        <h2>Login to TaskFlow</h2>
        <form onSubmit={this.handleSubmit}>
          {this.state.error && (
            <div className="error-message">{this.state.error}</div>
          )}
          <div className="form-group">
            <label>Username:</label>
            <input
              type="text"
              name="username"
              value={this.state.username}
              onChange={this.handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Password:</label>
            <input
              type="password"
              name="password"
              value={this.state.password}
              onChange={this.handleChange}
              required
            />
          </div>
          <button type="submit" className="btn-primary">
            Login
          </button>
        </form>
      </div>
    );
  }
}

// Set context for class component
LoginForm.contextType = AuthContext;

// Wrapper for LoginForm to use react-router hooks
function LoginFormWithRouter() {
  const navigate = useNavigate();
  return <LoginForm navigate={navigate} />;
}

// Task Form Component (Functional Component)
function TaskForm({ dispatch }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [priority, setPriority] = useState("medium");
  const [dueDate, setDueDate] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim()) return;

    dispatch({
      type: "ADD_TASK",
      payload: { title, description, priority, dueDate },
    });

    // Reset form
    setTitle("");
    setDescription("");
    setPriority("medium");
    setDueDate("");
  };

  return (
    <form onSubmit={handleSubmit} className="task-form">
      <h3>Add New Task</h3>
      <div className="form-group">
        <label>Title:</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
      </div>
      <div className="form-group">
        <label>Description:</label>
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </div>
      <div className="form-group">
        <label>Priority:</label>
        <select value={priority} onChange={(e) => setPriority(e.target.value)}>
          <option value="low">Low</option>
          <option value="medium">Medium</option>
          <option value="high">High</option>
        </select>
      </div>
      <div className="form-group">
        <label>Due Date:</label>
        <input
          type="date"
          value={dueDate}
          onChange={(e) => setDueDate(e.target.value)}
        />
      </div>
      <button type="submit" className="btn-primary">
        Add Task
      </button>
    </form>
  );
}

// Task List Component
function TaskList({ tasks, dispatch }) {
  return (
    <div className="task-list">
      <h3>Tasks</h3>
      {tasks.length === 0 ? (
        <p>No tasks yet. Add a task to get started!</p>
      ) : (
        <ul>
          {tasks.map((task) => (
            <li
              key={task.id}
              className={`task-item ${
                task.completed ? "completed" : ""
              } priority-${task.priority}`}
            >
              <div className="task-header">
                <h4>{task.title}</h4>
                <span className="task-priority">{task.priority}</span>
              </div>
              <p>{task.description}</p>
              {task.dueDate && <p className="due-date">Due: {task.dueDate}</p>}
              <div className="task-actions">
                <button
                  className="btn-toggle"
                  onClick={() =>
                    dispatch({ type: "COMPLETE_TASK", payload: task.id })
                  }
                >
                  {task.completed ? "Mark Incomplete" : "Mark Complete"}
                </button>
                <button
                  className="btn-delete"
                  onClick={() =>
                    dispatch({ type: "REMOVE_TASK", payload: task.id })
                  }
                >
                  Delete
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

// Dashboard Component
function Dashboard() {
  const [tasks, dispatch] = useReducer(taskReducer, []);
  const { currentUser } = useContext(AuthContext);

  return (
    <div className="dashboard">
      <h2>Welcome, {currentUser?.name || "User"}!</h2>
      <div className="dashboard-grid">
        <TaskForm dispatch={dispatch} />
        <TaskList tasks={tasks} dispatch={dispatch} />
      </div>
    </div>
  );
}

// Reports Component with data fetching
function Reports() {
  const [reports, setReports] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchReports = async () => {
      try {
        // In a real application, replace with your API endpoint
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/todos?_limit=5"
        );
        if (!response.ok) {
          throw new Error("Failed to fetch reports");
        }
        const data = await response.json();
        setReports(data);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchReports();
  }, []);

  if (loading) return <div className="loading">Loading reports...</div>;
  if (error) return <div className="error">Error: {error}</div>;

  return (
    <div className="reports">
      <h2>Task Reports</h2>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Completed</th>
          </tr>
        </thead>
        <tbody>
          {reports.map((report) => (
            <tr key={report.id}>
              <td>{report.id}</td>
              <td>{report.title}</td>
              <td>{report.completed ? "Yes" : "No"}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

// User Profile Component using useParams
function UserProfile() {
  const { userId } = useParams();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate fetching user data
    setTimeout(() => {
      setUser({
        id: userId,
        name: `User ${userId}`,
        email: `user${userId}@example.com`,
        role: parseInt(userId) === 1 ? "Admin" : "User",
        tasksCompleted: Math.floor(Math.random() * 50),
      });
      setLoading(false);
    }, 1000);
  }, [userId]);

  if (loading) return <div className="loading">Loading user profile...</div>;

  return (
    <div className="user-profile">
      <h2>User Profile</h2>
      <div className="profile-card">
        <div className="profile-header">
          <div className="profile-avatar">{user.name.charAt(0)}</div>
          <h3>{user.name}</h3>
        </div>
        <div className="profile-details">
          <p>
            <strong>Email:</strong> {user.email}
          </p>
          <p>
            <strong>Role:</strong> {user.role}
          </p>
          <p>
            <strong>Tasks Completed:</strong> {user.tasksCompleted}
          </p>
        </div>
      </div>
    </div>
  );
}

// Navigation Component
function Navigation() {
  const { isAuthenticated, logout } = useContext(AuthContext);
  const { theme } = useContext(ThemeContext);

  return (
    <nav className={`navbar ${theme}`}>
      <div className="nav-brand">
        <Link to="/">TaskFlow</Link>
      </div>
      <ul className="nav-links">
        <li>
          <Link to="/">Home</Link>
        </li>
        {isAuthenticated ? (
          <>
            <li>
              <Link to="/dashboard">Dashboard</Link>
            </li>
            <li>
              <Link to="/reports">Reports</Link>
            </li>
            <li>
              <Link to="/profile/1">Profile</Link>
            </li>
            <li>
              <button className="btn-logout" onClick={logout}>
                Logout
              </button>
            </li>
          </>
        ) : (
          <li>
            <Link to="/login">Login</Link>
          </li>
        )}
      </ul>
    </nav>
  );
}

// Home Component
function Home() {
  return (
    <div className="home-container">
      <div className="hero">
        <h1>Welcome to TaskFlow</h1>
        <p>A streamlined task management system for teams</p>
        <Link to="/login" className="btn-primary">
          Get Started
        </Link>
      </div>
      <div className="features">
        <div className="feature">
          <h3>Task Management</h3>
          <p>Create, organize, and track your tasks efficiently</p>
        </div>
        <div className="feature">
          <h3>Team Collaboration</h3>
          <p>Work together with your team seamlessly</p>
        </div>
        <div className="feature">
          <h3>Progress Reports</h3>
          <p>Get insights on your team's productivity</p>
        </div>
      </div>
    </div>
  );
}

// Theme Toggle Component
function ThemeToggle() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <button onClick={toggleTheme} className={`theme-toggle ${theme}`}>
      {theme === "dark" ? "☀️ Light Mode" : "🌙 Dark Mode"}
    </button>
  );
}

// Main App Component
function App() {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    <Router>
      <ThemeContext.Provider value={{ theme, toggleTheme }}>
        <AuthProvider>
          <div className={`app ${theme}`}>
            <Navigation />
            <ThemeToggle />
            <main className="main-content">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<LoginFormWithRouter />} />
                <Route
                  path="/dashboard"
                  element={
                    <ProtectedRoute>
                      <Dashboard />
                    </ProtectedRoute>
                  }
                />
                <Route
                  path="/reports"
                  element={
                    <ProtectedRoute>
                      <Reports />
                    </ProtectedRoute>
                  }
                />
                <Route
                  path="/profile/:userId"
                  element={
                    <ProtectedRoute>
                      <UserProfile />
                    </ProtectedRoute>
                  }
                />
              </Routes>
            </main>
            <footer className="footer">
              <p>&copy; 2025 TaskFlow - Task Management System</p>
            </footer>
          </div>
        </AuthProvider>
      </ThemeContext.Provider>
    </Router>
  );
}

export default App;
