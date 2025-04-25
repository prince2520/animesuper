import json

from django.core.serializers import serialize
from django.db.models import Q
from django.views.decorators.csrf import csrf_exempt
from rest_framework import status
from rest_framework.decorators import api_view, permission_classes
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated

from accounts.models import User, Genre
from my_watchlist.models import MyWatchlistItem
from rest_framework_simplejwt.tokens import RefreshToken


animeStatus = ['Dropped', 'Currently Watching', 'Complete', 'On Hold', 'Plan to watch']
mangaStatus = ['Dropped', 'Currently Reading', 'Complete', 'On Hold', 'Plan to read']

# Create your views here.

@api_view(['POST'])
def signup(request):
    if request.method == 'POST':
        body_unicode = request.body.decode('utf-8')
        body_data = json.loads(body_unicode)

        username = body_data['username']
        email = body_data['email']
        password = body_data['password']
        confirmPassword = body_data['confirmPassword']

        if not password == confirmPassword:
            return Response({'success': False, 'description': 'Confirm password not matched!'},
                            status=status.HTTP_400_BAD_REQUEST)

        if User.objects.filter(email=email).exists() is not False:
            return Response({'success': False, 'description': 'User with this email already exists!'},
                            status=status.HTTP_400_BAD_REQUEST)

        profile = User.objects.create_user(email=email, password=password)
        profile.username = username
        profile.save()

        return Response({
            username: profile.username,
            'success': True,
            'description': 'Account created successfully!'
        }, status=status.HTTP_200_OK)
    else:
        return Response({'success': False, 'description': 'Something went wrong!'}, status=status.HTTP_400_BAD_REQUEST)


@csrf_exempt
@api_view(['POST'])
def signin(request):
    if request.method == 'POST':
        body_unicode = request.body.decode('utf-8')
        body_data = json.loads(body_unicode)

        email = body_data['email']
        password = body_data['password']

        user = User.objects.filter(email=email).first()

        if User.objects.filter(email=email).exists() is False:
            return Response({'success': False, 'description': 'User with this email not exists!'},
                            status=status.HTTP_400_BAD_REQUEST)

        if not user.check_password(password):
            return Response({'success': False, 'description': 'Password is incorrect!'},
                            status=status.HTTP_400_BAD_REQUEST)
        token = RefreshToken.for_user(user)
        
        serialized_data = serialize("json", user.favorite_genre.all(), use_natural_foreign_keys=True)
            
        return Response({
            'username': user.username,
            'email': user.email,
            'profile_photo': user.profile_photo,
            'gender': user.gender,
            'location' : user.location,
            'favorite_genre': json.loads(serialized_data),
        
            'success': True,
            'token': str(token.access_token)
        }, status=status.HTTP_200_OK)



@csrf_exempt
@api_view(['GET'])
@permission_classes([IsAuthenticated])
def getUser(request):
    if request.method == 'GET':
        email = request.user.email

        user = User.objects.filter(email=email).first()

        if User.objects.filter(email=email).exists() is False:
            return Response({'success': False, 'description': 'User with this email not exists!'},
                            status=status.HTTP_400_BAD_REQUEST)
        
        serialized_data = serialize("json", user.favorite_genre.all(), use_natural_foreign_keys=True)
            
        return Response({
            'username': user.username,
            'email': user.email,
            'profile_photo': user.profile_photo,
            'gender': user.gender,
            'location' : user.location,
            'favorite_genre': json.loads(serialized_data),
        
            'success': True,
        }, status=status.HTTP_200_OK)


@csrf_exempt
@api_view(['PATCH'])
@permission_classes([IsAuthenticated])
def editProfile(request):
    if request.method == 'PATCH':
        body_unicode = request.body.decode('utf-8')
        body_data = json.loads(body_unicode)

        email =  request.user.email

        user = None

        try:
            user = User.objects.get(email=email)

            user.username = body_data['username']
            user.gender = body_data['gender']
            user.location = body_data['location']

            if body_data['profile_photo'] is not None:
                user.profile_photo = body_data['profile_photo']

            user.favorite_genre.clear()
            user.save()

            for genre in body_data['favorite_genre']:
                if Genre.objects.filter(name=genre).exists() is False:
                    new_genre = Genre.objects.create(name=genre)
                    user.favorite_genre.add(new_genre)
                else:
                    genre = Genre.objects.get(name=genre)
                    user.favorite_genre.add(genre)
            user.save()

            return Response({'success': True, 'description': 'Profile edited successfully'}, status=status.HTTP_200_OK)
        except user.DoesNotExist:
            return Response({'success': False, 'description': 'Something goes wrong!'}, status=status.HTTP_404_NOT_FOUND)



@csrf_exempt
@api_view(['GET'])
@permission_classes([IsAuthenticated])
def getProfileStatistics(request):
    if request.method == 'GET':
        email = request.user.email

        try:
            my_watchlist = MyWatchlistItem.objects.filter(user__email=email)

            animeStats = []
            for anime in animeStatus:
                animeStats.append({
                    'status': anime,
                    'count': my_watchlist.filter(Q(category='anime') & Q(status=anime)).count()
                })

            mangaStats = []
            for manga in mangaStatus:
                mangaStats.append({
                    'status': manga,
                    'count': my_watchlist.filter(Q(category='manga') & Q(status=manga)).count()
                })

            return Response({
                'mangaStats': mangaStats,
                'animeStats': animeStats
            }, status=status.HTTP_200_OK)

        except my_watchlist.DoesNotExist:
            return Response({'success': False}, status=status.HTTP_400_BAD_REQUEST)
