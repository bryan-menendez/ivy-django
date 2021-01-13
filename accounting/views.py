from django.shortcuts import render
from django.http import HttpResponse

def home(request):
    return render(request, 'accounting/dashboard.html')

def products(request):
    return render(request, 'accounting/products.html')

def customers(request):
    return render(request, 'accounting/customers.html')