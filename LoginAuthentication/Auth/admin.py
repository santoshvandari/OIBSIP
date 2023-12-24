from django.contrib import admin
from .models import UserDetails

# Register your models here.
class UserDetailsDisplay(admin.ModelAdmin):
    list_display=['fullname','email','username']