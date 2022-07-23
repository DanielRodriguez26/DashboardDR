import email
from email import message
import hashlib
from msilib.schema import Class
from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework import permissions, status
from django.utils.decorators import method_decorator
from django.views.decorators.csrf import csrf_exempt
from rest_framework.response import Response
from apps.user.serializers import UserCreateSerializer
from .hashsPass import hashs

from apps.user.models import User


class UserCreatedView(APIView):
    permission_classes = (permissions.AllowAny, )

    def post(self, request, format=None):
        try:
            password = request.data.get('password')
            password = hashs(password)

            data = {
                'us_first_name': request.data.get('first_name'),
                'us_last_name':  request.data.get('last_name'),
                'us_email':  request.data.get('email'),
                'us_dni':  request.data.get('dni'),
                'us_password': password,
                'us_is_activate': 1
            }

            serializer = UserCreateSerializer(data=data)
            if serializer.is_valid():
                serializer.save()
                return Response(
                    {'data': 'True'},
                    status=status.HTTP_200_OK)

            return Response(
                {'data': 'False'},
                status=status.HTTP_200_OK)
        except Exception as err:
            print(err)


class LoginVerify(APIView):
    permission_classes = (permissions.AllowAny, )

    def post(self, request, fromat=None):
        try:
            password = request.data.get('password')
            passHashed = hashs(password)

            email = request.data.get('email')
            result = []
            item = {}

            if User.objects.filter(us_email=email).exists():
                user = User.objects.get(us_email=email)
                password = user.us_password

                if password == passHashed:

                    item['first_name'] = user.us_first_name
                    item['last_name'] = user.us_last_name
                    item['email'] = user.us_email
                    item['dni'] = user.us_dni
                    item['valid'] = True

                    result.append(item)

                    return Response(
                        {'user': result},
                        status=status.HTTP_200_OK)

                item['message'] = 'La Contraseña es incorrecta'
                item['valid'] = False
                result.append(item)
                return Response(
                    {'user': result},
                    status=status.HTTP_200_OK)

            item['message'] = 'El usuario no existe'
            item['valid'] = False
            result.append(item)
            return Response(
                {'user': result},
                status=status.HTTP_200_OK)

        except Exception as err:
            print(err)
