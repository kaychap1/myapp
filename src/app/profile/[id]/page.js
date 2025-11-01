import React from 'react';

// Mock data for profiles
const profiles = [
  {
    id: 1,
    name: 'Alice',
    role: 'Frontend Developer',
    avatar: 'https://i.pravatar.cc/150?u=a042581f4e29026024d',
    bio: 'Alice is a passionate frontend developer with a love for creating beautiful and intuitive user interfaces.'
  },
  {
    id: 2,
    name: 'Bob',
    role: 'Backend Developer',
    avatar: 'https://i.pravatar.cc/150?u=a042581f4e29026704d',
    bio: 'Bob is a backend wizard, skilled in building robust and scalable server-side applications.'
  },
  {
    id: 3,
    name: 'Charlie',
    role: 'UI/UX Designer',
    avatar: 'https://i.pravatar.cc/150?u=a042581f4e29026706d',
    bio: 'Charlie has a keen eye for design and a passion for crafting user-centric experiences.'
  },
  {
    id: 4,
    name: 'Diana',
    role: 'Project Manager',
    avatar: 'https://i.pravatar.cc/150?u=a042581f4e29026707d',
    bio: 'Diana keeps the team on track and ensures that projects are delivered on time and within budget.'
  }
];

export async function generateStaticParams() {
  return profiles.map(profile => ({
    id: profile.id.toString(),
  }));
}

const ProfileDetailPage = async ({ params }) => {
  const profile = profiles.find(p => p.id === parseInt(params.id));

  if (!profile) {
    return <div className="container text-center">Profile not found</div>;
  }

  return (
    <div className="container">
      <div className="card p-8 max-w-2xl mx-auto">
        <img src={profile.avatar} alt={profile.name} className="w-36 h-36 rounded-full mx-auto mb-4" />
        <h1 className="text-4xl font-bold text-center mb-2">{profile.name}</h1>
        <h2 className="text-2xl text-gray-600 text-center mb-4">{profile.role}</h2>
        <p className="text-center">{profile.bio}</p>
      </div>
    </div>
  );
};

export default ProfileDetailPage;
