import { Routes, Route, Link } from 'react-router-dom';
import AdminLogin from './pages/AdminLogin';
import TeacherLogin from './pages/TeacherLogin';
import StudentLogin from './pages/StudentLogin';
import DashboardLayout from './components/DashboardLayout';
import './App.css';


// Admin pages
import AdminDashboard from './pages/AdminDashboard';
import Teachers from './pages/Teachers';
import Students from './pages/Students';
import Classes from './pages/Classes';
import Subjects from './pages/Subjects';
import Exams from './pages/Exams';
import AdminAttendance from './pages/AdminAttendance';
import Timetable from './pages/Timetable';
import Fees from './pages/Fees';
import Library from './pages/Library';

// Teacher pages
import TeacherDashboard from './pages/TeacherDashboard';
import TeacherAttendance from './pages/TeacherAttendance';
import EnterMarks from './pages/EnterMarks';
import StudentList from './pages/StudentList';
import TeacherTimetable from './pages/TeacherTimetable';
import Messages from './pages/Messages';

// Student pages
import StudentDashboard from './pages/StudentDashboard';
import StudentAttendance from './pages/StudentAttendance';
import Results from './pages/Results';
import ReportCard from './pages/ReportCard';
import Assignments from './pages/Assignments';
import StudentLibrary from './pages/StudentLibrary';
import StudentTimetable from './pages/StudentTimetable';
import Notifications from './pages/Notifications';

function App() {
  return (
    <Routes>
      {/* Home/Login Page */}
      <Route
        path="/"
        element={
          <div className='main-div' style={{ padding: "2rem" }}>
            <h2>Home Page - Choose a login</h2>
            <ul>
              <li className='li-1'><Link to="/admin-login">Admin Login</Link></li>
              <li className='li-2'><Link to="/teacher-login">Teacher Login</Link></li>
              <li className='li-3'><Link to="/student-login">Student Login</Link></li>
            </ul>
          </div>
        }
      />

      {/* Login Routes */}
      <Route path="/admin-login" element={<AdminLogin />} />
      <Route path="/teacher-login" element={<TeacherLogin />} />
      <Route path="/student-login" element={<StudentLogin />} />

      {/* Admin Routes */}
      <Route path="/admin-dashboard" element={<AdminDashboard />} />
      <Route path="/teachers" element={<Teachers />} />
      <Route path="/students" element={<Students />} />
      <Route path="/classes" element={<Classes />} />
      <Route path="/subjects" element={<Subjects />} />
      <Route path="/exams" element={<Exams />} />
      <Route path="/admin-attendance" element={<AdminAttendance />} />
      <Route path="/timetable" element={<Timetable />} />
      <Route path="/fees" element={<Fees />} />
      <Route path="/library" element={<Library />} />

      {/* Teacher Routes */}
      <Route path="/teacher-dashboard" element={<TeacherDashboard />} />
      <Route path="/teacher-attendance" element={<TeacherAttendance />} />
      <Route path="/enter-marks" element={<EnterMarks />} />
      <Route path="/teacher-students" element={<StudentList />} />
      <Route path="/messages" element={<Messages />} />
      <Route path="/teacher-timetable" element={<TeacherTimetable />} />

      {/* Student Routes */}
      <Route path="/student-dashboard" element={<StudentDashboard />} />
      <Route path="/student-attendance" element={<StudentAttendance />} />
      <Route path="/results" element={<Results />} />
      <Route path="/report-card" element={<ReportCard />} />
      <Route path="/assignments" element={<Assignments />} />
      <Route path="/student-library" element={<StudentLibrary />} />
      <Route path="/student-timetable" element={<StudentTimetable />} />
      <Route path="/notifications" element={<Notifications />} />
    </Routes>
  );
}

export default App;
