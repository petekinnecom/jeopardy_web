FROM nginx:1.11.10
RUN mkdir -p /usr/share/nginx/html
COPY ./build /usr/share/nginx/html
COPY ./backend/shows.tar.gz /usr/share/nginx/html
RUN cd /usr/share/nginx/html/ && tar -xvzf shows.tar.gz && rm shows.tar.gz
CMD ["nginx", "-g", "daemon off;"]
