import React from 'react';
import { useDispatch } from 'react-redux';
import { logout } from '../redux/authSlice';

const Logout = () => {
  const dispatch = useDispatch();

  return (
    <button 
      onClick={() => dispatch(logout())}
      style={{
        padding: '8px 16px',
        backgroundColor: '#f44336',
        color: 'white',
        border: 'none',
        borderRadius: '4px',
        cursor: 'pointer'
      }}
    >
      Cerrar sesión
    </button>
  );
};

export default Logout;