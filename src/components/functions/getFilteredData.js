const getFilteredData = (data, cameraStatus) => {
  //  create a copy of an object as it points to the
  //same reference if a new object is created
  var tempMyObj = JSON.parse(JSON.stringify(data));

  var data1 = data[0].data;
  // filter out camera
  const cameraStatusFalse = cameraStatus.filter((item) => item.state === false);

  // filter out result from both arrays
  let result = data1.filter(
    (o1) => !cameraStatusFalse.some((o2) => o1.camera_id === o2.name)
  );

  // insert the data value in original object
  tempMyObj[0]["data"] = result;
  return tempMyObj;
};

export default getFilteredData;
