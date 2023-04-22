from django.db import models
from django.utils import timezone

class User(models.Model):
    id = models.AutoField(primary_key=True)
    uid = models.CharField(max_length=255, unique=True)
    admin = models.BooleanField(default=False)
    username = models.CharField(max_length=255)
    avatarId = models.PositiveIntegerField(null=True)
    email = models.EmailField(max_length=255, unique=True)
    phone = models.CharField(max_length=255)
    job = models.CharField(max_length=255)
    date = models.DateTimeField(default=timezone.now)

class Vacation(models.Model):
    date = models.DateTimeField(default=timezone.now)
    start = models.DateTimeField()
    end = models.DateTimeField()
    description = models.TextField(default="")

class Document(models.Model):
    title = models.CharField(max_length=255)
    description = models.TextField(default="")
    date = models.DateTimeField(default=timezone.now)
    fileId = models.PositiveIntegerField(null=True)

class File(models.Model):
    file = models.FileField(blank=False, null=False)
    date = models.DateTimeField(default=timezone.now)