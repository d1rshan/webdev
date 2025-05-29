import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const ProfilePage = ({ params }: any) => {
  // Mock user data
  const user = {
    name: "John Doe",
    email: "john.doe@example.com",
    image: "https://github.com/shadcn.png",
    bio: "A passionate developer.",
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <Card className="w-[400px]">
        <CardHeader>
          <CardTitle>Profile</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col items-center space-y-4">
            <Avatar className="h-24 w-24">
              <AvatarImage src={user.image} alt={user.name} />
              <AvatarFallback>{user.name.slice(0, 2)}</AvatarFallback>
            </Avatar>
            <div className="text-center">
              <p className="text-xl font-semibold">{params.id}</p>
              <p className="text-gray-500">{user.email}</p>
              <p className="text-gray-700 mt-2">{user.bio}</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ProfilePage;
