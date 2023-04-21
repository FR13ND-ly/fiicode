from django.views.decorators.csrf import csrf_exempt
from rest_framework.parsers import JSONParser
from django.http.response import JsonResponse
import os
from django.core.files import File as fileReader
import urllib.request
from django.conf import settings
from django.core.files.storage import default_storage
from django.core.files.base import ContentFile
from PIL import Image
import PIL
import datetime

@csrf_exempt
def upload_file(request):
    file = File.objects.create(file=request.FILES['file'])
    file.save()
    return JsonResponse(file.id, safe=False)

def add_file(imageUrl, uid):
    image = File.objects.create()
    result = urllib.request.urlretrieve(
        imageUrl + "?.jpg", settings.MEDIA_ROOT + "/" + uid + ".jpg")
    image.file = settings.MEDIA_ROOT + "/" + uid + ".jpg"
    image.save()
    return image.id

def get_file(id):
    return URL + "media/" + os.path.basename(File.objects.get(id=id).file.name)