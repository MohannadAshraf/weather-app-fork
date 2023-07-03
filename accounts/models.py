from django.db import models
from django.contrib.auth.models import User
# Create your models here.

class userProfile(User):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    selected_country = models.CharField(max_length=100, null=True, blank=True)


class userSettings(User):
    user = models.OneToOneField(User, on_delete=models.CASCADE)

