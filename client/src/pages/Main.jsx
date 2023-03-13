import styled from "styled-components";
import Navbar from "../components/Navbar";
import CallLogTable from "../components/CallLogTable";
const Container = styled.div`
  height: 100vh;
`

const App = () => {
  return (
    <Container>
          <Navbar/>
          <CallLogTable/>
    </Container>
  )
}

export default App;
