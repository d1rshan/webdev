import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

function Profile() {
  const { id } = useParams(); // Extract user ID from URL
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then((response) => response.json())
      .then((data) => {
        setUser(data);
        setLoading(false);
      })
      .catch((error) => console.error("Error fetching user:", error));
  }, [id]); // Runs when ID changes

  if (loading) return <h2>Loading...</h2>;

  return (
    <div>
      <h1>{user.name}'s Profile</h1>
      <p>
        <strong>Username:</strong> {user.username}
      </p>
      <p>
        <strong>Email:</strong> {user.email}
      </p>
      <p>
        <strong>City:</strong> {user.address.city}
      </p>
      <p>
        <strong>Company:</strong> {user.company.name}
      </p>
    </div>
  );
}

export default Profile;
