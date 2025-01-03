'use client';
import React from 'react';
import { User } from './User';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

interface UserCardProps {
    user: User;
}

const UserCard: React.FC <UserCardProps> = ({user}) => {
    if (!user) {
        return <div>Error! No user data available, sorry</div>;
        }
    return (
        <Card className="w-full max-w-sm border rounded-xl bg-teal-500">
            <CardHeader>
                <CardTitle className="text-xl font-bold text-white">{user.name}</CardTitle>
                <CardDescription>{user.email}</CardDescription>
            </CardHeader>
            <CardContent>
                <p><strong>Company:</strong>{user.company.name}</p>
                <p><strong>Username:</strong>{user.username}</p>
            </CardContent>
            <div className="flex justify-end p-6">
                <Button variant='default' asChild>
                <a className="bg-gray-800 text-teal-500 hover:bg-gray-700 transition duration-200 p-2 rounded 
                outline-none focus:ring-0" href={`/user/${user.id}`}> More Details</a>
                </Button>
            </div>
        </Card>
    );
};

export default UserCard;