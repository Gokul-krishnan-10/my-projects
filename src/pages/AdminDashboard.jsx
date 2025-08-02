import DashboardLayout from "../components/DashboardLayout";

function AdminDashboard() {
  return (
    <DashboardLayout userType="Admin">
    <div>
      <h2>AdminDashboard</h2>
      <p>This is the AdminDashboard page.</p>
    </div>
    </DashboardLayout>
  );
}

export default AdminDashboard;