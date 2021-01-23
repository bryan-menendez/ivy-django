from django.shortcuts import render
from rest_framework import generics
from django.http import HttpResponse
from .models import Room
from .serializers import RoomSerializer 

def home(request):
    return HttpResponse("HOI")

class RoomView(generics.CreateAPIView):
    queryset = Room.objects.all()
    serializer_class = RoomSerializer
