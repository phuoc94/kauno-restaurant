import { Paper } from '@mui/material';
import React from 'react';
import { Container } from 'react-bootstrap';

const FloatFooterBar = () => {
  return (
    <div className="float-footer-bar w-100">
      <div className="py-3 bg-culture">
        <Container className="d-flex justify-content-end">
          <button
            className="button-primary text-uppercase text-nowrap"
            data-glf-cuid="1f9b655f-fd45-4b5d-9cb4-30d6d24fb65d"
            data-glf-ruid="bd207f57-4862-4324-9bd5-b695ce16c038"
          >
            <span className="button">Tilaa</span>
          </button>
        </Container>
      </div>
    </div>
  );
};

export default FloatFooterBar;
