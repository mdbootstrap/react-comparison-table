import React from "react";
import {
  MDBContainer,
  MDBIcon,
  MDBTable,
  MDBTableBody,
  MDBTableHead,
} from "mdb-react-ui-kit";

export default function Basic() {
  return (
    <MDBContainer className="py-5">
      <MDBTable
        responsive
        striped
        className=" text-successtable-border border-light"
      >
        <MDBTableHead className="border-light">
          <tr>
            <th scope="col"></th>
            <th scope="col">
              <strong>PRO</strong>
            </th>
            <th scope="col">
              <strong>Basic</strong>
            </th>
          </tr>
        </MDBTableHead>
        <MDBTableBody>
          <tr>
            <th scope="row">Domain customization </th>
            <td>
              <MDBIcon fas icon="check" className="text-success" />
            </td>
            <td>
              <MDBIcon fas icon="times" className="text-danger" />
            </td>
          </tr>
          <tr>
            <th scope="row">FTP</th>
            <td>
              <MDBIcon fas icon="check" className="text-success" />
            </td>
            <td>
              <MDBIcon fas icon="check" className="text-success" />
            </td>
          </tr>
          <tr>
            <th scope="row">Database</th>
            <td>
              <MDBIcon fas icon="check" className="text-success" />
            </td>
            <td>
              <MDBIcon fas icon="times" className="text-danger" />
            </td>
          </tr>
          <tr>
            <th scope="row">Support</th>
            <td>
              <MDBIcon fas icon="check" className="text-success" />
            </td>
            <td>
              <MDBIcon fas icon="check" className="text-success" />
            </td>
          </tr>
          <tr>
            <th scope="row">Backups</th>
            <td>
              <MDBIcon fas icon="check" className="text-success" />
            </td>
            <td>
              <MDBIcon fas icon="times" className="text-danger" />
            </td>
          </tr>
        </MDBTableBody>
      </MDBTable>
    </MDBContainer>
  );
}
