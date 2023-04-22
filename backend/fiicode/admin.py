from django.contrib import admin
from .models import User, Vacation, Document, File

admin.site.register(User)
admin.site.register(Vacation)
admin.site.register(Document)
admin.site.register(File)