const kafka = require("./kafka");

const consumer = kafka.consumer({
  groupId: "notification-group"
});

async function consume() {

  await consumer.connect();

  await consumer.subscribe({
    topic: "user-events",
    fromBeginning: true
  });

  await consumer.run({
    eachMessage: async ({ topic, partition, message }) => {

      console.log({
        topic,
        partition,
        value: message.value.toString()
      });

    }
  });
}

consume();