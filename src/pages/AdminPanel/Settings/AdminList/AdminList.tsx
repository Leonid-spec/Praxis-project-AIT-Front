import { useEffect, useState } from "react";
import { ListContainer, AdminItem } from "./styles";
import { getAllAdmins } from "../../../../api/adminAPI";
import { AdminDto } from "../../../../store/types/adminTypes";

interface AdminListProps {
  admins: AdminDto[];
}

const AdminList = () => {
  const [admins, setAdmins] = useState<AdminDto[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchAdmins = async () => {
      try {
        const token = localStorage.getItem("token");
        if (!token) throw new Error("No token found");
        const adminList = await getAllAdmins(token);
        setAdmins(adminList);
      } catch (err) {
        setError((err as Error).message);
      } finally {
        setLoading(false);
      }
    };

    fetchAdmins();
  }, []);

  if (loading) return <p>Admin loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <ListContainer>
      {admins.map((admin) => (
        <AdminItem key={admin.id}>{admin.login}</AdminItem>
      ))}
    </ListContainer>
  );
};

export default AdminList;
