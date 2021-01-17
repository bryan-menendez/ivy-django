from django.urls import path
from . import views

urlpatterns = [
    path('', views.home, name="accounting_home"),
    path('products', views.products, name="accounting_products"),
    path('customers', views.customers, name="accounting_customers"),
    path('customer/<int:pk>', views.customer, name="accounting_customer"),
]