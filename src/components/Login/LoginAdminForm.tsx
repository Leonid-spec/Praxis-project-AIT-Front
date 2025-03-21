import React, { useState } from "react";
import { FaUser, FaLock, FaEnvelope, FaEye, FaEyeSlash } from "react-icons/fa"; // Добавляем иконки глаза
import {
  Overlay,
  FormContainer,
  TitleAndSub,
  Title,
  Subtitle,
  ForgotPasswordText,
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

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();

    if (!username.trim() || !password.trim()) {
        setNotification({ message: "Both Username and Password are required.", type: "error" });
        return;
    }
    if (username.length < 2 || username.length > 16) {
      setNotification({ message: "Username must be between 2 and 16 characters.", type: "error" });
      return;
    }
    if (password.length < 1) {
      setNotification({ message: "Password must al least 1 character", type: "error" });
      return;
    }

    console.log({ username, password });
    setNotification({ message: "Login successful!", type: "success" });

    setTimeout(() => {
      onLoginSuccess();
      onClose();
      navigate("/admin-panel");
    }, 1000);
  };

  const handleForgotPassword = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) {
      setNotification({ message: "Please enter an email address.", type: "error" });
      return;
    }

    console.log({ email });
    setNotification({ message: "Password reset link has been sent!", type: "success" });
    setShowForgotPassword(false); 
  };

  return (
    <Overlay>
      <FormContainer onSubmit={showForgotPassword ? handleForgotPassword : handleLogin} as="form">
        <ButtonClose onClick={onClose} />
        <TitleAndSub>
          <Title>{showForgotPassword ? "Forgot Password" : "Login"}</Title>
          <Subtitle>
            {showForgotPassword
              ? "Enter your email to reset your password"
              : "SIGN IN TO YOUR ACCOUNT"}
          </Subtitle>
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
              icon={<FaEnvelope />}
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <SubmitButton type="submit">Send</SubmitButton>
            <ForgotPasswordText onClick={() => setShowForgotPassword(false)}>
              Back to Login
            </ForgotPasswordText>
          </>
        ) : (
          <>
            <TextInput
              icon={<FaUser />}
              type="text"
              placeholder="Your username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <div style={{ position: 'relative' }}>
              <TextInput
                icon={<FaLock />}
                type={showPassword ? "text" : "password"} 
                placeholder="Your password"
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
                {showPassword ? <FaEyeSlash /> : <FaEye />} 
              </div>
            </div>
            <SubmitButton type="submit">Login</SubmitButton>
            <ForgotPasswordText onClick={() => setShowForgotPassword(true)}>
              Forgot password?
            </ForgotPasswordText>
          </>
        )}
      </FormContainer>
    </Overlay>
  );
};

export default LoginAdminForm;

