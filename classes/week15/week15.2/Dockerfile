FROM node:20

WORKDIR /app
 
# These are copied before separately because these steps are same for all node projects and the package json and prisma schema won't change that often,
# hence we can cache a few more layers till npm install and prisma generate. This is using the benifits of caching layers 

COPY package* .
COPY ./prisma .

RUN npm install
RUN npx prisma generate

# So in this case we have cached 6 layers compared to 2 layers in the 1st class's Dockerfile

COPY . .
RUN npm run build

EXPOSE 3000

CMD ["node", "dist/index.js"]
