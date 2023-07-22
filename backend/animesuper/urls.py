"""animesuper URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/4.1/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.conf import settings
from django.contrib import admin
from django.urls import path, include
from django.conf.urls.static import static
from rest_framework.response import Response

from django.views.generic import View
from django.http import JsonResponse
class MyView(View):
    def get(self, request, *args, **kwargs):
        print('Server started successfully!')
        return JsonResponse({'message': 'Server started Successfully'}, status=204)

urlpatterns = [
    path('', MyView.as_view()),
    path('admin/', admin.site.urls),
    path('authentication/', include("authentication.urls")),
    path('my_watchlist/', include("my_watchlist.urls")),
    path('my_favorite/', include("my_favorite.urls")),
    path('animeManga/', include("animeManga.urls")),
]
