from django.shortcuts import render

from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from .models import ThreeDModel
from .serializers import ThreeDModelSerializer
from django.shortcuts import get_object_or_404

class HelloWorld(APIView):
    def get(self, request):
        return Response({"message": "Hello, World!"})



class ThreeDModelView(APIView):
    def get(self, request, *args, **kwargs):
        model_id = kwargs.get('model_id')
        try:
            model = ThreeDModel.objects.get(id=model_id)
            serializer = ThreeDModelSerializer(model)
            return Response(serializer.data, status=status.HTTP_200_OK)
        except ThreeDModel.DoesNotExist:
            return Response({"error": "Model not found"}, status=status.HTTP_404_NOT_FOUND)

# from django.http import JsonResponse
# from .models import ThreeDModel

# def ThreeDModelDetailView(request, id):
#     try:
#         model = ThreeDModel.objects.get(id=id)
#         data = {
#             'name': model.name,
#             'description': model.description,
#             'gltf_file': model.gltf_file.url,
#             'bin_file': model.bin_file.url,
#             'texture_folder': model.texture_folder.url,
#         }
#         return JsonResponse(data)
#     except ThreeDModel.DoesNotExist:
#         return JsonResponse({'error': 'Model not found'}, status=404)
