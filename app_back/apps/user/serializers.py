
from dataclasses import field
from rest_framework import serializers
from .models import User


class UserCreateSerializer(serializers.ModelSerializer):

    class Meta:
        model = User
        fields = [
            "us_first_name",
            "us_last_name",
            "us_email",
            "us_dni",
            "us_password",
            "us_is_activate"
        ]
