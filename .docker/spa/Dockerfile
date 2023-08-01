# Base image
FROM node:16-alpine

#ARG project_name

RUN mkdir -p /var/www/spa

#RUN mkdir -p /var/www/$project_name

# Set the working directory
WORKDIR /var/www/spa

#WORKDIR /var/www/$project_name/frontend

# Copy project files to the working directory
COPY ../../spa ./

# Install dependencies using Yarn
RUN apk update && apk add bash && \
    yarn install && yarn global add create-react-app && create-react-app app && yarn add react-router-dom@5.2.0

# Expose the port on which the app will run
EXPOSE 3000

# Start the app
CMD ["yarn", "start"]