import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { loginWithEmail, loginWithGoogle } from '../redux/authSlice';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(loginWithEmail(email, password));
  };

  return (
    <div style={{ padding: '20px', maxWidth: '400px', margin: '0 auto' }}>
      <h2>Iniciar sesión</h2>
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: '10px' }}>
          <input
            type="email"
            placeholder="Correo electrónico"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={{ width: '100%', padding: '8px' }}
          />
        </div>
        <div style={{ marginBottom: '10px' }}>
          <input
            type="password"
            placeholder="Contraseña"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={{ width: '100%', padding: '8px' }}
          />
        </div>
        <button 
          type="submit" 
          style={{ 
            width: '100%', 
            padding: '10px', 
            backgroundColor: '#4285F4', 
            color: 'white', 
            border: 'none', 
            borderRadius: '4px' 
          }}
        >
          Iniciar sesión
        </button>
      </form>
      <p style={{ textAlign: 'center', margin: '15px 0' }}>o</p>
      <button 
        onClick={() => dispatch(loginWithGoogle())}
        style={{ 
          width: '100%', 
          padding: '10px', 
          backgroundColor: '#DB4437', 
          color: 'white', 
          border: 'none', 
          borderRadius: '4px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        <img 
          src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" 
          alt="Google logo" 
          style={{ width: '20px', marginRight: '10px' }} 
        />
        Iniciar sesión con Google
      </button>
    </div>
  );
};

export default Login;