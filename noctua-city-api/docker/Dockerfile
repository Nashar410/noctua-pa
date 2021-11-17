# Use official node image as the base image
FROM node:16-alpine3.14 as build

# Set the working directory
WORKDIR /opt/api

# Add the source code to app
COPY ../ /opt/api/

RUN npm install -g @nestjs/cli

# Install all the dependencies
RUN npm install

# Generate the build of the application
RUN npm run build

EXPOSE 3000

CMD ["npm", "run", "start:dev"]
