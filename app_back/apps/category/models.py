from tabnanny import verbose
from django.db import models

# Create your models here.


class Category(models.Model):
    class Meta:
        verbose_name = 'Category'
        verbose_name_plural = 'Categories'
        ordering = ['id']

    ct_name = models.CharField(max_length=255, unique=True)

    def __str__(self):
        return self.ct_name
