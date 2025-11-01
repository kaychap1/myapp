import React from 'react';
import Link from 'next/link';

// Mock data for profiles
const profiles = [
  {
    id: 1,
    name: 'Alice',
    role: 'Frontend Developer',
    avatar: 'https://i.pravatar.cc/150?u=a042581f4e29026024d'
  },
  {
    id: 2,
    name: 'Bob',
    role: 'Backend Developer',
    avatar: 'https://i.pravatar.cc/150?u=a042581f4e29026704d'
  },
  {
    id: 3,
    name: 'Charlie',
    role: 'UI/UX Designer',
    avatar: 'https://i.pravatar.cc/150?u=a042581f4e29026706d'
  },
  {
    id: 4,
    name: 'Diana',
    role: 'Project Manager',
    avatar: 'https://i.pravatar.cc/150?u=a042581f4e29026707d'
  }
];

const HomePage = async () => {
  // Server-side data fetching
  const fetchedProfiles = await new Promise(resolve => setTimeout(() => resolve(profiles), 1000));

  return (
    <div className="container">
      <h1 className="text-4xl font-bold text-center mb-8">Our Team</h1>
      
      {/* Filters */}
      <div className="flex justify-center gap-4 mb-8">
        <input type="text" placeholder="Search by name..." className="px-4 py-2 border rounded-lg" />
        <select className="px-4 py-2 border rounded-lg">
          <option value="">All Roles</option>
          <option value="Frontend Developer">Frontend Developer</option>
          <option value="Backend Developer">Backend Developer</option>
          <option value="UI/UX Designer">UI/UX Designer</option>
          <option value="Project Manager">Project Manager</option>
        </select>
      </div>

      {/* Profiles */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {fetchedProfiles.map(profile => (
          <Link href={`/profile/${profile.id}`} key={profile.id}>
            <div className="card text-center p-4">
              <img src={profile.avatar} alt={profile.name} className="w-24 h-24 rounded-full mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">{profile.name}</h3>
              <p className="text-gray-600">{profile.role}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
