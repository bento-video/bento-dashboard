#pull official base image
FROM node:13.12.0-alpine

#set working directory, tells Docker the folder that it should be performing the following commands in
WORKDIR /usr/src/app

# add `/app/node_modules/.bin` to $PATH
ENV PATH /usr/src/app/node_modules/.bin:$PATH
ENV PORT 4000

#install app dependencies
# COPY package.json ./
# COPY package-lock.json ./
COPY package*.json /usr/src/app/
RUN npm install

#add app
COPY . ./

#Run the specified command within the container.
CMD [ "npm", "start" ]

#Tells Docker to open port 4000 on the container when it is running
EXPOSE 4000