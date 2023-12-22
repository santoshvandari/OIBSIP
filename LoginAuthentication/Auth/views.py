from django.shortcuts import render

# Create your views here.
def log_in(request):
    return render(request,'login.html')

def log_out(request):
    return render(request,'logout.html')

def home(request):
    return render(request,'index.html')

def sign_up(request):
    return render(request,'signup.html')