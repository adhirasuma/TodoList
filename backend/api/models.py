from django.db import models

# Create your models here.
class Todolist(models.Model):

    id=models.AutoField(primary_key=True)
    task=models.CharField(max_length=100)
    status=models.BooleanField(default=True)

    def __str__(self):
        return self.task