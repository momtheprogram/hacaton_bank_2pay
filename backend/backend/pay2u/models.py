import uuid

from django.core.validators import MaxValueValidator, MinValueValidator
from django.db import models

from users.models import User

PERCENTAGE_VALIDATOR = [MinValueValidator(0), MaxValueValidator(100)]


class Rate(models.Model):
    id = models.UUIDField(
        primary_key=True,
        editable=False,
        default=uuid.uuid4,
        unique=True,
    )
    title = models.IntegerField(
        verbose_name='Тариф',
    )
    price = models.DecimalField(
        max_digits=6,
        decimal_places=2,
        verbose_name='Стоимость'
    )

    class Meta:
        verbose_name = 'Тариф'
        verbose_name_plural = 'Тарифы'

    def __str__(self):
        list_1 = [1]
        list_2 = [2, 3, 4]
        if self.title in list_1:
            return f'{self.title} месяц'  # проверить, здесь что-то не так. что ожидается на выходе от строки?
        elif self.title in list_2:
            return f'{self.title} месяца'
        else:
            return f'{self.title} месяцев'


class Services(models.Model):  # название модели по идее должно быть в единственном числе
    id = models.UUIDField(
        primary_key=True,
        editable=False,
        default=uuid.uuid4,
        unique=True,
    )
    name = models.CharField(
        verbose_name='Название',
        max_length=50,
        blank=False,
    )
    description = models.TextField(
        verbose_name='Описание',
        blank=True,
    )
    url = models.URLField(
        verbose_name='Адрес',
        blank=False
    )

    class Meta:
        verbose_name = 'Сервис'
        verbose_name_plural = 'Сервисы'

    def __str__(self):
        return f'{self.name} месяц'  # что должна выдавать эта строка?


class Subscription(models.Model):
    id = models.UUIDField(
        primary_key=True,
        editable=False,
        default=uuid.uuid4,
        unique=True,
    )
    service = models.ForeignKey(
        'Services',
        related_name='subscriptions',
        verbose_name='Сервис',
        on_delete=models.CASCADE,
    )
    rate = models.ForeignKey(
        'Rate',
        verbose_name='Тариф',
        on_delete=models.PROTECT
    )
    name = models.CharField(
        verbose_name='Название подписки',
        max_length=50,
        blank=False,
    )
    description = models.TextField(
        verbose_name='Описание',
        blank=True,
    )
    refund = models.DecimalField(
        max_digits=2,
        decimal_places=0,
        validators=PERCENTAGE_VALIDATOR
    )

    class Meta:
        verbose_name = 'Подписка'
        verbose_name_plural = 'Подписки'

    def __str__(self):
        return f'{self.name}'


class Cashback(models.Model):
    STATUS_CASHBACK = (
        ('expected', 'ожидается'),
        ('accrued', 'начислен'),
    )

    id = models.UUIDField(
        primary_key=True,
        editable=False,
        default=uuid.uuid4,
        unique=True,
    )
    amount = models.DecimalField(
        max_digits=6,
        decimal_places=2,
        verbose_name='Сумма'
    )
    status = models.CharField(
        max_length=9,
        choices=STATUS_CASHBACK,
        default='ожидается'
    )

    class Meta:
        verbose_name = 'Кешбэк'

    def __str__(self):
        return self.amount


class Payments(models.Model):
    id = models.UUIDField(
        primary_key=True,
        editable=False,
        default=uuid.uuid4,
        unique=True,
    )
    amount = models.DecimalField(
        max_digits=6,
        decimal_places=2,
        verbose_name='Сумма',
    )
    datetime = models.DateTimeField(
        auto_now_add=True,
        verbose_name='Дата платежа',
    )

    class Meta:
        verbose_name = 'Платёж'
        verbose_name_plural = 'Платежи'

    def __str__(self):
        return self.amount


class Notification(models.Model):
    id = models.UUIDField(
        primary_key=True,
        editable=False,
        default=uuid.uuid4,
        unique=True,
    ),
    text = models.TextField(
        max_length=100,
        verbose_name='Текст сообщения',
    )
    date = models.DateField(
        auto_now_add=True,
        verbose_name='Дата сообщения',
    )

    class Meta:
        verbose_name = 'Сообщение'
        verbose_name_plural = 'Сообщения'

    def __str__(self):
        return self.text


class UserSubscription(models.Model):
    STATUS_SUB = (
        ('active', 'активная'),
        ('inactive', 'не активна'),
    )

    subscription = models.ManyToManyField(
        'Subscription',
        verbose_name='Подписка',
        related_name='subscription',
    )
    user_id = models.ForeignKey(
        User,
        on_delete=models.CASCADE,
        verbose_name='Пользователь',
    )
    date_start = models.DateTimeField(
        auto_now_add=True,
        verbose_name='Дата начала',
    )
    date_end = models.DateTimeField(
        verbose_name='Дата окончания',
    )
    status = models.CharField(
        max_length=8,
        choices=STATUS_SUB,
        default='active',
    )
    cashback = models.ForeignKey(
        'Cashback',
        on_delete=models.PROTECT,
        verbose_name='Кэшбэка',
        related_name='cashback',
    )
    payments = models.ForeignKey(
        'Payments',
        on_delete=models.PROTECT,
        verbose_name='Платежи',
        related_name='payments',
    )
    notification = models.ForeignKey(
        'Notification',
        on_delete=models.PROTECT,Payments
        verbose_name='Сообщения',
        related_name='notification',
    )

    class Meta:
        verbose_name = 'Ваша подписка'
        verbose_name_plural = 'Ваши подписки'
