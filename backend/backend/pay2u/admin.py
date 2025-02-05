from django.contrib import admin

from .models import (
    Cashback,
    Notification,
    Payments,
    Rate,
    Services,
    Subscription,
    UserSubscription,
)

admin.site.register(Rate)
admin.site.register(Services)
admin.site.register(Subscription)
admin.site.register(Cashback)
admin.site.register(Payments)
admin.site.register(Notification)
admin.site.register(UserSubscription)
