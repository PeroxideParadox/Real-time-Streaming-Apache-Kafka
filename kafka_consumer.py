from kafka import KafkaConsumer
consumer = KafkaConsumer('test1', bootstrap_servers='localhost:9092', auto_offset_reset='earliest')

for message in consumer:
    print(f"Consumed: {message.value.decode()}")

consumer.close()
