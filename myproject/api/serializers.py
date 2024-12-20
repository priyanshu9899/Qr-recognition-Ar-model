from rest_framework import serializers
from .models import ThreeDModel
from django.conf import settings

class ThreeDModelSerializer(serializers.ModelSerializer):
    gltf_file = serializers.SerializerMethodField()
    bin_file = serializers.SerializerMethodField()

    class Meta:
        model = ThreeDModel
        fields = ['id', 'name', 'gltf_file', 'bin_file', 'texture_folder', 'description']

    def get_gltf_file(self, obj):
        return f"{settings.MEDIA_URL}{obj.gltf_file.name}"

    def get_bin_file(self, obj):
        return f"{settings.MEDIA_URL}{obj.bin_file.name}"
