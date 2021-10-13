const Card = ({ date, title, body }) => {
  return (
    <div className={style.card}>
      <div className={style.cardHeader}>
        <p>{title}</p>
        <p>{date}</p>
      </div>
      <div>
        <p>{body}</p>
      </div>
    </div>
  );
};

export default Card;
