const loginForm = document.getElementById("loginForm");

if (loginForm) {
  loginForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const email = document.getElementById("Email").value;
    const password = document.getElementById("Password").value;
    const role = document.getElementById("role").value;

    if (role === "admin") {
      window.location.href = "./pages/admin-dashboard.html";
    } else if (role === "student") {
      window.location.href = "./pages/student-dashboard.html";
    } else {
      alert("Invalid role selected!");
    }
  });
}

const reportForm =
  document.getElementById("reportForm");
if (reportForm) {
  reportForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const hostel = document.getElementById("hostel").value;
    const room = document.getElementById("room").value;
    const category = document.getElementById("category").value;
    const priority = document.getElementById("priority").value;
    const description = document.getElementById("description").value;

    const report = {
      hostel: hostel,
      room: room,
      category: category,
      priority: priority,
      description: description,
      status: "Pending"
    };

    const existingReports=
    JSON.parse(localStorage.getItem("maintenanceReports")) || [];
    existingReports.push(report);
    localStorage.setItem("maintenanceReports", JSON.stringify(existingReports));

    alert("Report submitted successfully!");

    window.location.href = "./student-dashboard.html";

  });
}
