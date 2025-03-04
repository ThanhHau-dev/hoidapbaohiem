# Sử dụng image Apache chính thức
FROM httpd:latest

# Sao chép toàn bộ nội dung website vào thư mục gốc của Apache
COPY . /usr/local/apache2/htdocs/

# Mở cổng 80 cho Apache
EXPOSE 80
