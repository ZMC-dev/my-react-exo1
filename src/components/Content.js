//components
import Title from "./Title";

import Description from "./Description";

const Content = (props) => {
  console.log(props);
  return (
    <div className="content">
      <Title name={props.title} />
      <Description text={props.description}/>
  
    </div>
  );
};

export default Content;