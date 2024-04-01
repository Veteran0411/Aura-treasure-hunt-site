from django.db import models
from time import timezone

# Create your models here.
class SubmittedData(models.Model):
    candidate = models.CharField(max_length=20,null=True)
    time=models.CharField(max_length=30,null=True)
    list=models.CharField(max_length=60,null=True)

    
    def __str__(self):       
        return self.candidate +" time taken: "+ self.time+" ==>> "+ self.list