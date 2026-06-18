const amqp = require("amqplib");

async function consumeMessage() {
    try {

        const connection = await amqp.connect(
            "amqp://guest:guest@localhost:5672"
        );

        const channel = await connection.createChannel();

        const queue = "rabbitmq_test_queue";

        await channel.assertQueue(queue, {
            durable: true
        });

        console.log("Waiting for messages...");

        channel.consume(
            queue,
            (msg) => {

                const data = JSON.parse(
                    msg.content.toString()
                );

                console.log("Received:", data);

                channel.ack(msg);
            },
            {
                noAck: false
            }
        );

    } catch (error) {
        console.error(error);
    }
}

consumeMessage();