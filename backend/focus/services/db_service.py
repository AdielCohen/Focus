import asyncio
from concurrent.futures import ThreadPoolExecutor
from django.db import connection

class DBService:

    @staticmethod
    async def execute_query(sql, values):
       
        loop = asyncio.get_event_loop()
        executor = ThreadPoolExecutor()

        # Set up the query
        if(values==None):
            exp = sql
        else:
            exp = sql.format(*values)
      
        def run_query():
            with connection.cursor() as cursor:
                cursor.execute(exp)
                results = cursor.fetchall()
            return results
        
        results = await loop.run_in_executor(executor, run_query)

        return results