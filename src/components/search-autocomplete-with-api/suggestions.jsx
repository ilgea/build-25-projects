const Suggestion = ({ data, handleClick }) => {
  return (
    <ul style={{ listStyle: "none" }}>
      {data && data.length
        ? data.map((item, index) => (<li onClick={handleClick} key={index}>{item}</li>))
        : null}
    </ul>
  );
};

export default Suggestion;
