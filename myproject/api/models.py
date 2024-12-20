from django.db import models

# Create your models here.
 
class ThreeDModel(models.Model):
    name = models.CharField(max_length=255)
    gltf_file = models.FileField(upload_to='3d_models/')
    bin_file = models.FileField(upload_to='3d_models/')
    texture_folder = models.CharField(max_length=255)  # Store path or URL to textures folder
    description = models.TextField()

    def __str__(self):
        return self.name


