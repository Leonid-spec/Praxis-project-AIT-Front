import React, { useState } from 'react';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import { PageContainer, FormContainer, FormTitle, InputGroup, SubmitButton } from './AppointmentForm.styles'; // Импортируем стили

const AppointmentForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    comment: '',
    email: '',
    phoneNumber: '',
    backupPhoneNumber: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handlePhoneNumberChange = (value: string, name: string) => {
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.phoneNumber) {
      alert('Первый номер телефона обязателен для заполнения.');
      return;
    }
    console.log('Formular übermittelt:', formData);
  };

  return (
    <PageContainer>
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
            placeholder="Geben Sie Ihren Vornamen ein"
          />
        </InputGroup>
        <InputGroup>
          <label htmlFor="lastName">Nachname:</label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            placeholder="Geben Sie Ihren Nachnamen ein"
          />
        </InputGroup>
        <InputGroup>
          <label htmlFor="email">E-Mail:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Geben Sie Ihre E-Mail-Adresse ein"
          />
        </InputGroup>
        <InputGroup>
          <label htmlFor="phoneNumber">Telefonnummer (Pflichtfeld):</label>
          <PhoneInput
            country={'de'}
            value={formData.phoneNumber}
            onChange={(value) => handlePhoneNumberChange(value, 'phoneNumber')}
            inputProps={{ name: 'phoneNumber', required: true }}
          />
        </InputGroup>
        <InputGroup>
          <label htmlFor="backupPhoneNumber">Ersatz-Telefonnummer(optional auszufüllen):</label>
          <PhoneInput
            country={'de'}
            value={formData.backupPhoneNumber}
            onChange={(value) => handlePhoneNumberChange(value, 'backupPhoneNumber')}
            inputProps={{ name: 'backupPhoneNumber' }}
          />
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
    </PageContainer>
  );
};

export default AppointmentForm;
