const kafka = require("./kafka");

const producer = kafka.producer();

async function sendMessage() {

  await producer.connect();

  await producer.send({
    topic: "user-events",
    messages: [
      {
        value: "User Registered"
      }
    ]
  });

  console.log("Message Sent");

  await producer.disconnect();
}

sendMessage();