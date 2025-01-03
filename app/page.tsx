import React from 'react';
import UserCard from './creating_components/UserCard';
import { User } from './creating_components/User';

const Home = async () => {
  const response = await fetch (`https://jsonplaceholder.typicode.com/users`);
  const users: User[] = await response.json();
if(!response.ok) {
  throw new Error ('Error loading data');
}
  return (
    <div className="flex flex-wrap justify-center gap-4 p-4">
      {
        users.map(user => (
          <UserCard key={user.id} user={user}/>
        ))
      }
    </div>
  );
};
export default Home;
