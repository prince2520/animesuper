from django.urls import path
from . import views

urlpatterns = [
    path('create-favorite', views.CreateFavorite),
    path('get-favorite-list', views.GetFavoritelist),
    path('delete-favorite', views.DeleteFavorite),
]