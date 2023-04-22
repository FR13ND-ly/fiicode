from django.db import models
from django.utils import timezone

class Profile(models.Model):
    uid = models.CharField(max_length=255, unique=True)
    fid = models.PositiveIntegerField(null=True)
    name = models.CharField(max_length=255)
    avatarId = models.PositiveIntegerField(null=True)
    date = models.DateTimeField(default=timezone.now)

class File(models.Model):
    file = models.FileField(blank=False, null=False)
    date = models.DateTimeField(default=timezone.now)