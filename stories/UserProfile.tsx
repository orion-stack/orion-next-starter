// stories/UserProfile.tsx
import { useState, useEffect } from "react";

interface User {
  id: number;
  name: string;
  email: string;
  role?: string;
}

interface UserProfileProps {
  userId: number;
}

export const UserProfile = ({ userId }: UserProfileProps) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        setLoading(true);
        const response = await fetch(`/api/users/${userId}`);

        if (!response.ok) {
          throw new Error(`Failed to fetch user: ${response.status}`);
        }

        const userData = await response.json();
        setUser(userData);
      } catch (err) {
        setError(err instanceof Error ? err.message : "Unknown error");
      } finally {
        setLoading(false);
      }
    };

    fetchUser();
  }, [userId]);

  if (loading) return <div className="p-4">Loading user...</div>;
  if (error) return <div className="p-4 text-red-500">Error: {error}</div>;
  if (!user) return <div className="p-4">User not found</div>;

  return (
    <div className="p-4 border rounded-lg">
      <h2 className="text-xl font-bold">{user.name}</h2>
      <p>Email: {user.email}</p>
      <p>Role: {user.role || "N/A"}</p>
    </div>
  );
};
