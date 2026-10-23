# Nginx image ka use karein
FROM nginx:alpine

# Purani default HTML files remove karein
RUN rm -rf /usr/share/nginx/html/*

# Apne project ki saari files Nginx ke public folder me copy karein
COPY . /usr/share/nginx/html

# Port 80 expose karein
EXPOSE 80

# Nginx ko background ki jagah foreground me run karein
CMD ["nginx", "-g", "daemon off;"]