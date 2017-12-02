#!/bin/bash

#Run this script in the kafka bin folder for linux/mac OS.

for topic in {responseTopic,userTopic,carTopic,flightTopic,hotelTopic,bookingTopic}; do kafka-topics.sh --create --zookeeper localhost:2181 --replication-factor 1 --partitions 1 --topic $topic; done
