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
def SignUp(request):
    if request.method == 'POST':
        body_unicode = request.body.decode('utf-8')
        body_data = json.loads(body_unicode)

        username = body_data['username']
        email = body_data['email']
        password = body_data['password']
        confirmPassword = body_data['confirmPassword']

        if not password == confirmPassword:
            return Response({'message': 'Confirm password not matched!'},
                            status=status.HTTP_406_NOT_ACCEPTABLE)

        if User.objects.filter(email=email).exists() is not False:
            return Response({'message': 'User with this email already exists!'},
                            status=status.HTTP_409_CONFLICT)

        profile = User.objects.create_user(email=email, password=password)
        profile.username = username
        profile.save()

        return Response({'message': 'Account created successfully!'}, status=status.HTTP_200_OK)


@csrf_exempt
@api_view(['POST'])
def SignIn(request):
    if request.method == 'POST':
        body_unicode = request.body.decode('utf-8')
        body_data = json.loads(body_unicode)

        email = body_data['email']
        password = body_data['password']

        user = User.objects.filter(email=email).first()

        if User.objects.filter(email=email).exists() is False:
            return Response({'message': 'User with this email not exists!'},
                            status=status.HTTP_404_NOT_FOUND)

        if not user.check_password(password):
            return Response({'message': 'Password is incorrect!'},
                            status=status.HTTP_401_UNAUTHORIZED)
            
        token = RefreshToken.for_user(user)
        
        serialized_data = serialize("json", user.favorite_genre.all(), use_natural_foreign_keys=True)
            
        data = {
            'username': user.username,
            'email': user.email,
            'profile_photo': user.profile_photo,
            'gender': user.gender,
            'location' : user.location,
            'favorite_genre': json.loads(serialized_data),
            'token': str(token.access_token)
        }   
         
        return Response({'message': "Sign in successfully!", 'data' : data}, status=status.HTTP_200_OK)



@csrf_exempt
@api_view(['GET'])
@permission_classes([IsAuthenticated])
def GetAuth(request):
    if request.method == 'GET':
        email = request.user.email

        user = User.objects.filter(email=email).first()

        if User.objects.filter(email=email).exists() is False:
            return Response({'message': 'User with this email not exists!'},
                            status=status.HTTP_404_NOT_FOUND)
        
        serialized_data = serialize("json", user.favorite_genre.all(), use_natural_foreign_keys=True)
        
        data = {
            'username': user.username,
            'email': user.email,
            'profile_photo': user.profile_photo,
            'gender': user.gender,
            'location' : user.location,
            'favorite_genre': json.loads(serialized_data)
        } 
        
        return Response({
            "message" : "fetch user successfully!", 
            'data': data,
        }, status=status.HTTP_200_OK)


@csrf_exempt
@api_view(['PATCH'])
@permission_classes([IsAuthenticated])
def UpdateAuth(request):
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
        
            serialized_data = serialize("json", user.favorite_genre.all(), use_natural_foreign_keys=True)
            
            data = {
                'username': user.username,
                'email': user.email,
                'profile_photo': user.profile_photo,
                'gender': user.gender,
                'location' : user.location,
                'favorite_genre': json.loads(serialized_data),
            }

            return Response({'message': 'Profile edited successfully', 'data': data}, status=status.HTTP_200_OK)
        except user.DoesNotExist:
            return Response({'message': 'You are unauthorized user!'}, status=status.HTTP_401_UNAUTHORIZED)



@csrf_exempt
@api_view(['GET'])
@permission_classes([IsAuthenticated])
def GetAuthStatistics(request):
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
                
            data = {
                'anime' : animeStats,
                'manga' : mangaStats
            }    
            
            return Response({
                'message': "Fetch user statistics successfully!",
                'data': data
            }, status=status.HTTP_200_OK)

        except my_watchlist.DoesNotExist:
            return Response({'message': 'You are unauthorized user!'}, status=status.HTTP_401_UNAUTHORIZED)
