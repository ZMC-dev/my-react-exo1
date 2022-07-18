const Title = (props) => {
  console.log(props);

  return (
    <h2 className="title">
      {props.name}
    </h2>
  );
};

export default Title;