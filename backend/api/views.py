from django.shortcuts import render
from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework import status
from api.models import Todolist
from .serializers import TodolistSerializer


# Create your views here.
@api_view(['GET','POST'])
def Todolistfunction(request):
    if request.method=='GET':
        todo=Todolist.objects.all()
        serializer=TodolistSerializer(todo,many=True)
        return Response(serializer.data,status=status.HTTP_200_OK)
    elif request.method=='POST':
        serializer=TodolistSerializer(data=request.data)
        if (serializer.is_valid()):
            serializer.save()
            return Response(serializer.data,status=status.HTTP_201_CREATED)
        return Response(serializer.errors,status=status.HTTP_400_BAD_REQUEST)

@api_view(['GET','PUT','DELETE'])
def TodoDetailView(request,pk):
    try:
        todo=Todolist.objects.get(pk=pk)
    except todo.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)
    if request.method=='GET':
        serializer=TodolistSerializer(todo)
        return Response(serializer.data,status=status.HTTP_200_OK)
    elif request.method=='PUT':
        serializer=TodolistSerializer(todo,data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data,status=status.HTTP_200_OK)
        else:
            return Response(serializer.errors,status=status.HTTP_400_BAD_REQUEST)
    elif request.method=='DELETE':
        todo.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)
        
