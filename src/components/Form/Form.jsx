import s from "./Form.module.css";

export const Form = ({value, onChange}) => {
  return (
    <div>
      <form className={s.form} action="">
        <label className={s.formLabel} htmlFor="name">Search</label>
        <input 
          className={s.input}  
          type="text" 
          id="search" 
          placeholder="Placeholder" 
          value = {value}
          onChange = {onChange}
            />
      </form>
    </div>
  );
};
