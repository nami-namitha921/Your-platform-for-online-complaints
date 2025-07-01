import React from 'react';
import { MDBFooter } from 'mdb-react-ui-kit';

export default function FooterC() {
  return (
    <MDBFooter style={{ height: '112px', marginTop: '101px', backgroundColor: '#0D47A1' }} className='text-center text-lg-left'>
      <div className='text-center p-3'>
        <p className='text-light footer-title'>ResolveNow</p>
        <p className='text-light footer-year'>&copy; {new Date().getFullYear()}</p>
      </div>
    </MDBFooter>
  );
}
