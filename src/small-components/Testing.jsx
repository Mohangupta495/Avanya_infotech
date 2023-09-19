import React, { useState } from 'react';

function UpdateData() {
  const [dataToUpdate, setDataToUpdate] = useState('');
  const [responseMessage, setResponseMessage] = useState('');

  const handleInputChange = (e) => {
    setDataToUpdate(e.target.value);
  };

  const handlePutRequest = () => {
    // Define the API endpoint where you want to send the PUT request
    const apiUrl = 'http://lb-isyncdrive-web-dev-1540343319.ap-south-1.elb.amazonaws.com:80/isync/app/v1/token/';
    // Create the request body
    var csrf = '{{ csrf_token }}';
    var param = {
        csrfmiddlewaretoken : csrf,
        deviceId : 'DEVICEID1',
        deviceName : 'DEVICENAME1',
        deviceType : 'web',
        ua : 'Postman',
        accessTokenId : 'token'
  }
    const requestBody = {
      data: param,
    };

    // Send the PUT request using the fetch API
    fetch(apiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(requestBody),
    })
      .then((response) => response.json())
      .then((data) => {
        setResponseMessage(`PUT request successful. Response: ${JSON.stringify(data)}`);
      })
      .catch((error) => {
        setResponseMessage(`Error: ${error.message}`);
      });
  };

  return (
    <div>
      <h1>Update Data</h1>
      {/* <label>
        Data to Update:
        <input type="text" value={dataToUpdate} onChange={handleInputChange} />
      </label> */}
      <button onClick={handlePutRequest}>Update Data</button>
      <div>{responseMessage}</div>
    </div>
  );
}

export default UpdateData;
