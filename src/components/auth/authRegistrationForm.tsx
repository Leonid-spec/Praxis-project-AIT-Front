import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { AppDispatch, RootState } from '../../store/store';
import { register, closeRegistrationModal } from '../../store/slices/authSlice';
import { ClientRequestDto } from '../../types/client';

const AuthRegistrationForm: React.FC = () => {
    const dispatch = useDispatch<AppDispatch>();
    const navigate = useNavigate();
    const [formData, setFormData] = useState<ClientRequestDto>({
        email: '',
        password: '',
        firstName: '',
        lastName: '',
        dateOfBirth: '',
        address: '',
        phone: '',
    });
    const { loading, error } = useSelector((state: RootState) => state.auth);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            const result = await dispatch(register(formData)).unwrap();
            navigate('/client-dashboard');
        } catch (error) {
            console.error('Error during registration:', error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>Регистрация</h2>
            <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email"
                required
            />
            <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Пароль"
                required
            />
            <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                placeholder="Имя"
                required
            />
            <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                placeholder="Фамилия"
                required
            />
            <input
                type="date"
                name="dateOfBirth"
                value={formData.dateOfBirth}
                onChange={handleChange}
                required
            />
            <input
                type="text"
                name="address"
                value={formData.address}
                onChange={handleChange}
                placeholder="Адрес"
                required
            />
            <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Телефон"
                required
            />
            <button type="submit" disabled={loading}>
                {loading ? 'Загрузка...' : 'Зарегистрироваться'}
            </button>
            {error && <p style={{ color: 'red' }}>{error}</p>}
        </form>
    );
};

export default AuthRegistrationForm;
