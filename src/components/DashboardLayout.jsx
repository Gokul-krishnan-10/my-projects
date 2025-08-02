// src/components/DashboardLayout.jsx
import { Link } from 'react-router-dom';
import './DashboardLayout.css'; 

function DashboardLayout({ userType, children }) {
  const menuItems = {
    Admin: [
      { label: "Dashboard", path: "/admin-dashboard" },
      { label: "Manage Teachers", path: "/teachers" },
      { label: "Manage Students", path: "/students" },
      { label: "Manage Classes", path: "/classes" },
      { label: "Manage Subjects", path: "/subjects" },
      { label: "Exam Schedules", path: "/exams" },
      { label: "Attendance", path: "/admin-attendance" },
      { label: "Timetable", path: "/timetable" },
      { label: "Fee Management", path: "/fees" },
      { label: "Library", path: "/library" }
    ],
    Teacher: [
      { label: "Dashboard", path: "/teacher-dashboard" },
      { label: "Mark Attendance", path: "/teacher-attendance" },
      { label: "Enter Marks", path: "/enter-marks" },
      { label: "Student List", path: "/teacher-Students" },
      { label: "TeachersTimetable", path: "/teacher-timetable" },
      { label: "Messages", path: "/messages" }
    ],
    Student: [
      { label: "Dashboard", path: "/student-dashboard" },
      { label: "View Attendance", path: "/student-attendance" },
      { label: "Exam Results", path: "/results" },
      { label: "Report Card", path: "/report-card" },
      { label: "Assignments", path: "/assignments" },
      { label: "Library", path: "/student-library" },
      { label: "StudentTimebale", path: "/student-timetable" },
      { label: "Notifications", path: "/notifications" }
    ]
  };

  return (
    <div className="dashboard-container">
      {/* Sidebar */}
      <div className="sidebar">
        <h3>{userType} Panel</h3>
        <ul>
          {menuItems[userType]?.map((item, index) => (
            <li key={index}>
              <Link to={item.path}>{item.label}</Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Main Content */}
      <div className="main-content">
        <div className="navbar">
          <h2>{userType} Dashboard</h2>
        </div>
        <div>{children}</div>
      </div>
    </div>
  );
}

export default DashboardLayout;
