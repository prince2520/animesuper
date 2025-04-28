import json

import requests
# Html mail required import
from django.shortcuts import render
from rest_framework import status
from rest_framework.decorators import api_view
from rest_framework.response import Response
import time
from animesuper import settings

from django.core.mail import send_mail

# Create your views here.

@api_view(['GET', 'POST'])
def ListAnimeManga(request):
    category = request.GET.get('category', '')
    rank_type = request.GET.get('rank_type', '')
    limit = request.GET.get('limit', '')
    offset = request.GET.get('offset', '')

    urls = f'{settings.MYANIMELIST_URL}/v2/{category}/ranking?ranking_type={rank_type}&fields=id,mean,start_season,title,' \
           f'media_type,main_picture,genres,num_chapters,num_episodes&limit={limit}&offset={offset}'

    headers = {
        'X-MAL-CLIENT-ID': f'{settings.MYANIMELIST_API_KEY}'
    }
    
    time.sleep(5)
    
    response = requests.get(urls, headers=headers)
    
    data = response.json()

    return Response({'success': True, 'message': "Anime manga fetch successfully!", 'data': data}, status=status.HTTP_200_OK)


@api_view(['GET', 'POST'])
def AnimeMangaDetail(request, animeID: int):
    category = request.GET.get('category', '')
    urls = f'{settings.MYANIMELIST_URL}/v2/{category}/{animeID}?fields=id,title,main_picture,alternative_titles,' \
           f'start_date,end_date,synopsis,mean,rank,popularity,num_list_users,num_scoring_users,nsfw,created_at,' \
           f'updated_at, media_type,status,genres,my_list_status,num_episodes,start_season,broadcast,source,' \
           f'average_episode_duration,num_chapters,rating,pictures,background,related_anime,related_manga,recommendations,studios' \
           f',statistics'
    headers = {
        'X-MAL-CLIENT-ID': f'{settings.MYANIMELIST_API_KEY}'
    }

    time.sleep(5)

    response = requests.get(urls, headers=headers)

    data = response.json()
    
    return Response({'success': True, 'message': "Anime manga detail fetch successfully!", 'data': data}, status=status.HTTP_200_OK)


@api_view(['GET'])
def AnimeMangaSearch(request):
    animeMangaName = request.GET.get('animeName', '')
    category = request.GET.get('category', '')
    limit = request.GET.get('limit', '')

    urls = f'{settings.MYANIMELIST_URL}/v2/{category}?q={animeMangaName}&fields=id,title,main_picture,genres,media_type,' \
           f'start_date,mean,status&limit={limit}'
    headers = {
        'X-MAL-CLIENT-ID': f'{settings.MYANIMELIST_API_KEY}'
    }
    
    time.sleep(5)

    response = requests.get(urls, headers=headers)
    
    data = response.json()
    return Response({'success': True, 'message': "Anime manga search fetch successfully!", 'data': data}, status=status.HTTP_200_OK)


@api_view(['GET', 'POST'])
def ContactUs(request):
    body_unicode = request.body.decode('utf-8')
    body_data = json.loads(body_unicode)

    email = body_data['email']
    message = body_data['message']
    send_message = "Thank you for your feedback. Your insights are invaluable to us. We appreciate your time and look forward to implementing your suggestions to improve our services."

    send_mail(
        "Thank you for contacting AnimeSuper",
        send_message,
        settings.SENDER_EMAIL,
        [email],
        fail_silently=False,
    )
    return Response({'success': True, "message": "Message send successfully!"}, status=status.HTTP_200_OK)


def home(request):
    return render(request, "thank-you.html")
