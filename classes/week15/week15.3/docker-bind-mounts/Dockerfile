FROM node:20

WORKDIR /nextapp

COPY package* .

RUN npm install

COPY . .

CMD ["npm", "run", "dev"]


# To enable hot reloading from the changes you make in your code locally, we run the docker container as follows

# docker run -p 3000:3000 -v .:/nextapp <image-name> 
# here . means our current directory is mapped to the /nextapp directory (working directory) within the container