const amqp = require("amqplib");

async function publishMessage() {
    try {
        const connection = await amqp.connect(
            "amqp://guest:guest@localhost:5672"
        );

        const channel = await connection.createChannel();

        const queue = "rabbitmq_test_queue";

        await channel.assertQueue(queue, {
            durable: true
        });

        const message = {
            message: "This is a message from the publisher!",
            timestamp: new Date()
        };

        channel.sendToQueue(
            queue,
            Buffer.from(JSON.stringify(message)),
            {
                persistent: true
            }
        );

        console.log("Published:", message);

        setTimeout(() => {
            connection.close();
        }, 500);

    } catch (error) {
        console.error(error);
    }
}

publishMessage();