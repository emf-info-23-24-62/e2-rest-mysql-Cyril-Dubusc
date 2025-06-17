FROM node:18

WORKDIR /app

RUN git clone https://github.com/almoggutin/Node-Express-REST-API-MySQL-JS-Example .

# Créer le fichier .env
RUN echo "PORT=3000\n\
DB_HOST=db\n\
DB_PORT=3306\n\
DB_USERNAME=user347\n\
DB_USERNAME_PASSWORD=pass347\n\
DB_NAME=api_example" > .env

RUN npm install

EXPOSE 3000
CMD ["npm", "run", "dev"]