from django.contrib import admin
from django.contrib.auth.admin import UserAdmin
from .models import CustomUser, Todolist

# Register your models here.
admin.site.register(Todolist)

@admin.register(CustomUser)
class CustomUserAdmin(UserAdmin):
    pass