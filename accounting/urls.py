from django.urls import path
from . import views

urlpatterns = [
    path('', views.home, name="accounting_home"),
    path('products', views.products, name="accounting_products"),
    path('customers', views.customers, name="accounting_customers"),
    path('customer/<int:pk>', views.customer, name="accounting_customer"),
    path('order/create', views.orderCreate, name="accounting_order_create"),
    path('order/view/<int:pk>', views.orderView, name="accounting_order_view"),
    path('order/update/<int:pk>', views.orderUpdate, name="accounting_order_update"),
    path('order/delete/<int:pk>', views.orderDelete, name="accounting_order_delete"),
]