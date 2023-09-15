import { currentUser } from "@clerk/nextjs";

const Dashboard = async () => {
  const user = await currentUser();

  return (
    <div className="space-y-4">
      <div className="text-center">{user?.firstName}'s Page</div>
    </div>
  );
};

export default Dashboard;
