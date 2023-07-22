from django.contrib.auth.models import User
from django.db import models
from django.conf import settings  # new


# Create your models here.

class MyWatchlistItem(models.Model):
    user = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE)
    progress_read_watched = models.IntegerField(default=0, null=True)
    status = models.CharField(max_length=100, null=True)
    category_id = models.IntegerField(default=0, null=True)
    category = models.CharField(max_length=100, null=True)
    img_url = models.CharField(max_length=400, null=True)
    title = models.CharField(max_length=100, null=True)
    type = models.CharField(max_length=100, null=True)
    num_episode_or_chapter = models.IntegerField(default=0, null=True)

    def __str__(self):
        return f"{self.category}: {self.category_id}"

    class Meta:
        verbose_name_plural = f'MyWatchlistItem'

