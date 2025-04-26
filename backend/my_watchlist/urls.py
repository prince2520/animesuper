from django.urls import path
from . import views

urlpatterns = [
    path('create-watchlist', views.CreateWatchlist),
    path('get-watchlist', views.GetWatchlist),
    path('delete-watchlist', views.DeleteWatchlist),
    path('update-watchlist', views.UpdateWatchlist)
]