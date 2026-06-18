Running RabbitMQ with Docker 

docker run -d \ 
 --name rabbitmq \ 
 -p 5672:5672 \ 
 -p 15672:15672 \ 
 rabbitmq:3-management 

Management UI: 

http://localhost:15672 

Credentials: 

guest 
guest 