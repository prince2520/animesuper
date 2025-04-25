import json

from collections import defaultdict
from django.core.serializers import serialize
from django.db.models import Q
from rest_framework import status
from rest_framework.decorators import api_view, permission_classes
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated

from accounts.models import User
from my_watchlist.models import MyWatchlistItem


# Create your views here.


@api_view(['POST'])
@permission_classes([IsAuthenticated])
def AddWatchlistItem(request):
    body_unicode = request.body.decode('utf-8')
    body_data = json.loads(body_unicode)
    
    user = request.user
    
    email = user.email
    category = body_data['category']
    category_id = body_data['category_id']
    img_url = body_data['img_url']
    title = body_data['title']
    num_episode_or_chapter = body_data['num_episode_or_chapter']
    media_type = body_data['media_type']

    user = User.objects.get(email=email)

    if MyWatchlistItem.objects.filter(Q(user=user) & Q(category_id=category_id)).exists() is False:
        watchlist = MyWatchlistItem.objects \
            .create(user=user,
                    category_id=category_id,
                    category=category,
                    img_url=img_url,
                    title=title,
                    type=media_type,
                    num_episode_or_chapter=num_episode_or_chapter)

        if category == 'manga':
            watchlist.status = 'Plan to read'
        else:
            watchlist.status = 'Plan to watch'

        watchlist.save()

        return Response({'success': True, 'description': 'Item added to watchlist successfully!'},
                        status=status.HTTP_200_OK)

    return Response({'success': False, 'description': 'Item already exists in your watchlist!', 'data': watchlist},
                    status=status.HTTP_400_BAD_REQUEST)


@api_view(['DELETE'])
@permission_classes([IsAuthenticated])
def DeleteWatchlistItem(request):
    body_unicode = request.body.decode('utf-8')
    body_data = json.loads(body_unicode)
    
    user = request.user
    
    email = user.email  
    category_id = body_data['category_id']
    category = body_data['category']

    user = User.objects.get(email=email)

    item = MyWatchlistItem.objects.filter(Q(user=user) & Q(category_id=category_id) & Q(category=category))

    if item.exists() is not None:
        item.delete()
        return Response({'success': True, 'description': 'Item deleted successfully!'}, status=status.HTTP_200_OK)

    return Response({'success': False, 'description': 'Something goes wrong!'}, status=status.HTTP_400_BAD_REQUEST)


@api_view(['GET'])
@permission_classes([IsAuthenticated])
def GetMyWatchlist(request):
    user = request.user
    email = user.email  

    user = User.objects.get(email=email)
    myWatchList = MyWatchlistItem.objects.filter(user=user)
    
    data = defaultdict(list)

    for item in myWatchList:
        category = item.category.lower()
        data[category].append({
            'id': item.id,
            'progress_read_watched': item.progress_read_watched,
            'status': item.status,
            'category_id': item.category_id,
            'category': item.category,
            'img_url': item.img_url,
            'title': item.title,
            'type': item.type,
            'num_episode_or_chapter': item.num_episode_or_chapter
        })     

    return Response({'success': True, 'data': data}, status=status.HTTP_200_OK)


@api_view(['PATCH'])
@permission_classes([IsAuthenticated])
def EditMyWatchlist(request):
    body_unicode = request.body.decode('utf-8')
    body_data = json.loads(body_unicode)

    user = request.user
    
    email = user.email    
    category_id = body_data['category_id']
    item_status = body_data['status']
    progress = body_data['progress']

    user = User.objects.get(email=email)

    myWatchList = MyWatchlistItem.objects.get(Q(user=user) & Q(category_id=category_id))
    myWatchList.status = item_status
    myWatchList.progress_read_watched = progress
    myWatchList.save()

    return Response({'success': True, 'description': 'Item edited status successfully!'}, status=status.HTTP_200_OK)
