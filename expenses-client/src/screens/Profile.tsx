import React from "react";

const Profile: React.FC = () => {
    return (
        <div className="bg-white/80 rounded-xl shadow-md p-6 mt-4">
            <div className="flex flex-col items-center">
                <img
                    src="https://randomuser.me/api/portraits/men/75.jpg"
                    alt="Profile"
                    className="w-20 h-20 rounded-full shadow-lg mb-3 border-2 border-blue-500"
                />
                <h2 className="text-xl font-semibold mb-1 text-gray-900">John Doe</h2>
                <p className="text-gray-500 text-sm mb-4">john.doe@email.com</p>
            </div>
            <hr className="my-4" />
            <div className="space-y-2">
                <div className="flex justify-between items-center">
                    <span className="text-gray-600">Account Type</span>
                    <span className="font-medium text-blue-600">Premium</span>
                </div>
                <div className="flex justify-between items-center">
                    <span className="text-gray-600">Joined</span>
                    <span className="font-medium text-gray-800">Jan 2023</span>
                </div>
                <div className="flex justify-between items-center">
                    <span className="text-gray-600">Transactions</span>
                    <span className="font-medium text-gray-800">248</span>
                </div>
            </div>
            <button
                className="w-full mt-6 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-lg transition"
            >
                Edit Profile
            </button>
            <button
                className="w-full mt-2 bg-gray-100 hover:bg-gray-200 text-gray-700 font-semibold py-2 rounded-lg transition"
            >
                Log Out
            </button>
        </div>
    );
};

export default Profile;