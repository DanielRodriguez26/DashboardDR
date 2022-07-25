from datetime import datetime
from django.db import models

# Create your models here.


class Todo(models.Model):
    class Meta:

        verbose_name = 'Todo'
        verbose_name_plural = 'Todos'
        ordering = ['id']

    td_name = models.CharField(max_length=255)
    td_description = models.TextField(max_length=1000)
    td_date_created = models.DateField(default=datetime.now)

    def __str__(self):
        return self.td_name
