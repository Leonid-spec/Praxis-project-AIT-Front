import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { AppDispatch, RootState } from '../../store/store';
import { login, closeLoginModal } from '../../store/slices/authSlice';
import { UserRole } from '../../types/auth';

const AuthLoginForm: React.FC = () => {
    const dispatch = useDispatch<AppDispatch>();
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { loading, error } = useSelector((state: RootState) => state.auth);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        
        try {
            const resultAction = await dispatch(login({ email, password })).unwrap();
            dispatch(closeLoginModal());

            console.log('Login successful:', resultAction);

            switch (resultAction.user.role) {
                case UserRole.CLIENT:
                    navigate('/client-dashboard');
                    break;
                case UserRole.SPECIALIST:
                    navigate('/specialist-dashboard');
                    break;
                case UserRole.ADMINISTRATOR:
                    navigate('/admin');
                    break;
                default:
                    console.warn('Unknown user role:', resultAction.user.role);
                    navigate('/');
            }
        } catch (error) {
            console.error('Error during login:', error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>Вход</h2>
            <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
                required
            />
            <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Пароль"
                required
            />
            <button type="submit" disabled={loading}>
                {loading ? 'Загрузка...' : 'Войти'}
            </button>
            {error && <p style={{ color: 'red' }}>{error}</p>}
        </form>
    );
};

export default AuthLoginForm;
