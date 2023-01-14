FROM node:lts-alpine3.17
# RUN addgroup app && adduser -S -G app app
# USER app
WORKDIR /app
COPY package.json .
COPY yarn.lock .
RUN yarn install --frozen-lockfile
COPY . . 
ENV API_URL=http://api.myapp.com/
EXPOSE 3000


CMD ["yarn", "dev"]


# To build it for production:
# docker build -t levelup-web-prud --target production .
# To build it for delvelopment:
# docker build -t levelup-web-dev --target delvelopment .

# To use it locally for development:
# docker build -t levelup-web-dev --target development .
# docker run --rm -it --name devServer -p 3000:3000 -v ${PWD}:/app -w /app levelup-web-dev