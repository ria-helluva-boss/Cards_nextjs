import React from 'react';
import { User } from '../../creating_components/User'; 
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';

interface UserDetailProps {
    params: {
        id: string;
    };
}
const UserDetail: React.FC <UserDetailProps> = async({ params }) => {
    const {id} = params;

    let user: User | null = null;
    let error: string | null = null;

try{
    const response = await fetch (`https://jsonplaceholder.typicode.com/users/${id}`);
    if(!response.ok) {
        throw new Error ('Error loading data');
    }
    user = await response.json();
} catch (err){
    error = err instanceof Error ? err.message : 'Unknown error';
}

if (error) {
    return <div className="text-red-500">{error}</div>;
}
if (!user) {
    return <div>Загрузка...</div>; 
}
return(
    <div className="flex items-center justify-center min-h-screen bg-gray-900">
    <Card className="w-full max-w-lg mx-auto mt-4 border rounded-xl shadow-lg bg-teal-500 dark:bg-teal-700 ">
        <CardHeader>
            <CardTitle className="text-2xl font-bold text-white">{user.name}</CardTitle>
            <CardDescription className="text-gray-200">{user.email}</CardDescription>
        </CardHeader>
        <CardContent className="space-y-2">
            <p><strong>Username:</strong> {user.username}</p>
            <p><strong>Phone:</strong> {user.phone}</p>
            <p><strong>Website:</strong> {user.website}</p>
            <p><strong>Company:</strong> {user.company.name}</p>
            <p><strong>Address:</strong> {user.address.street}, {user.address.city}</p>
        </CardContent>
    </Card>
    </div>
); 
};

export default UserDetail;
