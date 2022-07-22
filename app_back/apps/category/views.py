from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from rest_framework import permissions

from .models import Category

# Create your views here.


class ListCategoriesView(APIView):

    def get(self, reuest, format=None):
        if Category.objects.all().exists:

            categories = Category.objects.all()
            result = []

            for category in categories:
                if not category.parent:
                    item = {}
                    item['id'] = category.id
                    item['name'] = category.name

                    item['sub_categories'] = []
                    for category in categories:
                        if not category.parent:
                            sub_item = {}
                            sub_item['id'] = category.id
                            sub_item['name'] = category.name

                            sub_item['sub_categories'] = []

                            item['sub_categories'].append(sub_item)

                    result.append(item)
            return Response({'categories': result}, status=status.HTTP_200_OK)
        else:
            return Response({'error': 'No categories found'}, status=status.HTTP_404_NOT_FOUND)
