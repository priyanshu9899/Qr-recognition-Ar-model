# Generated by Django 5.1.4 on 2024-12-19 09:03

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0003_alter_model3d_model_name'),
    ]

    operations = [
        migrations.RenameField(
            model_name='model3d',
            old_name='file',
            new_name='zip_file',
        ),
        migrations.AddField(
            model_name='model3d',
            name='gltf_file',
            field=models.FileField(blank=True, null=True, upload_to='uploads/models/gltf/'),
        ),
    ]