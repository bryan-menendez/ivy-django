from django.urls import path
from . import views

urlpatterns = [    
    path('', views.home),
    path('rooms/list', views.RoomView.as_view()),
    path('rooms/create', views.RoomCreateView.as_view()),
    path('rooms/get', views.RoomGet.as_view()),   
]
