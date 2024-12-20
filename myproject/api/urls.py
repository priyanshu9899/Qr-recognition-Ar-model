from django.urls import path
from .views import ThreeDModelView

urlpatterns = [
    path('model/<int:model_id>/', ThreeDModelView.as_view(), name='get_3d_model'),
]
