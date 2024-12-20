from django.contrib import admin

from .models import ThreeDModel

class ThreeDModelAdmin(admin.ModelAdmin):
    list_display = ('id', 'name', 'description', 'gltf_file', 'bin_file', 'texture_folder')
    search_fields = ('name', 'description')
    list_filter = ('name',)
    ordering = ('-id',)

admin.site.register(ThreeDModel, ThreeDModelAdmin)