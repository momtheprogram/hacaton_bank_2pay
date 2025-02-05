from rest_framework import mixins, permissions, status, viewsets
from rest_framework.decorators import action, api_view
from rest_framework.generics import get_object_or_404, ListAPIView, RetrieveAPIView
from rest_framework.response import Response
from rest_framework.viewsets import ReadOnlyModelViewSet
from django.http import JsonResponse

from pay2u.models import (
    Rate,
    Services,
    Subscription,
    Cashback,
    Payments,
    Notification,
    UserSubscription
)
from serializers import (
    NotificationSerializer,
    CashbackSerializer,
    PaymentsSerializer,
    RateSerializer,
    ServicesSerializer,
    SubscriptionSerializer,
    UserSubscriptionSerializer
)


class SubscriptionViewSet(ReadOnlyModelViewSet): # /api/v1/subscription/
    queryset = Subscription.objects.all()        # /api/v1/subscription/\<int:pk\>/
    serializer_class = SubscriptionSerializer


class ServicesViewSet(ReadOnlyModelViewSet): # /api/v1/services/
    queryset = Services.objects.all()
    serializer_class = ServicesSerializer


class ServicesSubscriptionViewSet(ReadOnlyModelViewSet):  # /api/v1/services/{service_id}/subscription/
    serializer_class = SubscriptionSerializer

    def get_queryset(self):
        # Получаем id сервиса из эндпоинта
        service_id = self.kwargs.get("service_id")
        # И отбираем только нужные подписки
        new_queryset = Subscription.objects.filter(services=service_id)
        return new_queryset


# var 2
# class SubscriptionList(ListAPIView):
#     queryset = Subscription.objects.all()
#     serializer_class = SubscriptionSerializer
#
#
# class SubscriptionDetail(RetrieveAPIView):
#     queryset = Subscription.objects.all()
#     serializer_class = SubscriptionSerializer


# var 1
# @api_view(['GET'])
# def subscription(request):
#     queryset = Subscription.objects.all()
#     serializer = SubscriptionSerializer(queryset, many=True)
#     return Response(serializer.data)


# @api_view(['GET'])
# def subscription_detail(request, pk=None):
#     queryset = Subscription.objects.all()
#     subscription = get_object_or_404(queryset, pk=pk)
#     serializer = SubscriptionSerializer(subscription)
#     return Response(serializer.data)


# @api_view(['GET'])
# def notification(request):
#     queryset = Notification.objects.filter(user=request.user)
#     serializer = NotificationSerializer(queryset, many=True)
#     return Response(serializer.data)


class UserSubscriptionViewSet(viewsets.ViewSet):
    def list(self, request):
        subscriptions = request.user.subscriptions.all()
        serializer = SubscriptionSerializer(subscriptions, many=True)
        return Response(serializer.data)


def user_subscription_list(request):
    subscriptions = UserSubscription.objects.all()
    data = {'subscriptions': list(subscriptions.values())}
    return JsonResponse(data)


def user_subscription_detail(request, subscription_id):
    subscription = UserSubscription.objects.get(id=subscription_id)
    data = {'subscription': {
        'id': subscription.id,
        'user_id': subscription.user_id.id,
        'date_start': subscription.date_start,
        'date_end': subscription.date_end,
        'status': subscription.status,
        'cashback_amount': subscription.cashback.amount,
        'payments_amount': subscription.payments.amount,
        'notification_text': subscription.notification.text
    }}
    return JsonResponse(data)


class NotificationViewSet(mixins.ListModelMixin,
                          mixins.RetrieveModelMixin,
                          viewsets.GenericViewSet
):
    queryset = Notification.objects.all()

    permission_classes = (permissions.IsAuthenticated,)


class SubscriptionViewSet(mixins.ListModelMixin):
    queryset = Subscription.objects.all()
    permissions_classes  = ()
def get_subscription_list(request):
    subscriptions = Subscription.objects.all()
    subscription_list = []
    for subscription in subscriptions:
        subscription_list.append({
            'id': subscription.id,
            'name': subscription.name,
            'description': subscription.description
        })
    return JsonResponse({'subscriptions': subscription_list})


def get_subscription_details(request, subscription_id):
    try:
        subscription = Subscription.objects.get(id=subscription_id)
        return JsonResponse({
            'id': subscription.id,
            'name': subscription.name,
            'description': subscription.description
        })
    except Subscription.DoesNotExist:
        return JsonResponse({'error': 'Subscription not found'}, status=404)


def get_oversubscription_details(request, subscription_id):
    try:
        subscription = Subscription.objects.get(id=subscription_id)
        if subscription.is_oversubscription:
            return JsonResponse({
                'id': subscription.id,
                'name': subscription.name,
                'oversubscription_details': subscription.oversubscription_details
            })
        else:
            return JsonResponse({'error': 'Subscription is not an oversubscription'}, status=400)
    except Subscription.DoesNotExist:
        return JsonResponse({'error': 'Subscription not found'}, status=404)
