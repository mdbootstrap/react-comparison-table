import React from "react";
import { MDBBtn, MDBContainer } from "mdb-react-ui-kit";
import { Link } from "react-router-dom";

function App() {
  return (
    <MDBContainer className="d-flex justify-content-center">
      <Link to="/Basic">
        <MDBBtn className="ms-3 mt-3">Basic</MDBBtn>
      </Link>
      <Link to="/Pricing">
        <MDBBtn className="ms-3 mt-3">Pricing</MDBBtn>
      </Link>
      <Link to="/Extended">
        <MDBBtn className="ms-3 mt-3">Extended</MDBBtn>
      </Link>
      <Link to="/Advanced">
        <MDBBtn className="ms-3 mt-3">Advanced</MDBBtn>
      </Link>
      <Link to="/Card">
        <MDBBtn className="ms-3 mt-3">Card</MDBBtn>
      </Link>
    </MDBContainer>
  );
}

export default App;
