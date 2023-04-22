from django.db import models
from django.utils import timezone

class User(models.Model):
    id = models.AutoField(primary_key=True)
    uid = models.CharField(max_length=255, unique=True)
    admin = models.BooleanField(default=False)
    username = models.CharField(max_length=255)
    avatarId = models.PositiveIntegerField(null=True)
    email = models.EmailField(max_length=255, unique=True)
    job = models.CharField(max_length=255, default="Software Engineer")
    date = models.DateTimeField(default=timezone.now)

class Vacation(models.Model):
    userId = models.PositiveIntegerField()
    title = models.CharField(max_length=255)
    description = models.TextField(default="")
    start = models.DateField()
    end = models.DateField()
    date = models.DateTimeField(default=timezone.now)

class RequestVacation(models.Model):
    userId = models.CharField(max_length=255)
    title = models.CharField(max_length=255)
    description = models.TextField(default="")
    start = models.DateField()
    end = models.DateField()
    date = models.DateTimeField(default=timezone.now)

class Document(models.Model):
    userId = models.CharField(max_length=255)
    title = models.CharField(max_length=255)
    type = models.CharField(max_length=255, default="pdf")
    fileId = models.PositiveIntegerField(null=True)
    date = models.DateTimeField(default=timezone.now)
    
class File(models.Model):
    file = models.FileField(blank=False, null=False)
    date = models.DateTimeField(default=timezone.now)