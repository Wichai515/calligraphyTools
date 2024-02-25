from django.http import JsonResponse
# from django.contrib.auth.models import User
# from django.contrib.auth import authenticate

from django.views.decorators.csrf import csrf_exempt
from django.contrib.auth.hashers import check_password
from .models import Usert


@csrf_exempt
def login(request):
    # if request.method == "POST":
    #     return JsonResponse({'code': 200, 'msg': 'success'})
    if request.method == 'POST':
        # print(request)
        username = request.POST.get('username')
        password = request.POST.get('password')


        try:
            user = Usert.objects.get(us_name=username)
            # if check_password(password, user.us_passwd):
            if password == user.us_passwd:
                # 登录成功
                return JsonResponse({'message': '登录成功'})
            else:
                # 密码错误
                return JsonResponse({'message': '密码错误'}, status=400)
        except Usert.DoesNotExist:
            # 用户不存在
            return JsonResponse({'message': '用户不存在'}, status=400)

    # 如果不是POST请求，返回错误信息
    return JsonResponse({'message': '请求方法不允许'}, status=405)


