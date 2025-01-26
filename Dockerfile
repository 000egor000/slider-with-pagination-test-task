# Указываем базовый образ
FROM node:18 AS builder

# Устанавливаем рабочую директорию
WORKDIR /app

# Копируем package.json и package-lock.json (или yarn.lock)
COPY package*.json ./

# Устанавливаем зависимости
RUN npm install

# Копируем все файлы проекта
COPY . .

# Собираем проект
RUN npm run build

# Создаем финальный образ
FROM node:18 AS runner

# Устанавливаем рабочую директорию
WORKDIR /app

# Копируем только необходимые файлы из builder
COPY --from=builder /app/next.config.ts ./
COPY --from=builder /app/package*.json ./
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next ./.next

# Устанавливаем только продакшн зависимости
RUN npm install --production

# Указываем переменную окружения для Next.js
ENV NODE_ENV=production

# Открываем порт
EXPOSE 3000

# Запускаем приложение
CMD ["npm", "start"]

