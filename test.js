// Example function to fetch user role
const fetchUserRole = async (userId) => {
  try {
    const response = await fetch(`http://localhost:5001/api/user-role/${userId}`);
    if (!response.ok) {
      throw new Error("Failed to fetch user role");
    }
    const data = await response.json();
    console.log("User role:", data.userType);
    return data.userType;
  } catch (error) {
    console.error("Error fetching user role:", error);
  }
};

// Example usage
const userId = "67e1b0425761f8e998742ab3";
fetchUserRole(userId);

