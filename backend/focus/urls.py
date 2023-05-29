from django.contrib import admin
from django.urls import path

from focus.views import dev_fin_page
from focus.views import get_color
from focus.views import update_senior

urlpatterns = [
    path('admin/', admin.site.urls),

    path('devFinPage/<int:dep>', dev_fin_page.getData),

    path('getColor/', get_color.getColor),

    path('updateColor/<int:id>/', get_color.updateColor),

    path('updateSenior/<int:id>/', update_senior.updateSenior)
]
