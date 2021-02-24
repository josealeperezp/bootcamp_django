from django.conf.urls import url
from AppTwo import views

urlpatterns = [
    url('users',views.users, name='users'),
    url('', views.index, name='index'),
]