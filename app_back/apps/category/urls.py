import django


from django.urls import URLPattern, path
from .views import ListCategoriesView


urlpatterns = [
    path('categories', ListCategoriesView.as_view())
]
