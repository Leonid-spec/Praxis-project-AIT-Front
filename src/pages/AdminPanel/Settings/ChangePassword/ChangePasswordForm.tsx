import React, { useState } from "react";
import {
  FormContainer,
  Label,
  Input,
  SubmitButton,
  Wrapper,
} from "./styles";

const ChangePasswordForm: React.FC<{ onBack: () => void }> = () => {
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = async () => {
    if (newPassword !== confirmPassword) {
      alert("New password and confirm password do not match.");
      return;
    }

    const response = await fetch("/api/change-password", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ currentPassword, newPassword }),
    });

    const result = await response.json();
    alert(result.message);
  };

  return (
    <Wrapper>
      <FormContainer onSubmit={(e) => e.preventDefault()}>
        <Label>
          Current Password:
          <Input
            type="password"
            value={currentPassword}
            onChange={(e) => setCurrentPassword(e.target.value)}
            placeholder="Enter current password"
          />
        </Label>
        <Label>
          New Password:
          <Input
            type="password"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            placeholder="Enter new password"
          />
        </Label>
        <Label>
          Confirm New Password:
          <Input
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            placeholder="Confirm new password"
          />
        </Label>
        <SubmitButton type="button" onClick={handleSubmit}>
          Change Password
        </SubmitButton>
      </FormContainer>
    </Wrapper>
  );
};

export default ChangePasswordForm;
