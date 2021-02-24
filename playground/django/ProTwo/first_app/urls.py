from django.conf.urls import url
from first_app import views

urlpatterns = [
    url('form',views.form_name_view, name='users'),
    url('', views.index, name='index'),
]