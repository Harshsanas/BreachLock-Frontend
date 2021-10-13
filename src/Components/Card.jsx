const Card = ({ date, title, body }) => {
  return (
    <div>
      <div>
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
