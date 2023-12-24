from django.db import models
from django.contrib.auth.models import User

# Create your models here.
class UserDetails(models.Model):
    # user will store username and password only
    user=models.OneToOneField(User,on_delete=models.CASCADE)
    # add more fields
    fullname=models.CharField(max_length=100)
    email=models.EmailField()

    class Meta:
        db_table='userdetails'
        ordering=['user']
