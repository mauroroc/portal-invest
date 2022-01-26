import { Container } from "react-bootstrap";
import Layout from "../../Components/Layout";
import GridTicker from "../../Components/GridTicker";


function Home() {
  return (
        <Layout>
          <Container fluid>
            <GridTicker />
          </Container>
        </Layout>
  );
}

export default Home;