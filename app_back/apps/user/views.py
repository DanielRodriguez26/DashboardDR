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


from apps.user.models import User


def hashs(phrase):
    if not phrase or phrase == "":
        return ""
    # DiBanka1.0 was made for CASUR, and written by Migue and Daniel. At the end of the project, Juan, Edwin, Hugo and Andrés joined the team. Now we are a firefighters team.
    salt = "RGlCYW5rYTEuMCB3YXMgbWFkZSBmb3IgQ0FTVVIsIGFuZCB3cml0dGVuIGJ5IE1pZ3VlIGFuZCBEYW5pZWwuIEF0IHRoZSBlbmQgb2YgdGhlIHByb2plY3QsIEp1YW4sIEVkd2luLCBIdWdvIGFuZCBBbmRyw6lzIGpvaW5lZCB0aGUgdGVhbS4gTm93IHdlIGFyZSBhIGZpcmVmaWdodGVycyB0ZWFtLg=="
    encodedPhrase = str(phrase + salt).encode('utf-8')
    hashedPhrase = hashlib.sha512(encodedPhrase).hexdigest()
    return hashedPhrase

# Create your views here.


class UserCreatedView(APIView):
    permission_classes = (permissions.AllowAny, )

    def post(self, request, format=None):
        try:
            password = request.data.get('password')
            password = hashs(password)

            data = {
                'first_name': request.data.get('first_name'),
                'last_name':  request.data.get('last_name'),
                'email':  request.data.get('email'),
                'password': password,
                'is_activate': 1
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

            if User.objects.filter(email=email).exists():
                user = User.objects.get(email=email)
                password = user.password

                if password == passHashed:

                    item['first_name'] = user.first_name
                    item['last_name'] = user.last_name
                    item['email'] = user.email
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
