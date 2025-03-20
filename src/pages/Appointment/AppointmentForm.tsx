import React, { useState } from 'react';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import { PageContainer, FormContainer, FormTitle, InputGroup, SubmitButton } from './AppointmentForm.styles'; // Импортируем стили
import { useDispatch } from 'react-redux';
import { setLanguage, setFormData } from '../../store/slices/formSlice'; // Импортируем Redux действие

const AppointmentForm = () => {
  const [formData, setFormDataLocal] = useState({
    firstName: '',
    lastName: '',
    comment: '',
    email: '',
    phoneNumber: '',
    backupPhoneNumber: '',
  });
  const [errors, setErrors] = useState<any>({});
  const dispatch = useDispatch();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormDataLocal({ ...formData, [name]: value });
  };

  const handlePhoneNumberChange = (value: string, name: string) => {
    setFormDataLocal({ ...formData, [name]: value });
  };

  const validateForm = () => {
    let formErrors: any = {};
    if (!formData.firstName || formData.firstName.length < 2) {
      formErrors.firstName = 'Vorname muss mindestens 2 Zeichen haben';
    }
    if (!formData.lastName || formData.lastName.length < 2) {
      formErrors.lastName = 'Nachname muss mindestens 2 Zeichen haben';
    }
    if (!formData.phoneNumber) {
      formErrors.phoneNumber = 'Telefonnummer ist erforderlich';
    }
    if (!formData.email || !/\S+@\S+\.\S+/.test(formData.email)) {
      formErrors.email = 'Bitte geben Sie eine gültige E-Mail-Adresse ein';
    }
    return formErrors;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length === 0) {
      console.log('Formular übermittelt:', formData);
      alert('Formular erfolgreich gesendet!');
      dispatch(setFormData(formData)); // Пример использования dispatch
    } else {
      setErrors(validationErrors);
    }
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
          {errors.firstName && <span>{errors.firstName}</span>}
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
          {errors.lastName && <span>{errors.lastName}</span>}
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
          {errors.email && <span>{errors.email}</span>}
        </InputGroup>
        <InputGroup>
          <label htmlFor="phoneNumber">Telefonnummer (Pflichtfeld):</label>
          <PhoneInput
            country={'de'}
            value={formData.phoneNumber}
            onChange={(value) => handlePhoneNumberChange(value, 'phoneNumber')}
            inputProps={{ name: 'phoneNumber', required: true }}
          />
          {errors.phoneNumber && <span>{errors.phoneNumber}</span>}
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


