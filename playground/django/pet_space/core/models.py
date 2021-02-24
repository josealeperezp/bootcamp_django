from django.db import models
from django.contrib.auth.models import User

class UserOwner(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    name = models.CharField(max_length=264, unique=True)

class Pet(models.Model):
    name = models.CharField(max_length=264)
    about = models.CharField(max_length=264)
    photo = models.ImageField(upload_to='profile_pics', blank=True)
    owner = models.ForeignKey(UserOwner, on_delete=models.CASCADE)

class Post(models.Model):
    comment = models.CharField(max_length=264)