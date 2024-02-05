#blog/admin.py
from django.contrib import admin
from .models import BlogPage, BlogPageGalleryImage, Author, BlogPageTag, BlogIndexPage, BlogTagIndexPage

class BlogPageGalleryImageInline(admin.TabularInline):
    model = BlogPageGalleryImage

class BlogPageAdmin(admin.ModelAdmin):
    inlines = [BlogPageGalleryImageInline]

# Register the models with the admin site
admin.site.register(BlogPage, BlogPageAdmin)
admin.site.register(Author)
admin.site.register(BlogPageTag)
admin.site.register(BlogIndexPage)
admin.site.register(BlogTagIndexPage)

