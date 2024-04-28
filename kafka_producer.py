from kafka import KafkaProducer
import json
import time
import random
from faker import Faker

producer = KafkaProducer(bootstrap_servers='localhost:9092', value_serializer=lambda v: json.dumps(v).encode('utf-8'))

topic_name = 'test1'
fake = Faker()

while True:
    # Generating real time Random Data
    co2_data = {
        'source': random.choice(['Factory', 'Vehicle', 'Power Plant', 'Agriculture', 'Construction', 'Shipping', 'Deforestation']),
        'co2_level': random.randint(300, 1000),  # 300 and 1000 ppm
        'location': fake.country(),  
        'timestamp': time.strftime('%Y-%m-%d %H:%M:%S')
    }
    
    #converting the dictionary into JSON format 
    json_co2_data = json.dumps(co2_data)

    producer.send(topic_name, value=json_co2_data)
    print(f"Produced: {json_co2_data}")
    time.sleep(3)

producer.close()
