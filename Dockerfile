FROM nginx:1.11.10

# TODO: install node and compile inside here, then remove it all...
RUN mkdir -p /usr/share/nginx/html
COPY ./build /usr/share/nginx/html
COPY ./backend/shows.tar.gz /usr/share/nginx/html
RUN cd /usr/share/nginx/html/ && tar -xvzf shows.tar.gz && rm shows.tar.gz
CMD ["nginx", "-g", "daemon off;"]
