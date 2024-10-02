import s from "./Card.module.css";

export const Card = ({ image, title, description }) => {
  return (
    <div className={s.card}>
      <div className={s.image}>{image}</div>
      <div className={s.title}>{title}</div>
      <div>{description}</div>
    </div>
  );
};
