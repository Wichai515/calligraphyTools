from django.db import models


class Usert(models.Model):
    us_id = models.AutoField(primary_key=True)
    us_po = models.CharField(max_length=10)
    us_name = models.CharField(max_length=100, unique=True)
    us_email = models.EmailField(unique=True)
    us_telephone = models.CharField(max_length=11, unique=True)
    us_passwd = models.CharField(max_length=128)

    # 如果需要显示用户头像，请添加以下字段
    # us_headphoto = models.ImageField(upload_to='user_photos/', null=True, blank=True)

    class Meta:
        db_table = 'User'
