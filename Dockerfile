FROM strapi/base:latest

RUN yarn global add strapi

RUN mkdir /srv/app && chown 1000:1000 -R /srv/app
RUN apk --no-cache add curl

WORKDIR /srv/app

EXPOSE 1337 3000

COPY . .

RUN yarn

CMD ["strapi", "start"]
