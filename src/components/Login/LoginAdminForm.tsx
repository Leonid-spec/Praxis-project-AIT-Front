import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { FaUser, FaLock, FaEnvelope } from "react-icons/fa";
import {
  Overlay,
  FormContainer,
  TitleAndSub,
  Title,
  Subtitle,
  ForgotPasswordText,
  ButtonCloseContainer,
} from "./styles";
import ButtonClose from "../Button/ButtonClose/ButtonClose";
import SubmitButton from "../Button/SubmitButton/SubmitButton";
import Notification from "../Notification/Notification";
import TextInput from "../Input/TextInput";
import { useNavigate } from "react-router-dom";

const LoginAdminForm = ({ onClose, onLoginSuccess }: { onClose: () => void; onLoginSuccess: () => void }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [showForgotPassword, setShowForgotPassword] = useState(false);
  const [notification, setNotification] = useState<{ message: string; type: "error" | "success" } | null>(null);
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const { t } = useTranslation();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();

    if (username[0] === ' ') {
      setNotification({ message: t("message.other.loginAdmin.errors.usernameStartsWithSpace"), type: "error" });
      return;
    }
    if (/\s/.test(password)) {
      setNotification({ message: t("message.other.loginAdmin.errors.passwordContainsSpaces"), type: "error" });
      return;
    }

    if (!username.trim() || !password.trim()) {
      setNotification({ message: t("message.other.loginAdmin.errors.missingCredentials"), type: "error" });
      return;
    }
    if (username.length < 2 || username.length > 16) {
      setNotification({ message: t("message.other.loginAdmin.errors.usernameLength"), type: "error" });
      return;
    }
    if (password.length < 1) {
      setNotification({ message: t("message.other.loginAdmin.errors.passwordLength"), type: "error" });
      return;
    }
    
    // Формуємо об'єкт JSON
  const loginData = {
    username,
    password,
  };

  console.log("Login Data:", JSON.stringify(loginData, null, 2));

  fetch("https://your-backend.com/api/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(loginData),
  })
    .then((response) => response.json())
    .then((data) => {
      console.log("Server Response:", data);
      if (data.success) {
        setNotification({ message: t("message.other.loginAdmin.messages.loginSuccess"), type: "success" });
        setTimeout(() => {
          onLoginSuccess();
          onClose();
          navigate("/admin-panel");
        }, 1000);
      } else {
        setNotification({ message: data.message || "Login failed", type: "error" });
      }
    })
    .catch((error) => {
      console.error("Error:", error);
      setNotification({ message: "Something went wrong", type: "error" });
    });

    // console.log({ username, password });
    setNotification({ message: t("message.other.loginAdmin.messages.loginSuccess"), type: "success" });

    // setTimeout(() => {
    //   onLoginSuccess();
    //   onClose();
    //   navigate("/admin-panel");
    // }, 1000);
  };

  const handleForgotPassword = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) {
      setNotification({ message: t("message.other.loginAdmin.errors.missingEmail"), type: "error" });
      return;
    }

    console.log({ email });
    setNotification({ message: t("message.other.loginAdmin.messages.passwordResetSent"), type: "success" });
    setShowForgotPassword(false);
  };

  return (
    <Overlay>
      <FormContainer onSubmit={showForgotPassword ? handleForgotPassword : handleLogin} as="form">
        <ButtonCloseContainer><ButtonClose onClick={onClose} /></ButtonCloseContainer>
        <TitleAndSub>
          <Title>{t(showForgotPassword ? "message.other.loginAdmin.messages.forgotPasswordTitle" : "message.other.loginAdmin.title")}</Title>
          <Subtitle>{t(showForgotPassword ? "message.other.loginAdmin.forgotPassword.subtitle" : "message.other.loginAdmin.subtitle")}</Subtitle>
        </TitleAndSub>

        {notification && (
          <Notification
            message={notification.message}
            type={notification.type}
            onClose={() => setNotification(null)}
          />
        )}

        {showForgotPassword ? (
          <>
            <TextInput
            label="Email"
              name="envelopeIcon"
              icon={<FaEnvelope />}
              type="email"
              placeholder={t("message.other.loginAdmin.placeholders.email")}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <SubmitButton type="submit">{t("message.other.loginAdmin.forgotPassword.button")}</SubmitButton>
            <ForgotPasswordText onClick={() => setShowForgotPassword(false)}>
              {t("message.other.loginAdmin.forgotPassword.back")}
            </ForgotPasswordText>
          </>
        ) : (
          <>
            <TextInput
              label={t("message.other.loginAdmin.labelUsername")}
              name="username"
              icon={<FaUser />}
              type="text"
              placeholder={t("message.other.loginAdmin.placeholders.username")}
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <div style={{ position: "relative" }}>
              <TextInput
                label={t("message.other.loginAdmin.labelPassword")}
                name="password"
                icon={<FaLock />}
                type={showPassword ? "text" : "password"}
                placeholder={t("message.other.loginAdmin.placeholders.password")}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <div
                onClick={() => setShowPassword(!showPassword)}
                style={{
                  position: "absolute",
                  right: "10px",
                  top: "50%",
                  transform: "translateY(-50%)",
                  cursor: "pointer",
                }}
              >
              </div>
            </div>
            <SubmitButton type="submit">{t("message.other.loginAdmin.button")}</SubmitButton>
            <ForgotPasswordText onClick={() => setShowForgotPassword(true)}>
              {t("message.other.loginAdmin.forgotPassword.text")}
            </ForgotPasswordText>
          </>
        )}
      </FormContainer>
    </Overlay>
  );
};

export default LoginAdminForm;
