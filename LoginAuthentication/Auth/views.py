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
        pass
    return render(request,'signup.html')