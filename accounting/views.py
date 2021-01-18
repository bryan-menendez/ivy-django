from django.shortcuts import render, redirect
from django.http import HttpResponse
from .models import *
from .forms import *

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

def orderCreate(request):
    if request.method == 'POST':
        form = OrderForm(request.POST)
        if form.is_valid:
            form.save()
            return redirect('accounting_home')
    
    #GET
    form = OrderForm()
    context = {
        'order_upsert_form' : form
    }
    return render(request, 'accounting/order_upsert.html', context)

def orderView(request, pk):
    return null

def orderUpdate(request, pk):
    order = Order.objects.get(id=pk)

    if request.method == 'POST':
        form = OrderForm(request.POST, instance=order)
        if form.is_valid:
            form.save()
            return redirect('accounting_home')
    
    #GET
    form = OrderForm(instance=order)
    context = {
        'order_upsert_form' : form
    }
    return render(request, 'accounting/order_upsert.html', context)


def orderDelete(request, pk):
    order = Order.objects.get(id=pk)

    if request.method == 'POST':
        order.delete()
        return redirect('accounting_home')
    
    #GET
    context = {
        'order' : order
    }
    return render(request, 'accounting/order_delete.html', context)

    