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
from fiicode.models import User, Vacation, Document, File
URL="http://127.0.0.1:8000/"

#auth
@csrf_exempt
def login(request):
    data = JSONParser().parse(request)
    user, created = User.objects.get_or_create(uid=data['uid'])
    if (created):
        user.username = data['displayName']
        user.avatarId = add_file(data['photoURL'], data['uid'])
        user.email = data['email']
        user.save()
    response = {
        "uid" : user.uid,
        "admin" : user.admin,
        "name" : user.username,
        "imageUrl" : get_file(user.avatarId),
    }
    return JsonResponse(response)

@csrf_exempt
def auth(request, uid):
    users = User.objects.filter(uid=uid)
    if not users.exists():
        return JsonResponse({})
    user = users.first()
    response = {
        "uid" : user.uid,
        "admin" : user.admin,
        "name" : user.username,
        "imageUrl" : get_file(user.avatarId),
    }
    return JsonResponse(response)


#users]
def get_users(request):
    users = User.objects.all()
    response = []
    for user in users:
        response.append({
            "uid" : user.uid,
            "admin" : user.admin,
            "name" : user.username,
            "email" : user.email,
            "imageUrl" : get_file(user.avatarId),
            "job" : user.job,
        })
    return JsonResponse(response, safe=False)

@csrf_exempt
def get_user(request, uid):
    user = User.objects.get(uid=uid)
    response = {
        "uid" : user.uid,
        "admin" : user.admin,
        "name" : user.username,
        "imageUrl" : get_file(user.avatarId),
        "job" : user.job,
    }
    return JsonResponse(response)

@csrf_exempt
def update_user(request, uid):
    data = JSONParser().parse(request)
    user = User.objects.get(uid=uid)
    user.username = data['name']
    user.job = data['job']
    user.save()
    return JsonResponse({}, safe=False)

@csrf_exempt
def delete_user(request, uid):
    user = User.objects.get(uid=uid)
    user.delete()
    return JsonResponse({}, safe=False)

#documents
@csrf_exempt
def get_documents(request):
    documents = Document.objects.all()
    response = []
    for document in documents:
        user = {
            "username" : User.objects.get(id=document.userId).username,
            "imageUrl" : get_file(User.objects.get(id=document.userId).avatarId),
        }
        response.append({
            "id" : document.id,
            "user" : user,
            "title" : document.title,
            "type" : document.type,
            "fileUrl" : get_file(document.fileId),
        })
    return JsonResponse(response, safe=False)

@csrf_exempt
def add_document(request):
    data = JSONParser().parse(request)
    document = Document.objects.create(
        userId=data['userId'], 
        title=data['title'], 
        fileId=data["fileId"],
        type=get_file(data['file']).split(".")[-1]
    )
    document.save()
    return JsonResponse(document.id, safe=False)

@csrf_exempt
def delete_document(request, id):
    document = Document.objects.get(id=id)
    document.delete()
    return JsonResponse({}, safe=False)

#vacations
@csrf_exempt
def get_vacations(request):
    vacations = Vacation.objects.all()
    response = []
    for vacation in vacations:
        user = {
            "username" : User.objects.get(id=vacation.userId).username,
            "imageUrl" : get_file(User.objects.get(id=vacation.userId).avatarId),
        }
        response.append({
            "id" : vacation.id,
            "user" : user,
            "title" : vacation.title,
            "description" : vacation.description,
            "start" : vacation.start,
            "end" : vacation.end,
        })
    return JsonResponse(response, safe=False)


@csrf_exempt
def add_vacation(request):
    data = JSONParser().parse(request)
    vacation = Vacation.objects.create(
        userId=data['userId'], 
        title=data['title'], 
        description=data['description'], start=data['start'], 
        end=data['end']
    )
    vacation.save()
    return JsonResponse(vacation.id, safe=False)

@csrf_exempt
def delete_vacation(request, id):
    vacation = Vacation.objects.get(id=id)
    vacation.delete()
    return JsonResponse({}, safe=False)

@csrf_exempt
def update_vacation(request, id):
    data = JSONParser().parse(request)
    vacation = Vacation.objects.get(id=id)
    vacation.title = data['title']
    vacation.description = data['description']
    vacation.start = data['start']
    vacation.end = data['end']
    vacation.save()
    return JsonResponse({}, safe=False)

#files

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