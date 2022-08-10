// import css from "Email.module.scss";
import { useState } from "react";
import { useTranslation } from "react-i18next";

export default function Email() {
  const { t } = useTranslation();
  const [email, setEmail] = useState("");
  return (
    <div>
      <label>
        {t("login.email")}
        <input
          type="email"
          placeholder={t("login.placeholder_email")}
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </label>
    </div>
  );
}
