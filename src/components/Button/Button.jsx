import { Btn } from "./Batton.styled";

export default function Button({ onClick }) {
  return (
    <Btn type="button" onClick={onClick}>
      Load more
    </Btn>
  );
}
