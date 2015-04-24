FROM node:0.12.2

WORKDIR /app
ADD . /app/
RUN npm install
RUN npm run build-scripts
EXPOSE 4000
