import { useEffect, useState } from 'react';

const Route = ({ path, children }) => {
    // Set current path to value that is currently in browser
    const [currentPath, setCurrentPath] = useState(window.location.pathname);

    useEffect(() => {
        const onLocationChange = () => {
            // Set current path to new value
            setCurrentPath(window.location.pathname);
        };

        // When browser url changes, trigger onLocationChange
        window.addEventListener('popstate', onLocationChange);

        // Cleanup function
        return () => {
            window.removeEventListener('popstate', onLocationChange);
        };
    }, []);

    // If currentPath is equal to component target path, render element
    return currentPath === path ? children : null;
};

export default Route;
