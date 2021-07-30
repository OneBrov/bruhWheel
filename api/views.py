from django.shortcuts import render
from rest_framework import generics
from .models import Genre, Game
from .serializers import GenreSerializer, GameSerializer
from django.db.models import Q

# Create your views here.
class GenreView(generics.ListAPIView):
	queryset = Genre.objects.all().order_by('genre')
	serializer_class = GenreSerializer

class GameList(generics.ListAPIView):
	serializer_class = GameSerializer
	
	
	def get_queryset(self):
		# queryset = Game.objects.all()
		count_games = self.request.query_params.get('countGames')
		price_more  = self.request.query_params.get('priceMore')
		price_less  = self.request.query_params.get('priceLess')
		genres  = self.request.query_params.get('genres')
		# Multi-field search
		
		
		if not count_games :
			count_games = 3
		else:
			count_games = int(count_games)
		if not price_more :
			price_more = 0
		else:
			price_more = int(price_more)
		if not price_less :
			price_less = 100000
		else:
			price_less = int(price_less)

		if not genres:
			genres = list(Genre.objects.values_list('genre', flat=True))
		else: 
			genres = genres.split(',')

		print(count_games, price_more, price_less, genres)

		myqueryset = Game.objects.filter(
								ru_price__lte=price_less,
                                ru_price__gte=price_more,
								genres__genre__in=genres
                               ).order_by('?')[:count_games]

		return myqueryset





