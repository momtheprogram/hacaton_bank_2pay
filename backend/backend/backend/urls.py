from django.conf import settings
from django.conf.urls.static import static
from django.contrib import admin
from django.urls import include, path
from drf_yasg import openapi
from drf_yasg.views import get_schema_view
from rest_framework import permissions

schema_view = get_schema_view(
    openapi.Info(
        title='Pay2u API',
        default_version='v1',
        description='Описание API endpoint for Pay2u',
        contact=openapi.Contact(email='admin@pay2u.ru'),
        license=openapi.License(name='MIT License'),
    ),
    public=True,
    permission_classes=[permissions.AllowAny],
)

urlpatterns = [
    path('api/v1/', include('api.urls', namespace='api_v1')),
    path('admin/', admin.site.urls),
    path(
        'docs/', schema_view.with_ui('swagger', cache_timeout=0), name='docs'
    ),
]

if settings.DEBUG:
    urlpatterns += static(
        settings.STATIC_URL, document_root=settings.STATIC_ROOT
    )
    urlpatterns += static(
        settings.MEDIA_URL, document_root=settings.MEDIA_ROOT
    )
