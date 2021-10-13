const Card = ({ date, title, body }) => {
  return (
    <div style={{border:"1px solid black", width:"300px", textAlign:"center", padding:"10px", borderRadius:"8px", marginLeft:"300px", marginTop:"20px"}}>
      <div>
        <p>DATE : {date}</p>
        <p>TITLE : {title}</p>
      </div>
      <div>
        <p>NOTE : {body}</p>
      </div>
    </div>
  );
};

export default Card;
