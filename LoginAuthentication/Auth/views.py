from django.shortcuts import render,redirect
# import login method 
from django.contrib.auth import login,logout,authenticate
from django.contrib.auth.models import User


# Create your views here.
def log_in(request):
    if request.user.is_authenticated:
        return redirect('/')
    if request.method == 'POST':
        username=request.POST['username']
        password=request.POST['password']
        # authenticate user
        user=authenticate(request,username=username,password=password)
        if user is not None:
            login(request,user)
            return redirect('/')
        else:
            return render(request,'login.html',{'error':'Invalid Credentials'})
    return render(request,'login.html')

def log_out(request):
    logout(request)
    return redirect('/login')
def home(request):
    if not request.user.is_authenticated:
        return redirect('/login')
    return render(request,'index.html')

def sign_up(request):
    if request.user.is_authenticated:
        return redirect('/')
    if request.method == 'POST':
        username=request.POST['username']
        password=request.POST['password']
        email=request.POST['email']
        firstname=request.POST['firstname']
        lastname=request.POST['lastname']
        # check the user is already is created or not 
        if User.objects.filter(username=username).exists():
            return render(request,'signup.html',{'error':'Username already exists'})
        # create user
        user=User.objects.create_user(username=username,password=password,email=email,first_name=firstname,last_name=lastname)
        user.save()
        # login created user
        login(request,user)
        return redirect('/')
    return render(request,'signup.html')