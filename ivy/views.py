from django.shortcuts import render
from django.http import HttpResponse
from accounting.models import Order

def index(request):
    total_orders = Order.objects.count()
    pending_orders = Order.objects.filter(status='pending').count()
    delivered_orders = Order.objects.filter(status='delivered').count()

    context = {'delivered_orders' : delivered_orders, 'total_orders' : total_orders,
        'pending_orders' : pending_orders
    }

    return render(request, 'ivy/index.html', context)