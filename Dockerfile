FROM node:18.12 as build


WORKDIR /react-training


COPY package*.json .


RUN yarn install


COPY . .


RUN yarn run build


FROM nginx:1.24


COPY ./nginx/nginx.conf /etc/nginx/nginx.conf


COPY --from=build /react-training/build /usr/share/nginx/html