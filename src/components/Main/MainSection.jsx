import { UserForm } from "../UserForm/UserForm";
import { UserTable } from "../UserTable/UserTable";
import css from "./MainSection.module.css";

export const MainSection = () => {
  return (
    <div className={css.containerMain}>
      <UserForm />
      <UserTable />
    </div>
  );
};
