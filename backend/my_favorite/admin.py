from django.contrib import admin

from .models import FavoriteItem, MyFavorite

# Register your models here.

admin.site.register(FavoriteItem)
admin.site.register(MyFavorite)