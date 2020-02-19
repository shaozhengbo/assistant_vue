FROM nginx
COPY dist/ /home/nginx/html/
COPY nginx/default.conf /etc/nginx/conf.d/default.conf