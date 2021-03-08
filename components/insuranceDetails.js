import React, { useState, useEffect } from 'react';
var $  = require( 'jquery' );
require("datatables.net");
// var dt = require( 'datatables.net' )();

$('#example').DataTable();
$(document).ready(function() {
  $('#example').DataTable({
    lengthChange: false,
  });
} );


function Insurance(props) {
  const [user, setUser] = useState([]);
  var rows = [];
  for (var i = 0; i < 100; i++) {
    rows.push( <tr key={i}> 
      <td>{i+1}</td>
      <td>Lorem ispum</td>
      <td>214567</td>
      <td>25 June 2020</td>
      <td>$250000.00</td>
      <td>https://www.google.com/maps</td>
      <td>No</td>
      <td>Active</td>
      <td>15 Jan 2021</td>
  </tr>);
}
  return (
    <table className="table table-striped table-bordered insuranceDetails"  id="example" style={{width:"100%"}}>
        <thead>
          <tr>
            <th>#No</th>
            <th>Provider</th>
            <th>Insurance number</th>
            <th>Effective Date</th>
            <th>Premium(annual)</th>
            <th>Provider URL</th>
            <th>Renewed</th>
            <th>Status</th>
            <th>Reminder Date</th>
          </tr>
        </thead>
       <tbody>
        {rows}
    </tbody>
  </table>
  );
}

export default Insurance;