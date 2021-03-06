const createClient = require('@rabblerouser/stream-client');
const config = require('./config');

const streamClientSettings = {
  publishToStream: config.eventStream.streamName,
  listenWithAuthToken: config.eventStream.listenerAuthToken,
  readArchiveFromBucket: config.eventStream.archiveBucket,

  region: config.eventStream.region,
  accessKeyId: config.eventStream.accessKeyId,
  secretAccessKey: config.eventStream.secretAccessKey,

  kinesisEndpoint: config.eventStream.kinesisEndpoint,
  s3Endpoint: config.eventStream.s3Endpoint,
};

module.exports = createClient(streamClientSettings);
