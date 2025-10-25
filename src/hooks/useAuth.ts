import { useState, useEffect } from 'react';

export function useAuth() {
  const [token, setToken] = useState<string | null>(null);

  useEffect(() => {
    const t = localStorage.getItem('token');
    setToken(t);
  }, []);

  function login(t: string) {
    localStorage.setItem('token', t);
    setToken(t);
  }

  function logout() {
    localStorage.removeItem('token');
    setToken(null);
    window.location.href = '/';
  }

  return { token, login, logout };
}
