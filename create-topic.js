const kafka = require("./kafka");

async function createTopic() {
  const admin = kafka.admin();

  await admin.connect();

  await admin.createTopics({
    topics: [
      {
        topic: "user-events",
        numPartitions: 1,
        replicationFactor: 1
      }
    ]
  });

  console.log("Topic Created");

  await admin.disconnect();
}

createTopic();