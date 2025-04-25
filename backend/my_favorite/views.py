import json

from collections import defaultdict
from django.core.serializers import serialize
from django.db.models import Q
from rest_framework import status
from rest_framework.decorators import api_view,permission_classes
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated

from accounts.models import User
from my_favorite.models import FavoriteItem, MyFavorite

# Create your views here.

@api_view(['POST'])
@permission_classes([IsAuthenticated])
def AddFavoriteItem(request):
    body_unicode = request.body.decode('utf-8')
    body_data = json.loads(body_unicode)
    
    user = request.user
    
    email = user.email
    category_id = body_data['category_id']
    category = body_data['category']
    img_url = body_data['img_url']
    title = body_data['title']
    score = body_data['score']
    year = body_data['year']
    num_episode_chapter = body_data['num_episode_chapter']
    media_type = body_data['media_type']

    item = FavoriteItem.objects.filter(category_id=category_id)

    if item.exists() is False:
        item = FavoriteItem.objects \
            .create(category_id=category_id, category=category, img_url=img_url, title=title,
                    score=score, type=media_type, year=year, num_episode_chapter=num_episode_chapter)
        item.save()

    user = User.objects.get(email=email)

    if MyFavorite.objects.filter(user=user).exists() is False:
        favorite = MyFavorite.objects.create(user=user)
        favorite.favorite_list.add(item)
        favorite.save()
    else:
        if MyFavorite.objects.filter(Q(user=user) & Q(favorite_list__category_id=category_id)).exists() is False:
            favorite = MyFavorite.objects.get(user__email=email)
            favorite.favorite_list.add(FavoriteItem.objects.get(category_id=category_id))
            favorite.save()
        else:
            return Response({
                'success': False, 'description': 'Item already added to your favorite list!'},
                status=status.HTTP_400_BAD_REQUEST)

    return Response({'success': True, 'data': item, 'description': 'Item added to your favorite list successfully'},
                    status=status.HTTP_200_OK)


@api_view(['DELETE'])
@permission_classes([IsAuthenticated])
def DeleteFavoriteItem(request):
    body_unicode = request.body.decode('utf-8')
    body_data = json.loads(body_unicode)
    
    user = request.user
    
    print(body_data)
    
    email = user.email
    category_id = body_data['category_id']
    category = body_data['category']

    try:
        item = FavoriteItem.objects.get(Q(category_id=category_id) & Q(category=category))
    except item.DoesNotExist:
        item = None

    user = User.objects.get(email=email)
    myFavoriteList = MyFavorite.objects.get(user=user)
    myFavoriteList.favorite_list.remove(item)
    myFavoriteList.save()

    return Response({'success': True, 'description': 'Item deleted from your favorite list successfully!'},
                    status=status.HTTP_200_OK)


@api_view(['GET'])
@permission_classes([IsAuthenticated])
def MyFavoriteList(request):
    
    user = request.user
    email = user.email
    
    user = User.objects.get(email=email)
    myFavoriteList = MyFavorite.objects.get(user=user)
    
    favorites = myFavoriteList.favorite_list.all()
    data = defaultdict(list)

    for item in favorites:
        category = item.category.lower()
        data[category].append({
            'id': item.id,
            'category_id': item.category_id,
            'category': item.category,
            'img_url': item.img_url,
            'title': item.title,
            'score': item.score,
            'type': item.type,
            'year': item.year,
            'num_episode_chapter': item.num_episode_chapter
        })      

    return Response({'success': True, 'favorite': data}, status=status.HTTP_200_OK)
