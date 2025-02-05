# The backend of the project with services and subscriptions.\Created to participate in a team hackathon.

## Эндпойнты:

| Метод  | Эндпойнт                                    | Описание                                                        |
|--------|---------------------------------------------|-----------------------------------------------------------------|
| GET    | /api/v1/subscription/                       | Список всех доступных подписок приложения.                      |
| GET    | /api/v1/subscription/\<int:pk\>/            | Конкретная подписка с описанием.                                |
| GET    | /api/v1/services/                           | Список всех сервисов.                                           |
| GET    | /api/v1/services/{service_id}/subscription/ | Список доступных подписок одного конкретного сервиса.           |
| GET    | /api/v1/user/notification/                  | Список уведомлений пользователя.                                |
| GET    | /api/v1/user/subscription/                  | Список всех подписок пользователя.                              |
| GET    | /api/v1/user/subscription/{id}              | Конкретная подписка пользователя.                               |
| GET    | /api/v1/user/cashback/                      | Сумма Кешбэка у пользователя на данны момент (от всех покупок). |
| POST   |                                             | Создание подписки                                               |
| DELETE |                                             | Удаление подсписки                                              |