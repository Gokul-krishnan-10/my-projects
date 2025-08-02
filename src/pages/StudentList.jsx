import DashboardLayout from "../components/DashboardLayout";

function StudentList() {
  return (
    <DashboardLayout userType="Teacher">
      <div>
      <h2>StudentList</h2>
      <p>This is the StudentList page.</p>
    </div>
    </DashboardLayout>    
  );
}

export default StudentList;