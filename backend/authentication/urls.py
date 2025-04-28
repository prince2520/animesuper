from django.urls import path
from . import views

urlpatterns = [
    path('signup', views.SignUp),
    path('login', views.SignIn),
    path('get-auth-statistics', views.GetAuthStatistics),
    path('update-auth', views.UpdateAuth),
    path('get-auth', views.GetAuth)
]
