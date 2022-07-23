from datetime import datetime
from django.db import models
import os


class User(models.Model):
    class Meta:
        verbose_name = 'User'
        verbose_name_plural = 'Users'
        ordering = ['id']

    us_first_name = models.CharField(max_length=255)
    us_last_name = models.CharField(max_length=255)
    us_email = models.EmailField(max_length=255, unique=True)
    us_dni = models.IntegerField()
    us_password = models.CharField(max_length=255)
    us_date_created = models.DateField(default=datetime.now)
    us_is_activate = models.IntegerField(default=0)

    def get_full_name(self):
        return self.us_first_name + ' ' + self.last_name

    def get_short_name(self):
        return self.us_first_name

    def __str__(self):
        return self.us_email
