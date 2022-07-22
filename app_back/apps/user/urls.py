from django.urls import path

from .views import UserCreatedView, LoginVerify

urlpatterns = [
    path('created', UserCreatedView.as_view()),
    path('login/verify', LoginVerify.as_view()),
]
