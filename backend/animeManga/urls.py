from django.urls import path
from . import views

urlpatterns = [
    path('animeManga-list', views.ListAnimeManga),
    path('animeManga-detail/<int:animeID>', views.AnimeMangaDetail),
    path('animeManga-search', views.AnimeMangaSearch),
    path('contact-us', views.ContactUs),
    path('', views.home)
]
