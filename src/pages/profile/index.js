"use client";
import '../../app/globals.css';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { getUserProfile } from '../../lib/auths';

export default function Profile() {
    const [user, setUser] = useState(null);
    const router = useRouter();
    useEffect(() => {
        const token = localStorage.getItem('token');
        if (token) {
            getUserProfile(token).then(user => setUser(user));
        }else{
            router.push('/login')
        }
    }, []);

    const handleLogout = () => {
        localStorage.removeItem('token');
        router.push('/login')
    };

    return (
        <div className="min-h-screen bg-black text-black flex items-center justify-center">
          <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 w-full max-w-md">
            <h1 className="text-3xl font-bold mb-4 text-center">Profile</h1>
            {user ? (
              <div>
                <p className="text-xl font-bold">Nome: {user.name}</p>
                <p className="text-xl font-bold">Email: {user.email}</p>
                <button type="button" onClick={handleLogout} class="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700" style={{width: '100%'}}>Logout</button>
              </div>
            ) : (
              <p className="text-xl font-bold text-center">Loading...</p>
            )}
          </div>
        </div>
      );
}