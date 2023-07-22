from django.urls import path
from . import views

urlpatterns = [
    path('add-watchlist-item', views.AddWatchlistItem),
    path('get-watchlist-list', views.GetMyWatchlist),
    path('delete-watchlist-item', views.DeleteWatchlistItem),
    path('edit-watchlist-item', views.EditMyWatchlist)
]