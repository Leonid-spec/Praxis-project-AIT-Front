import React, { useState } from "react";
import "./AddAdminForm.css";


const AddAdminForm: React.FC = () => {
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
    <p>
      {/* <form onSubmit={(e) => e.preventDefault()}>
        <label>
          Login:
          <input type="text" value={login} onChange={(e) => setLogin(e.target.value)} />
        </label>
        <label>
          Password:
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </label>
        <label>
          Admin Rights:
          <input
            type="checkbox"
            checked={adminRights}
            onChange={(e) => setAdminRights(e.target.checked)}
          />
        </label>
        <button type="button" onClick={handleSubmit}>
          Create Admin
        </button>
      </form> */}
    </p>
  );
};

export default AddAdminForm;




// import React, { useState } from "react";
// import { useTranslation } from "react-i18next";
// import { FaUser, FaLock } from "react-icons/fa";
// import ButtonClose from "../../../components/Button/ButtonClose/ButtonClose";
// import SubmitButton from "../../../components/Button/SubmitButton/SubmitButton";
// import Notification from "../../../components/Notification/Notification";
// import TextInput from "../../../components/Input/TextInput";
// import styles from "./AddAdminFormM.module.css";


// const AddAdminForm = ({ onClose, onAdminCreated }: { onClose: () => void; onAdminCreated: () => void }) => {
//   const [username, setUsername] = useState<string>("");
//   const [password, setPassword] = useState<string>("");
//   const [adminRights, setAdminRights] = useState(false);
//   const [notification, setNotification] = useState<{ message: string; type: "error" | "success" } | null>(null);
//   const { t } = useTranslation();

//   const handleCreateAdmin = (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault();

//     // Валидация
//     if (!username.trim() || !password.trim()) {
//       setNotification({ message: t("message.other.addAdmin.errors.missingCredentials"), type: "error" });
//       return;
//     }

//     const adminData = { username, password, adminRights };

//     // Отправка POST-запроса на сервер
//     fetch("/api/admins", {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify(adminData),
//     })
//       .then((res) => res.json())
//       .then((data) => {
//         if (data.success) {
//           setNotification({ message: t("message.other.addAdmin.messages.creationSuccess"), type: "success" });
//           onAdminCreated();
//           onClose();
//         } else {
//           setNotification({ message: data.message || t("message.other.addAdmin.errors.creationFailed"), type: "error" });
//         }
//       })
//       .catch(() => {
//         setNotification({ message: t("message.other.addAdmin.errors.serverError"), type: "error" });
//       });
//   };

//   return (
//     <div className={styles.overlay}>
//       <form className={styles.formContainer} onSubmit={handleCreateAdmin}>
//         <div className={styles.buttonCloseContainer}>
//           <ButtonClose onClick={onClose} />
//         </div>
//         <div className={styles.titleAndSub}>
//           <h2 className={styles.title}>{t("message.other.addAdmin.title")}</h2>
//           <p className={styles.subtitle}>{t("message.other.addAdmin.subtitle")}</p>
//         </div>
//         {notification && (
//           <div className={styles.notificationContainer}>
//             <Notification
//               message={notification.message}
//               type={notification.type}
//               onClose={() => setNotification(null)}
//             />
//           </div>
//         )}
//         <TextInput
//           label={t("message.other.addAdmin.labelUsername")}
//           name="username" // Добавлено обязательное свойство name
//           icon={<FaUser />}
//           placeholder={t("message.other.addAdmin.placeholders.username")}
//           value={username}
//           onChange={(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => setUsername(e.target.value)}
//         />
//         <TextInput
//           label={t("message.other.addAdmin.labelPassword")}
//           name="password" // Добавлено обязательное свойство name
//           icon={<FaLock />}
//           type="password"
//           placeholder={t("message.other.addAdmin.placeholders.password")}
//           value={password}
//           onChange={(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => setPassword(e.target.value)}
//         />
//         <div className={styles.adminRightsContainer}>
//           <input
//             type="checkbox"
//             checked={adminRights}
//             onChange={(e: React.ChangeEvent<HTMLInputElement>) => setAdminRights(e.target.checked)}
//             id="adminRights"
//           />
//           <label htmlFor="adminRights" className={styles.checkboxLabel}>
//             {t("message.other.addAdmin.labelAdminRights")}
//           </label>
//         </div>
//         <SubmitButton type="submit">{t("message.other.addAdmin.button")}</SubmitButton>
//       </form>
//     </div>
//   );
// };

// export default AddAdminForm;



