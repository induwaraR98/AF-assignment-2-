import React from 'react';

export default function Footer() {
    return (
        <footer className="bg-gray-800 text-white p-4">
            <div className="container mx-auto text-center">
                <p>&copy; {new Date().getFullYear()} App Name. All rights reserved.</p>
            </div>
        </footer>
    );
};
