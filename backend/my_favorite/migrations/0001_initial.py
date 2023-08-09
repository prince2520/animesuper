# Generated by Django 4.2.1 on 2023-06-02 07:07

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
    ]

    operations = [
        migrations.CreateModel(
            name='FavoriteItem',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('category_id', models.IntegerField(default=0)),
                ('category', models.CharField(max_length=100)),
                ('img_url', models.CharField(max_length=400)),
                ('title', models.CharField(max_length=100)),
                ('score', models.FloatField(default=0, null=True)),
                ('type', models.CharField(max_length=100)),
                ('year', models.CharField(default=0, max_length=100)),
                ('num_episode_chapter', models.IntegerField(default=0, null=True)),
            ],
            options={
                'verbose_name_plural': 'FavoriteItem',
            },
        ),
        migrations.CreateModel(
            name='MyFavorite',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('favorite_list', models.ManyToManyField(related_name='favorite_list', to='my_favorite.favoriteitem')),
                ('user', models.OneToOneField(on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL)),
            ],
            options={
                'verbose_name_plural': 'MyFavorite',
            },
        ),
    ]