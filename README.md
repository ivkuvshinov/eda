# recipes-site

Личная книга рецептов. Каждый рецепт — JSON-файл в папке `recipes/`, фото — в `public/recipes/`.

## Запуск локально

```bash
npm install
npm run dev
```

## Сборка

```bash
npm run build
```

Деплой — через GitHub → Vercel, как обычно. `vercel.json` уже настроен на корректную работу клиентского роутинга (страницы рецептов открываются по прямой ссылке).

## Формат рецепта

Файл `recipes/<slug>.json`:

```json
{
  "slug": "borsch-so-svininoy",
  "title": "Борщ со свининой",
  "description": "Короткое описание",
  "photo": "/recipes/borsch-so-svininoy.jpg",
  "gallery": ["/recipes/borsch-so-svininoy-2.jpg", "/recipes/borsch-so-svininoy-3.jpg"],
  "tags": ["обед", "суп"],
  "created_at": "2026-06-16",
  "ingredients": [
    { "name": "Свинина", "amount": 500, "unit": "г" }
  ],
  "steps": [
    { "text": "Сварить бульон", "timer_seconds": 5400, "photo": "/recipes/borsch-so-svininoy-step1.jpg" }
  ]
}
```

- `photo` — главное фото (обложка), путь относительно `public/`, можно `null`
- `gallery` — необязательный массив дополнительных фото, показывается отдельным блоком на странице рецепта
- `photo` в шаге — необязательное поле, фото прямо внутри инструкции (например, как должно выглядеть тесто на этом этапе)
- `timer_seconds` в шаге — необязательное поле, используется только для отображения времени
- `slug` должен быть уникальным и совпадать с именем файла (без `.json`)

## Добавление рецепта

1. Создать `recipes/<slug>.json` по формату выше
2. Если есть фото — положить в `public/recipes/<slug>.jpg`
3. Закоммитить и запушить — Vercel пересоберёт сайт автоматически

(В будущем это будет делать deploybot.)
