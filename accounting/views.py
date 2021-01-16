from django.shortcuts import render
from django.http import HttpResponse
from .models import *

def home(request):
    orders = Order.objects.all()
    customers = Customer.objects.all()
    
    total_orders = orders.count()
    pending_orders = orders.filter(status='pending').count()
    delivered_orders = orders.filter(status='delivered').count()

    context = {'orders':orders, 'customers':customers, 
        'delivered_orders' : delivered_orders, 'total_orders' : total_orders,
        'pending_orders' : pending_orders
    }

    return render(request, 'accounting/dashboard.html', context)

def products(request):
    products = Product.objects.all()
    return render(request, 'accounting/products.html', {'products' : products})

def customers(request):
    return render(request, 'accounting/customers.html')