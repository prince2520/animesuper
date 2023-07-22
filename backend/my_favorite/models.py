from django.db import models

from animesuper import settings
from accounts.models import User


# Create your models here.

class FavoriteItem(models.Model):
    category_id = models.IntegerField(default=0)
    category = models.CharField(max_length=100)
    img_url = models.CharField(max_length=400)
    title = models.CharField(max_length=100)
    score = models.FloatField(default=0, null=True)
    type = models.CharField(max_length=100)
    year = models.CharField(max_length=100, default=0)
    num_episode_chapter = models.IntegerField(default=0, null=True)


    def __str__(self):
        return f"{self.category}: {self.category_id}"

    class Meta:
        verbose_name_plural = f'FavoriteItem'


class MyFavorite(models.Model):
    user = models.OneToOneField(settings.AUTH_USER_MODEL, on_delete=models.CASCADE)
    favorite_list = models.ManyToManyField(FavoriteItem, related_name='favorite_list')

    def __str__(self):
        return f"Favorite list :{self.user.username}"

    class Meta:
        verbose_name_plural = 'MyFavorite'
