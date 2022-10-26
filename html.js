const html = ({}) => {
  const msg = "If you have any comments please reply above the line.";
  const str = ".......................................................";
  return `
  
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Klearnow</title>
      <style>
          table,
          th,
          td {
              border: 2px solid #015c7b
          }
          .heads {
              font-family: Sans-serif;
              background: #015C7B;
              color: #fff !important;
              text-align: center !important;
              font-weight: 400;
          }
          table {
              width: 60%;
              border-collapse: collapse;
          }
          th {
              text-align: left;
              padding: 5px;
          }
          td {
              width: 50%;
              padding: 5px;
          }
          .btnApr {
              background: #015C7B;
              color: white;
              padding: 5px 34px;
              font-size: medium;
              border: 1px #015C7B;
          }
          .btn {
              cursor: pointer;
              border-radius: 2px;
          }
          .btnRej {
              background: white;
              color: #015C7B;
              padding: 5px 40px;
              font-size: medium;
              border: 1px solid #015c7b
          }
          tr {
              color: #015c7b
          }
          .btnDiv {
              display: flex;
              justify-content: space-around;
              align-items: center;
              width: 60%;
              margin-top: 10px;
          }
      </style>
  </head>
  <body>
      <div style="margin-bottom:30px;">
          <img style="width:234px"
              src="https://ik.imagekit.io/gizcoqrhl/KlearNowLogo.169ab770_jKISez0Y0.png?ik-sdk-version=javascript-1.4.3&updatedAt=1666075050293" />
      </div>
      <table>
          <thead>
              <tr>
                  <th class="heads">TABLE</th>
                  <th class="heads">DATA</th>
              </tr>
          </thead>
          <tbody>
              <tr>
                  <th>Shipment ID</th>
                  <td>KX-J2J1-1213</td>
              </tr>
              <tr>
                  <th>Customer Name</th>
                  <td>Lifestyle</td>
              </tr>
              <tr>
                  <th>PO#</th>
                  <td>234456</td>
              </tr>
              <tr>
                  <th>Bill of Lading</th>
                  <td>EGLCH8836183</td>
              </tr>
              <tr>
                  <th>Container#</th>
                  <td>TKSU8899123</td>
              </tr>
              <tr>
                  <th>Charge Type</th>
                  <td>PORT FEE</td>
              </tr>
              <tr>
                  <th>AP Amount</th>
                  <td>150.0</td>
              </tr>
              <tr>
                  <th>Portal Name</th>
                  <td>Bill.com</td>
              </tr>
              <tr>
                  <th>Vendor Name</th>
                  <td>MID SHIPWAYS</td>
              </tr>
              <tr>
                  <th>Disbursement Fee(Flat)</th>
                  <td>20.0</td>
              </tr>
              <tr>
                  <th>Disbursement Fee(%)</th>
                  <td>0.0</td>
              </tr>
              <tr>
                  <th>References</th>
                  <td>Refer to vendor site</td>
              </tr>
          </tbody>
      </table>
      <div class="btnDiv">
          <a href="mailto:apcustomerapproved-dev@klearnow.com?&subject=Charge%20Approved:105244-66&body=%0A%0A%0A%0A%0AIf you have any comments, Please add above:
          %0ADescription of Charges
          %0A This is Approval for Klearnow %20ShimentId:XXX##,%20For Bill of Lading:%20XXX##,%20Charge Type:%20XXX##
          "><button class="btnApr btn">Approve</button></a>
          <a href="mailto:apcustomerrejected-dev@klearnow.com?&subject=Charge%20Rejected:105244-66&body=%0A%0A%0A%0A%0AIf you have any comments, Please add above:
          %0ADescription of Charges
          %0A This is Rejection for Klearnow %20ShimentId:%20XXX##,%20For Bill of Lading:%20XXX##:,%20Charge Type:%20XXX##
          "><button class="btnRej btn">Reject</button></a>
      </div>
  </body>
  </html>
        `;
};

module.exports = html;
