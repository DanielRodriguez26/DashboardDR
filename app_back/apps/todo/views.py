from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework import permissions, status
from rest_framework.response import Response
from .serializer import TodoCreateSereializer
from .models import Todo


class TodoCreateViews(APIView):
    permission_classes = (permissions.AllowAny, )

    def post(self, request, format=None):
        try:
            data = {
                "td_name": request.data.get('name'),
                "td_description": request.data.get('description')
            }

            serializer = TodoCreateSereializer(data=data)
            if serializer.is_valid():
                serializer.save()
                return Response({'data': 'True'},
                                status=status.HTTP_200_OK)

            return Response({'data': 'False'},
                            status=status.HTTP_200_OK)
        except Exception as err:
            print(err)


class TodoListView(APIView):
    permission_classes = (permissions.AllowAny, )

    def get(self, request, format=None):
        try:
            if Todo.objects.all().exists():
                todos = Todo.objects.all()

                result = []

                for todo in todos:
                    item = {}
                    item['id'] = todo.id
                    item['name'] = todo.td_name
                    item['description'] = todo.td_description
                    item['date_created'] = todo.td_date_created

                    result.append(item)

                return Response({'todo': result}, status=status.HTTP_200_OK)
            else:
                return Response({'error': 'No Todos found'}, status=status.HTTP_200_OK)

        except Exception as err:
            print(err)
