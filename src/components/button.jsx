import "../App.css";

function Button({ value }) {
  return (
    <>
      <input class="button" type="button" {...value} />
    </>
  );
}

export default Button;
