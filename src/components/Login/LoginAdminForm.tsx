import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { FaUser, FaLock } from "react-icons/fa";
import { SubmitButton } from "../Appointment/styles";
import ButtonClose from "../Button/ButtonClose/ButtonClose";
import TextInput from "../Input/TextInput";
import { Overlay, FormContainer, ButtonCloseContainer, TitleAndSub, Title, Subtitle } from "./styles";
import { login } from "../../api/adminAPI";
import { AdminDto } from "../../store/types/adminTypes";
import Notification from "../Notification/Notification";

const LoginAdminForm = ({
  onClose,
  onLoginSuccess,
}: {
  onClose: () => void;
  onLoginSuccess: () => void;
}) => {
  const [loginField, setLoginField] = useState("");
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

    if (loginField[0] === " ") {
      setNotification({
        message: t("message.other.loginAdmin.errors.usernameStartsWithSpace"),
        type: "error",
      });
      return;
    }
    if (/\s/.test(loginField)) {
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
    if (!loginField.trim() || !password.trim()) {
      setNotification({
        message: t("message.other.loginAdmin.errors.missingCredentials"),
        type: "error",
      });
      return;
    }
    if (loginField.length < 3 || loginField.length > 16) {
      setNotification({
        message: t("message.other.loginAdmin.errors.usernameLength"),
        type: "error",
      });
      return;
    }
    if (password.length < 4 || password.length > 32) {
      setNotification({
        message: t("message.other.loginAdmin.errors.passwordLength"),
        type: "error",
      });
      return;
    }

    const loginData: AdminDto = { login: loginField, password };

    try {
      const data = await login(loginData); 
      
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
          message: "Login failed",
          type: "error",
        });
      }
    } catch (error: any) {
      console.error("Error during login:", error);
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
          value={loginField}
          onChange={(e) => setLoginField(e.target.value)}
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
          />
        </div>
        <SubmitButton type="submit">
          {t("message.other.loginAdmin.button")}
        </SubmitButton>
      </FormContainer>
    </Overlay>
  );
};

export default LoginAdminForm;
