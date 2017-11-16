## Code Share Crawler, SBCrawlpy v.0.0.1

import sys
import requests
import re
from urllib.request import urlopen
import urllib.error
import json
import wget
import time



print("Input month (01-12) >> ")
month = input()
print("Input day (01-31) >> ")
day = input()
print("Input year (2016+) >> ")
year = input()

print("Input start hour (0-23) >> ")
hour1 = input()
print("Input end hour (no more than 6 higher) >> ")
hour2 = input()

print("Input 3-letter departure airport code (e.g. LAX, FRA) >> ")
depAirportCode = input()

print("Input 3-letter arrival airport code (e.g. LAX, FRA) >> ")
arrAirportCode = input()
print("Input 2-letter airline code (e.g, UA, LH, LX, VX) >> ")
airlineCode = input()

print("Let's find code shares for the flights arriving on " + month + "/" + day + "/" + year + " from " + depAirportCode + " to " + arrAirportCode + " on " + airlineCode + " airline!")


url = "https://api.flightstats.com/flex/schedules/rest/v1/json/from/" + depAirportCode + "/to/" + arrAirportCode + "/departing/" + year + "/" + month + "/" + day + "?appId=953a89db&appKey=f4a03644fbcfd64e69d0d12ed23b55f9"

print(url)

req = urllib.request.Request(url)

r = urlopen(req).read()
cont = json.loads(r.decode('utf-8'))
counter = 0
i = 0

### Testing for this...
for i in range(len(cont["scheduledFlights"][0]["codeshares"])):
	print("Code Share: ", cont["scheduledFlights"][0]["codeshares"][i]["carrierFsCode"], " Flight Number ", cont["scheduledFlights"][0]["codeshares"][i]["flightNumber"])
	i += 1


# print("Flights arriving at " + airportCode)

for item in cont['scheduledFlights']:
# for item in range(0,4):
	csct = 0
	
	print("Carrier Code: ", item['carrierFsCode'], " Flight Number: ", item['flightNumber'])
	print("Arriving From: ", item['departureAirportFsCode'])
	print("Is Code Shared w/ other airlines: ", item['isCodeshare'])
	print('----')
	for csct in range(len(cont["scheduledFlights"][counter]["codeshares"])):
		print("\tCode Share AL Code: ", cont['scheduledFlights'][counter]["codeshares"][csct]['carrierFsCode'], "Flight Number: ", cont['scheduledFlights'][counter]['codeshares'][csct]['flightNumber'])
		csct += 1
	print('\n')

	counter += 1
	

"""
print("Num Flights: ", csct)
"""
