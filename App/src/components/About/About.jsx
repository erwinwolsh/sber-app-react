import Form from "../Form/Form";

function About() {
  return (
    <div className="container">
      <Form />
      <hr />
    </div>
  );
}

// React.nemo позволяет компонентам не рендериться, если у них что-то не изменилось
export default About;
