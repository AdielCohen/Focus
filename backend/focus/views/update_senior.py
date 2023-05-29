from django.http import JsonResponse
from django.shortcuts import render        
from django.http import HttpResponse

import asyncio
import json

from asgiref.sync import async_to_sync, sync_to_async
from django.views.decorators.csrf import csrf_exempt

from focus.services import db_service

# **** update_senior ****

# Update from db is senior
async def updateDB(id, is_senior):

  # Update is senior
  query = "UPDATE employees SET is_senior = '{}' WHERE id = '{}';"
  
  # update color in emplyees using sql query
  data = await db_service.DBService.execute_query(query, [is_senior, id])

  return 'success'

@sync_to_async
@csrf_exempt
@async_to_sync
async def updateSenior(request, id):
  if request.method == "POST":

    data = request.body
  
    print(data)
    decoded_data = data.decode('utf-8')  # Decode the byte string to a regular string
    json_data = json.loads(decoded_data)  # Parse the string as a JSON object

    is_senior = json_data['rank']

    print(is_senior)

    res = await updateDB(id, is_senior)

  return JsonResponse({"data" : res})



