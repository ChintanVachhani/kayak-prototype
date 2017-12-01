@echo off
rem Run this script in the kakfa bin\windows folder for WindowsOS.

set topics=responseTopic userTopic carTopic flightTopic hotelTopic bookingTopic
(for %%t in (%topics%); do .\kafka-topics.bat --create --zookeeper localhost:2181 --replication-factor 1 --partitions 1 --topic %%t)
