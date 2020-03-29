import React, { useEffect, useState, memo } from "react";
import axios from "axios";
import { Col, Row, Table } from "react-bootstrap";

const GlobalProvince = () => {
  const [korban, setKorban] = useState([]);

  useEffect(() => {
    axios
      .get("https://api.kawalcorona.com/")
      .then(res => setKorban(res.data))
      .catch(console.error);
  }, []);

  return (
    <Row>
      <Col md={12}>
        <h3 className="text-center text-uppercase text-color-orange mb-4">
          dunia
        </h3>
      </Col>
      <Col md={12}>
        <Table hover borderless striped responsive>
          <thead>
            <tr>
              <th>#</th>
              <th className="text-uppercase">negara</th>
              <th className="text-uppercase">positif</th>
              <th className="text-uppercase">sembuh</th>
              <th className="text-uppercase">meninggal</th>
            </tr>
          </thead>
          <tbody>
            {korban.map((item, index) => (
              <tr key={item.attributes.OBJECTID}>
                <td>{index + 1}</td>
                <td>{item.attributes.Country_Region}</td>
                <td>{item.attributes.Confirmed}</td>
                <td>{item.attributes.Recovered}</td>
                <td>{item.attributes.Deaths}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Col>
    </Row>
  );
};

export default memo(GlobalProvince);
