from django.http import JsonResponse
from django.shortcuts import render        
from django.http import HttpResponse

import asyncio
import json

from asgiref.sync import async_to_sync, sync_to_async
from django.views.decorators.csrf import csrf_exempt

from focus.services import db_service

# **** get_color ****

# Get from db colors
async def getFromDB(request):
  query = "SELECT name FROM colors;"
  # Get in data the colors using the query
  data = await db_service.DBService.execute_query(query, '')
  return data


# Update from db colors
async def updateDB(id, new_color):
  query = "UPDATE employees SET favorite_color = '{}' WHERE id = '{}';"
  
  # update color in emplyees using sql query
  data = await db_service.DBService.execute_query(query, [new_color, id])

  return 'success'


# Main function
async def getColor(request): 
  #  wait for get requests
  if request.method == "GET":
    res = await getFromDB(request)
    
  return JsonResponse({"data" : res})


@sync_to_async
@csrf_exempt
@async_to_sync
async def updateColor(request, id):
  if request.method == "POST":

    data = request.body
  

    decoded_data = data.decode('utf-8')  # Decode the byte string to a regular string
    json_data = json.loads(decoded_data)  # Parse the string as a JSON object

    new_color = json_data['newColor']


    res = await updateDB(id, new_color)

  return JsonResponse({"data" : res})



