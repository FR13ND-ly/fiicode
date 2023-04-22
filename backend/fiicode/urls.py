from django.urls import path, include
from . import views

urlpatterns = [
    path('main/', views.main),
    #auth
    path('auth/login/', views.login),
    path('auth/get/<str:uid>/', views.auth),
    #files
    path('files/upload/', views.upload_file),
    #users
    path('users/get/all/', views.get_users),
    path('users/get/<int:uid>/', views.get_user),
    path('users/update/<str:uid>/', views.update_user),
    path('users/delete/<str:uid>/', views.delete_user),
    #documents
    path('documents/get/all/', views.get_documents),
    path('documents/add/', views.add_document),
    path('documents/delete/<int:id>/', views.delete_document),
    #vacations
    path('vacations/get/all/', views.get_vacations),
    path('vacations/get/<str:uid>/', views.get_vacations_user),
    path('vacations/add/', views.add_vacation),
    path('vacations/update/<int:id>/', views.update_vacation),
    path('vacations/delete/<int:id>/', views.delete_vacation),
    #requests
    path('requests/get/<str:uid>/', views.get_requests),
    path('requests/add/', views.add_request),
    path('requests/delete/<int:id>/', views.delete_request),
    path('requests/approve/<int:id>/', views.approve_request),
    #chat
    path('chat/', views.chat) 
]