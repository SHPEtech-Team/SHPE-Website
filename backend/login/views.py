from django.shortcuts import render, redirect
from .forms import RegisterForm

# Create your views here.
def login(response):
    if response.method == "POST":
      form = RegisterForm(response.POST)
      if form.is_valid():
         form.save()

      return redirect("http://127.0.0.1:5501/pages/home.html")
    
    else:
       form = RegisterForm()

    return render(response, "login/login.html", {"form":form})