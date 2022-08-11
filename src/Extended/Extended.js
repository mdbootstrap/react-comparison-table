import React from "react";
import {
  MDBBtn,
  MDBContainer,
  MDBIcon,
  MDBTable,
  MDBTableBody,
  MDBTableHead,
} from "mdb-react-ui-kit";

export default function Extended() {
  return (
    <MDBContainer className="py-5 text-center">
      <MDBTable
        responsive
        striped
        className="text-successtable-border border-light"
      >
        <MDBTableHead className="border-light">
          <tr>
            <th scope="col"></th>
            <th scope="col">
              <strong>Basic</strong>
            </th>
            <th scope="col">
              <strong>Standard</strong>
            </th>
            <th scope="col">
              <strong>Premium</strong>
            </th>
            <th scope="col">
              <strong>Managed</strong>
            </th>
          </tr>
        </MDBTableHead>
        <MDBTableBody>
          <tr>
            <th scope="row">HDD Storage</th>
            <td>700 MB</td>
            <td>1,5 GB</td>
            <td>50 GB</td>
            <td>up to 5T</td>
          </tr>
          <tr>
            <th scope="row">Web Server</th>
            <td>
              <MDBIcon fas icon="check" />
            </td>
            <td>
              <MDBIcon fas icon="check" />
            </td>
            <td>
              <MDBIcon fas icon="check" />
            </td>
            <td>
              <MDBIcon fas icon="check" />
            </td>
          </tr>
          <tr>
            <th scope="row">Database</th>
            <td>-</td>
            <td>Optional</td>
            <td>
              <MDBIcon fas icon="check" />
            </td>
            <td>
              <MDBIcon fas icon="check" />
            </td>
          </tr>
          <tr>
            <th scope="row">DNS</th>
            <td>-</td>
            <td>-</td>
            <td>
              <MDBIcon fas icon="check" />
            </td>
            <td>
              <MDBIcon fas icon="check" />
            </td>
          </tr>
          <tr>
            <th scope="row">Backups</th>
            <td>-</td>
            <td>-</td>
            <td>
              <MDBIcon fas icon="check" />
            </td>
            <td>
              <MDBIcon fas icon="check" />
            </td>
          </tr>
          <tr>
            <th scope="row">Tech Support</th>
            <td>None</td>
            <td>35$/incident</td>
            <td>15$/incident</td>
            <td>24/7 included</td>
          </tr>
          <tr>
            <td></td>
            <td className="fw-bold">Free</td>
            <td className="fw-bold">$99/mo</td>
            <td className="fw-bold">$179/mo</td>
            <td className="fw-bold">
              <a href="#">Contact us</a>
            </td>
          </tr>
          <tr>
            <th></th>
            <th>
              <MDBBtn>Sign-up</MDBBtn>
            </th>
            <th>
              <MDBBtn>Buy Now</MDBBtn>
            </th>
            <th>
              <MDBBtn>Buy Now</MDBBtn>
            </th>
          </tr>
        </MDBTableBody>
      </MDBTable>
    </MDBContainer>
  );
}
