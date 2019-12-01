FROM node:12.13.0-alpine as build

WORKDIR /trpo_labs
COPY dist /trpo_labs/dist

FROM nginx:1.17.5-alpine
COPY --from=build /trpo_labs/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
