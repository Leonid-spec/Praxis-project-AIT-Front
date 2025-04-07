import React, { useState } from "react";
import {
  FormContainer,
  Label,
  Input,
  Checkbox,
  SubmitButton,
  Wrapper,
} from "./styles";

interface AddAdminFormProps {
  onBack: () => void;
}

const AddAdminForm: React.FC<AddAdminFormProps> = () => {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [adminRights, setAdminRights] = useState(false);

  const handleSubmit = async () => {
    const response = await fetch("/api/admins", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ login, password, adminRights }),
    });

    const result = await response.json();
    alert(result.message);
  };

  return (
    <Wrapper>
      <FormContainer onSubmit={(e) => e.preventDefault()}>
        <Label>
          Login:
          <Input
            type="text"
            value={login}
            onChange={(e) => setLogin(e.target.value)}
            placeholder="Enter login"
          />
        </Label>
        <Label>
          Password:
          <Input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter password"
          />
        </Label>
        <Label>
          <Checkbox
            type="checkbox"
            checked={adminRights}
            onChange={(e) => setAdminRights(e.target.checked)}
          />
          Grant Admin Rights
        </Label>
        <SubmitButton type="button" onClick={handleSubmit}>
          Create Admin
        </SubmitButton>
      </FormContainer>
    </Wrapper>
  );
};

export default AddAdminForm;
