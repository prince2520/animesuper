from django.urls import path
from . import views

urlpatterns = [
    path('add-item-favorite', views.AddFavoriteItem),
    path('get-favorite-list', views.MyFavoriteList),
    path('delete-favorite-item', views.DeleteFavoriteItem),
]