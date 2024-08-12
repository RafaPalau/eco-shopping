import Container from "../components/Container";
import FormWrap from "../components/FormWrap";
import SignInForm from "./SignInForm";

const SignIn = () => {
  return (
    <Container>
      <FormWrap>
        <SignInForm />
      </FormWrap>
    </Container>
  );
};

export default SignIn;
