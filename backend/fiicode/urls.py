from django.urls import path, include
from . import views

urlpatterns = [
    #files
    path('files/upload/', views.upload_file),
]