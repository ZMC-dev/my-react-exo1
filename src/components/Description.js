const Description = (props) => {
  console.log(props);

  return (
    <p className="description">
      {props.text}
    </p>
  );
};

export default Description;