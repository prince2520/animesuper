from django.urls import path
from . import views

urlpatterns = [
    path('signup', views.signup),
    path('signin', views.signin),
    path('profile-detail', views.getProfileDetail),
    path('profile-satistics', views.getProfileStatistics),
    path('edit-profile', views.editProfile)
]
