import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { FaUser, FaLock } from "react-icons/fa";
import {
  Overlay,
  FormContainer,
  TitleAndSub,
  Title,
  Subtitle,
  ButtonCloseContainer,
} from "./styles";
import ButtonClose from "../Button/ButtonClose/ButtonClose";
import SubmitButton from "../Button/SubmitButton/SubmitButton";
import Notification from "../Notification/Notification";
import TextInput from "../Input/TextInput";
import { useNavigate } from "react-router-dom";

const LoginAdminForm = ({
  onClose,
  onLoginSuccess,
}: {
  onClose: () => void;
  onLoginSuccess: () => void;
}) => {
  const [login, setlogin] = useState("");
  const [password, setPassword] = useState("");
  const [notification, setNotification] = useState<{
    message: string;
    type: "error" | "success";
  } | null>(null);
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const { t } = useTranslation();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();

    if (login[0] === " ") {
      setNotification({
        message: t("message.other.loginAdmin.errors.usernameStartsWithSpace"),
        type: "error",
      });
      return;
    }
    if (/\s/.test(login)) {
      setNotification({
        message: t("message.other.loginAdmin.errors.loginContainsSpaces"),
        type: "error",
      });
      return;
    }
    if (/\s/.test(password)) {
      setNotification({
        message: t("message.other.loginAdmin.errors.passwordContainsSpaces"),
        type: "error",
      });
      return;
    }
    if (!login.trim() || !password.trim()) {
      setNotification({
        message: t("message.other.loginAdmin.errors.missingCredentials"),
        type: "error",
      });
      return;
    }
    if (login.length < 3 || login.length > 16) {
      setNotification({
        message: t("message.other.loginAdmin.errors.usernameLength"),
        type: "error",
      });
      return;
    }
    if (password.length < 4 || login.length > 32) {
      setNotification({
        message: t("message.other.loginAdmin.errors.passwordLength"),
        type: "error",
      });
      return;
    }

    const loginData = { login, password };

    try {
      const response = await fetch("/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(loginData),
      });

      if (!response.ok) {
        throw new Error(`Invalid data!`);
      }

      const textResponse = await response.text(); 
      // console.log("Text Response:", textResponse);

      const data = textResponse ? JSON.parse(textResponse) : {};
      // console.log("Parsed Data:", data);

      if (data.token) {
        localStorage.setItem("token", data.token);
        localStorage.setItem("isLoggedIn", "true");

        setNotification({
          message: t("message.other.loginAdmin.messages.loginSuccess"),
          type: "success",
        });

        setTimeout(() => {
          onLoginSuccess();
          onClose();
          navigate("/admin-panel");
        }, 1500);
      } else {
        setNotification({
          message: data.message || "Login failed",
          type: "error",
        });
      }
    } catch (error: any) {
      console.error("Error:", error);
      setNotification({
        message: error.message || "Something went wrong",
        type: "error",
      });
    }
  };

  return (
    <Overlay>
      <FormContainer onSubmit={handleLogin} as="form">
        <ButtonCloseContainer>
          <ButtonClose onClick={onClose} />
        </ButtonCloseContainer>
        <TitleAndSub>
          <Title>{t("message.other.loginAdmin.title")}</Title>
          <Subtitle>{t("message.other.loginAdmin.subtitle")}</Subtitle>
        </TitleAndSub>

        {notification && (
          <Notification
            message={notification.message}
            type={notification.type}
            onClose={() => setNotification(null)}
          />
        )}

        <TextInput
          label={t("message.other.loginAdmin.labelUsername")}
          name="login"
          icon={<FaUser />}
          type="text"
          placeholder={t("message.other.loginAdmin.placeholders.username")}
          value={login}
          onChange={(e) => setlogin(e.target.value)}
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
        <SubmitButton type="submit">
          {t("message.other.loginAdmin.button")}
        </SubmitButton>
      </FormContainer>
    </Overlay>
  );
};

export default LoginAdminForm;
