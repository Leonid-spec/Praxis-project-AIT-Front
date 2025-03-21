import React, { useState } from 'react';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import {
  FormContainer,
  FormTitle,
  InputGroup,
  SubmitButton,
  LanguageOptions,
} from './AppointmentForm.styles';

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  primaryPhone: string;
  secondaryPhone?: string;
  language: string | null;
  comment: string;
  appointmentPreferences: string;
}

const AppointmentForm = () => {
  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    lastName: '',
    email: '',
    primaryPhone: '',
    secondaryPhone: '',
    language: null,
    comment: '',
    appointmentPreferences: '',
  });

  const [errors, setErrors] = useState<{ [key: string]: string | null }>({});

  const validateName = (name: string): string | null => {
    const regex = /^[A-Z][a-zäöüßÄÖÜ.'\-_]{1,63}$/;
    if (!name) return 'Поле не может быть пустым.';
    if (!regex.test(name)) return 'Недопустимые символы.';
    return null;
  };

  const validateEmail = (email: string): string | null => {
    const regex = /^[a-zA-Z0-9._,-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!regex.test(email)) return 'Введите корректный email.';
    return null;
  };

  const validatePhone = (phone: string): string | null => {
    if (!phone) return 'Это поле обязательно для заполнения.';
    if (phone.length < 10) return 'Введите корректный номер телефона.';
    return null;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    let updatedValue = value;
    if (name === 'firstName' || name === 'lastName') {
      updatedValue = value.charAt(0).toUpperCase() + value.slice(1);
    }
    setFormData({ ...formData, [name]: updatedValue });
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    if (name === 'firstName' || name === 'lastName') {
      setErrors((prev) => ({ ...prev, [name]: validateName(value) }));
    }
    if (name === 'email') {
      setErrors((prev) => ({ ...prev, [name]: validateEmail(value) }));
    }
  };

  const handlePhoneChange = (value: string, name: string) => {
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors = {
      firstName: validateName(formData.firstName),
      lastName: validateName(formData.lastName),
      email: validateEmail(formData.email),
      primaryPhone: validatePhone(formData.primaryPhone),
    };
    setErrors(newErrors);

    const hasErrors = Object.values(newErrors).some((error) => error !== null);
    if (!hasErrors) {
      console.log('Form submitted:', formData);
      alert('Запись успешно выполнена!');
    } else {
      alert('Исправьте ошибки перед отправкой.');
    }
  };

  const handleLanguageChange = (lang: string) => {
    setFormData({
      ...formData,
      language: formData.language === lang ? null : lang,
    });
  };

  return (
    <FormContainer onSubmit={handleSubmit}>
      <FormTitle>Termin buchen</FormTitle>

      <InputGroup>
        <label htmlFor="firstName">Vorname:</label>
        <input
          type="text"
          id="firstName"
          name="firstName"
          value={formData.firstName}
          onChange={handleChange}
          onBlur={handleBlur}
          placeholder="Geben Sie Ihren Vornamen ein"
        />
        {errors.firstName && <span style={{ color: 'red' }}>{errors.firstName}</span>}
      </InputGroup>

      <InputGroup>
        <label htmlFor="lastName">Nachname:</label>
        <input
          type="text"
          id="lastName"
          name="lastName"
          value={formData.lastName}
          onChange={handleChange}
          onBlur={handleBlur}
          placeholder="Geben Sie Ihren Nachnamen ein"
        />
        {errors.lastName && <span style={{ color: 'red' }}>{errors.lastName}</span>}
      </InputGroup>

      <InputGroup>
        <label htmlFor="email">E-Mail:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          onBlur={handleBlur}
          placeholder="yourname@example.com"
        />
        {errors.email && <span style={{ color: 'red' }}>{errors.email}</span>}
      </InputGroup>

      <InputGroup>
        <label htmlFor="primaryPhone">Telefonnummer:</label>
        <PhoneInput
          country={'de'}
          value={formData.primaryPhone}
          onChange={(value) => handlePhoneChange(value, 'primaryPhone')}
          inputProps={{
            name: 'primaryPhone',
            required: true,
          }}
          placeholder="Geben Sie eine zusätzliche Telefonnummer ein"
        />
        {errors.primaryPhone && <span style={{ color: 'red' }}>{errors.primaryPhone}</span>}
      </InputGroup>

      <InputGroup>
        <label htmlFor="secondaryPhone">Zusätzliche Telefonnummer (optional):</label>
        <PhoneInput
          country={'de'}
          value={formData.secondaryPhone || ''}
          onChange={(value) => handlePhoneChange(value, 'secondaryPhone')}
          inputProps={{
            name: 'secondaryPhone',
          }}
          placeholder="Geben Sie eine zusätzliche Telefonnummer ein"
        />
      </InputGroup>

      <InputGroup>
        <label>Sprache:</label>
        <LanguageOptions>
          {['De', 'En', 'Ru'].map((lang) => (
            <label key={lang}>
              <input
                type="checkbox"
                checked={formData.language === lang}
                onChange={() => handleLanguageChange(lang)}
              />
              {lang}
            </label>
          ))}
        </LanguageOptions>
      </InputGroup>

      <InputGroup>
        <label htmlFor="appointmentPreferences">Ihre Wünsche für den Termin:</label>
        <textarea
          id="appointmentPreferences"
          name="appointmentPreferences"
          value={formData.appointmentPreferences}
          onChange={handleChange}
          placeholder="Hier können Sie Ihre Wünsche zum Datum und zur Uhrzeit Ihres Termins eingeben (bis zu 1024 Zeichen)"
          maxLength={1024}
          rows={5}
        />
        <span>{formData.appointmentPreferences.length}/1024</span>
      </InputGroup>

      <InputGroup>
        <label htmlFor="comment">Kommentar:</label>
        <textarea 
          id="comment"
          name="comment"
          value={formData.comment}
          onChange={handleChange}
          placeholder="Hinterlassen Sie einen Kommentar (bis zu 1024 Zeichen)"
          maxLength={1024}
          rows={5}
        />
        <span>{formData.comment.length}/1024</span>
      </InputGroup>

      <SubmitButton type="submit">Absenden</SubmitButton>
    </FormContainer>
  );
};

export default AppointmentForm;
