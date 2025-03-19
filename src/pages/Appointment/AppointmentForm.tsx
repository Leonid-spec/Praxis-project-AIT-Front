import React, { useState } from 'react';
import {
  PageContainer,
  FormContainer,
  FormTitle,
  InputGroup,
  SubmitButton,
} from './AppointmentForm.styles'; // Импортируем стили

const AppointmentForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    comment: '',
    email: '',
    phoneNumber: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
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
          <label htmlFor="phoneNumber">Telefonnummer:</label>
          <input
            type="tel"
            id="phoneNumber"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleChange}
            placeholder="Geben Sie Ihre Telefonnummer ein"
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
          />
          <span>{formData.comment.length}/1024</span>
        </InputGroup>

        <SubmitButton type="submit">Absenden</SubmitButton>
      </FormContainer>
    </PageContainer>
  );
};

export default AppointmentForm;
