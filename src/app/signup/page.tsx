import Container from "../components/Container";
import FormWrap from "../components/FormWrap";

import SignUpForm from "./SignUpForm";

const SignUpPage = () => {
  return (
    <Container>
      <FormWrap>
        <SignUpForm />
      </FormWrap>
    </Container>
  );
};

export default SignUpPage;
