from django.urls import path

from .views import TodoCreateViews, TodoListView

urlpatterns = [
    path('created', TodoCreateViews.as_view()),
    path('view', TodoListView.as_view()),

]
