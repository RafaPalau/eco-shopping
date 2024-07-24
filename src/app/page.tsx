import Banner from "./components/Banner/Banner";
import Container from "./components/Container";

export default function Home() {
  return (
    <div className="p-6">
      <Container>
        <div>
          <Banner />
        </div>
      </Container>
    </div>
  )
}
