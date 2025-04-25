from django.urls import path
from . import views

urlpatterns = [
    path('signup', views.signup),
    path('signin', views.signin),
    path('profile-satistics', views.getProfileStatistics),
    path('edit-profile', views.editProfile),
    path('get-user', views.getUser)
]
