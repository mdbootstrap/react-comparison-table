![MDB Logo](https://mdbootstrap.com/img/Marketing/general/logo/medium/mdb-react.png)

# MDB React 5

Responsive comparison table templates built with Bootstrap 5. Various examples like comparison table on pricing page, comparison card, product comparison & more.

Check out [React Comparison table Documentation](https://mdbootstrap.com/docs/react/extended/comparison-table) for detailed instructions & even more examples.

## Basic example
![React Comparison table Basic Example](https://user-images.githubusercontent.com/108793661/184127659-a3a1ee98-d528-4625-af7b-3696112db480.png)
```js
import React from "react";
import {
  MDBContainer,
  MDBIcon,
  MDBTable,
  MDBTableBody,
  MDBTableHead,
} from "mdb-react-ui-kit";

export default function App() {
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

```

## How to use?

1. Download MDB 5 - free REACT UI KIT

2. Choose your favourite customized component and click on the image

3. Copy & paste the code into your MDB project

[▶️ Subscribe to YouTube channel for web development tutorials & resources](https://www.youtube.com/MDBootstrap?sub_confirmation=1)

## More examples
### Comparison on pricing:
[![React Comparison table #1](https://user-images.githubusercontent.com/108793661/184127943-1cbad596-933e-4e88-a66f-2961f612c9f3.png)](https://mdbootstrap.com/docs/react/extended/comparison-table/#comparison-pricing)

### Extended comparison table:
[![React Comparison table #2](https://user-images.githubusercontent.com/108793661/184128145-c902ce89-89dd-4fb5-8bc8-358d9486e400.png)](https://mdbootstrap.com/docs/react/extended/comparison-table/#comparison-table-extended)

You can find other examples [here](https://mdbootstrap.com/docs/react/extended/comparison-table).

<hr>

## More extended React documentation
<ul>
<li><a href="https://mdbootstrap.com/docs/react/extended/code/">React Bootstrap Code</a></li>
<li><a href="https://mdbootstrap.com/docs/react/extended/gallery/">React Bootstrap Gallery</a></li>
<li><a href="https://mdbootstrap.com/docs/react/extended/hamburger-menu/">React Bootstrap Hamburger Menu</a></li>
<li><a href="https://mdbootstrap.com/docs/react/extended/jumbotron/">React Bootstrap Jumbotron</a></li>
<li><a href="https://mdbootstrap.com/docs/react/extended/maps/">React Bootstrap Maps</a></li>
<li><a href="https://mdbootstrap.com/docs/react/extended/mega-menu//">React Bootstrap Mega Menu</a></li>
<li><a href="https://mdbootstrap.com/docs/react/extended/media-object/">React Bootstrap Media object</a></li>
<li><a href="https://mdbootstrap.com/docs/react/extended/multiselect/">React Bootstrap Multiselect</a></li>
<li><a href="https://mdbootstrap.com/docs/react/extended/masonry/">React Bootstrap Masonry</a></li>
<li><a href="https://mdbootstrap.com/docs/react/extended/contact/">React Bootstrap Contact form</a></li>
<li><a href="https://mdbootstrap.com/docs/react/extended/gradients/">React Bootstrap Gradients</a></li>
<li><a href="https://mdbootstrap.com/docs/react/extended/pagination/">React Bootstrap Pagination</a></li>
<li><a href="https://mdbootstrap.com/docs/react/extended/panels/">React Bootstrap Panels</a></li>
<li><a href="https://mdbootstrap.com/docs/react/extended/social-media/">React Bootstrap Social Media icons & buttons</a></li>
<li><a href="https://mdbootstrap.com/docs/react/extended/search/">React Bootstrap Search</a></li>
<li><a href="https://mdbootstrap.com/docs/react/extended/table-sort/">React Bootstrap Table sort</a></li>
<li><a href="https://mdbootstrap.com/docs/react/extended/table-responsive/">React Bootstrap Table responsive</a></li>
<li><a href="https://mdbootstrap.com/docs/react/extended/table-scroll/">React Bootstrap Table scroll</a></li>
<li><a href="https://mdbootstrap.com/docs/react/extended/table-search/">React Bootstrap Table search</a></li>
<li><a href="https://mdbootstrap.com/docs/react/extended/textarea/">React Bootstrap Textarea</a></li>
<li><a href="https://mdbootstrap.com/docs/react/extended/sidebar/">React Bootstrap Sidebar</a></li>
<li><a href="https://mdbootstrap.com/docs/react/extended/profiles/">React Bootstrap Profiles</a></li>
<li><a href="https://mdbootstrap.com/docs/react/extended/dropdown-multilevel/">React Bootstrap Nested Dropdown</a></li>
<li><a href="https://mdbootstrap.com/docs/react/extended/bootstrap-address-form/">React Bootstrap Address Form</a></li>
<li><a href="https://mdbootstrap.com/docs/react/extended/back-to-top">React Scroll Back to Top button</a></li>
<li><a href="https://mdbootstrap.com/docs/react/extended/product-cards">React Product Cards</a></li>
<li><a href="https://mdbootstrap.com/docs/react/extended/avatar">React Avatar</a></li>
<li><a href="https://mdbootstrap.com/docs/react/extended/carousel-with-thumbnails">React Carousel Slider with Thumbnails</a></li>
<li><a href="https://mdbootstrap.com/docs/react/extended/chat">React Chat</a></li>
</ul>

