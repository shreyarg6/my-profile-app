import React from 'react';
import useOnlineStatus from '../hooks/useOnlineStatus';
import useMousePosition from '../hooks/useMousePosition';

const ProfileApp = () => {
    const isOnline = useOnlineStatus();
    const { x, y } = useMousePosition();

    return (
        <div style={{ padding: '20px', textAlign: 'center' }}>
            <h1>Profile App</h1>
            <p>Status: <strong style={{ color: isOnline ? 'green' : 'red' }}>{isOnline ? 'Online' : 'Offline'}</strong></p>
            <p>Mouse Position - X: {x}px, Y: {y}px</p>
        </div>
    );
};

export default ProfileApp;
