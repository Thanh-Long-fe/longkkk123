# 1. Dùng Node.js base image
FROM node:18

# 2. Tạo thư mục làm việc trong container
WORKDIR /app

# 3. Copy file cấu hình vào container
COPY package*.json ./

# 4. Cài đặt dependency
RUN npm install

# 5. Copy toàn bộ source vào container
COPY . .

# 6. Build app NestJS
RUN npm run build

# 7. Mở cổng bạn dùng trong main.ts (thường là 3000)
EXPOSE 3000

# 8. Lệnh khởi chạy app
CMD ["node", "dist/main"]