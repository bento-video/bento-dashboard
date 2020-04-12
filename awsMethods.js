const AWS = require('aws-sdk');
const uuid = require('uuid');
AWS.config.update({ region: 'us-east-1' });
const ddb = new AWS.DynamoDB();
const UPLOAD_BUCKET = "node-sdk-sample-59e2f7ad-859a-48a9-9eb6-72b28721bbf2";
const bytes = require('bytes');
const fs = require('fs');
const { extname } = require('path');
const dim = require("get-video-dimensions");


const writeVideoToDB = (name, version, size, resW, resH) => {
  /*   const size = bytes(sizeInBytes, { decimalPlaces: 1, unitSeparator: ' ' })
    const extension = extname(name);
    const version = uuid.v4();
    const wh = getResolution(data, extension);
    console.log("wh variable: ", wh); */
  //const res = `${wh[0]}x${wh[1]}`;
  const resolution = `${resW}x${resH}`;

  const params = {
    TableName: 'BentoVideos',
    Item: {
      'name': { S: name },
      'version': { S: version },
      'status': { S: "original" },
      'size': { S: size },
      'resolution': { S: resolution },
      'versions': { S: '1' }
    }
  };

  ddb.putItem(params, (err, data) => {
    if (err) {
      console.log("Error", err);
    } else {
      console.log("Success", data);
    }
  });
}



const getResolution = async (params) => {
  const tmpPath = `/tmp/video${params.ext}`;
  fs.writeFileSync(tmpPath, params.data);

  dim(tmpPath, params, (resW, resH, db) => {
    db.writer(db.name, db.version, db.size, resW, resH);
  });

  //console.log("yeay: ", resolution);
}

const initDbWrite = (name, byteSize, data) => {
  const size = bytes(byteSize, { decimalPlaces: 1, unitSeparator: ' ' })
  const ext = extname(name);
  const version = uuid.v4();
  const writer = writeVideoToDB;
  const params = { name, size, data, ext, version, writer };  //dbinfo in dim function, db in callback on line 17
  getResolution(params);
}

module.exports = {
  bentoS3Upload: (video, callback) => {
    const { name, data, size } = video;
    const objectParams = { Bucket: UPLOAD_BUCKET, Key: name, Body: data };
    const uploadPromise = new AWS.S3().putObject(objectParams).promise();

    uploadPromise.then((data) => {
      console.log(`Successfully uploaded ${name} to ${UPLOAD_BUCKET} bucket`);
    }).then(() => {
      // here, after video is uploaded to s3, we will add it to the db.
      // after that completes successfully, we should try to add something like a pop-up,
      // that will notify user that video has completed and they can refresh home to see.
      initDbWrite(name, size, data);
      callback();
    })
      .catch((err) => {
        console.log("failed to upload video to s3");
        console.log("ERROR: ", err);
      });
  },


  allDBVideos: (callback) => {
    var params = {
      TableName: 'BentoVideos'
    };

    ddb.scan(params, function (err, data) {
      if (err) {
        console.log("Error", err);
        callback();
      } else {
        const records = data.Items.map((e) => {
          return ({ name: e.name.S, size: e.size.S, resolution: e.resolution.S, versions: e.versions.S });
        });
        console.log("From aws module: ", records);
        callback(records);
      }
    });
  },

  singleDBVideo: (id, callback) => {
    const version = `${id}`;
    console.log(version);
    var params = {
      TableName: 'BentoVideos',
      Key: {
        'version': { S: version },
        'status': { S: "original" }
      }
    };

    // Call DynamoDB to read the item from the table
    ddb.getItem(params, function (err, data) {
      if (err) {
        console.log("Error", err);
      } else {
        console.log("Success", data.Item);
        callback(data.Item);
      }
    });
  }
}


/* schema
{
  version: uuid,
    status: original | pending | complete,
      name: String,
        resolution: String,
          size: String,
          versions: num
} */
