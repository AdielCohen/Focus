from django.http import JsonResponse
from django.shortcuts import render        
from django.http import HttpResponse

from django.views.decorators.csrf import csrf_exempt

from focus.services import db_service

# **** dev-fin-page ****
async def getFromDB(request, dep):

  query = "SELECT * FROM employees WHERE department = {};"

  datas = await db_service.DBService.execute_query(query, str(dep))

  data_dicts = []
              
  for data in datas:
      data_dict = {
          'id': data[0],
          'name': data[1],
          'age': data[2],
          'senior': data[3],
          'favoriteColor': data[4],
          'department': data[5],
      }
      data_dicts.append(data_dict)

  return data_dicts


async def getData(request, dep):
    
  if request.method == "GET":
    res = await getFromDB(request, dep)
    
  return JsonResponse({"data" : res})
