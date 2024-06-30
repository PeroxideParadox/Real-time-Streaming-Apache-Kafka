# Real-time-Streaming-Apache-Kafka
Our project utilizes Kafka to simulate real-time CO2 emission data generation and processing. We implemented a producer code using Faker to generate random CO2 emission data, which is then ingested into Kafka topics. A consumer code retrieves this data from Kafka and stores it in a CSV file. We have developed an API that reads the CSV data, converts it into JSON format, and serves it to a web interface. The web interface uses graphical representations to visualize the real-time CO2 emission data. To ensure up-to-date information, the API is called every few seconds, refreshing the data on the web interface dynamically.
This will help in Air Quality Management , Environmental Monitoring and Compliance etc. This project demonstrates the end-to-end process of data generation, ingestion, processing, and visualization, showcasing the capabilities of Kafka for real-time data streaming applications.