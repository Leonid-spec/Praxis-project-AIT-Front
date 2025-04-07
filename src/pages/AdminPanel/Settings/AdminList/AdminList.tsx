import { ListContainer, AdminItem } from "./styles";

const AdminList = () => {
  const admins = [
    { id: 1, email: "admin1" },
    { id: 2, email: "admin2" },
  ];

  return (
    <ListContainer>
      {admins.map((admin) => (
        <AdminItem key={admin.id}>{admin.email}</AdminItem>
      ))}
    </ListContainer>
  );
};

export default AdminList;
