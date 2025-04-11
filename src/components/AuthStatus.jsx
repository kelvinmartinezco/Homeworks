import React from 'react';
import { useSelector } from 'react-redux';

const AuthStatus = () => {
  const { user, loading, error } = useSelector(state => state.auth);

  if (loading) return <p>Cargando...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      {user ? (
        <p>Bienvenido, {user.name}!</p>
      ) : (
        <p>No has iniciado sesión.</p>
      )}
    </div>
  );
};

export default AuthStatus;