from django.db import models
from django.contrib.auth.models import AbstractUser
from .manager import UserManager


# Create your models here.

class Genre(models.Model):
    name = models.CharField(max_length=10)


class User(AbstractUser):
    username = models.CharField(max_length=20, blank=True, null=True)
    email = models.EmailField(unique=True)
    profile_photo = models.CharField(max_length=400, default='https://i.imgur.com/SNl3ZA8.jpg')
    gender = models.CharField(max_length=10, blank=True, null=True)
    location = models.CharField(max_length=30, blank=True, null=True)
    favorite_genre = models.ManyToManyField(Genre)

    objects = UserManager()
    USERNAME_FIELD = 'email'

    REQUIRED_FIELDS = []
