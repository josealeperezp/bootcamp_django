from django.conf.urls import url
from basic_app import views

# template tagging
app_name = 'basic_app'

urlpatterns = [
    url('other',views.other, name='other'),
    url('relative',views.relative, name='relative'),
    url('', views.index, name='index'),
]