from django.contrib import admin
from .models import UserDetails

# Register your models here.
class UserDetailsDisplay(admin.ModelAdmin):
    list_display=['fullname','email','get_username']

    def get_username(self, obj):
        return obj.user.username

    get_username.short_description = 'Username'

admin.site.register(UserDetails,UserDetailsDisplay)