from django.contrib import admin

from .models import User


class UserAdmin(admin.ModelAdmin):
    list_display = (
        'us_first_name',
        'us_last_name',
        'us_email'
    )
    list_display_links = (
        'us_first_name',
        'us_last_name',
        'us_email'
    )
    search_fields = (
        'us_first_name',
        'us_last_name',
        'us_email'
    )
    list_per_page = 25


admin.site.register(User, UserAdmin)
