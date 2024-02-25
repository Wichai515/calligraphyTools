"""
URL configuration for mysite project.

The `urlpatterns` list routes URLs to Apps. For more information please see:
    https://docs.djangoproject.com/en/4.2/topics/http/urls/
Examples:
Function Apps
    1. Add an import:  from my_app import Apps
    2. Add a URL to urlpatterns:  path('', Apps.home, name='home')
Class-based Apps
    1. Add an import:  from other_app.Apps import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path
from Apps import views

urlpatterns = [
    path('admin/', admin.site.urls),
    path('login/', views.login, name='login'),
]
