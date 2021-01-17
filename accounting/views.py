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
    customers = Customer.objects.all()

    for c in customers:
        orders = c.order_set.all()
        c.order_pending_count = orders.filter(status="pending").count()
        c.total_spent = 0

        for o in orders:
            c.total_spent += o.product.price

    context = {
        'customers' : customers,
    }

    return render(request, 'accounting/customers.html', context)
    
def customer(request, pk):
    customer = Customer.objects.get(id=pk)
    orders = customer.order_set.all()

    context = {
        'customer' : customer,
        'customer_orders' : orders,
    }

    return render(request, 'accounting/customer.html', context)