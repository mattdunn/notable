FROM node:0.12.2

WORKDIR /app
ADD . /app/
RUN npm install
EXPOSE 4000
