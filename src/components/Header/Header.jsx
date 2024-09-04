import css from "./Header.module.css";
export const Header = () => {
  return (
    <div className={css.containerHeader}>
      <h1 className={css.headerItem}> User Management Table</h1>
    </div>
  );
};
