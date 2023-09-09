import { currentUser } from "@clerk/nextjs";

const Dashboard = async () => {
  const user = await currentUser();

  return (
    <div className="space-y-4">
      <div>Dashboard page</div>
      <div>Hello {user?.firstName}</div>
    </div>
  );
};

export default Dashboard;
