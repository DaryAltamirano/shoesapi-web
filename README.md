# Ejecutar

## Execute docker compose 
```bash
docker compose up
```

## Run migrations 
Borra del nombre el .example del .env

# Inside the node container

## Run migrations
```bash
npx sequelize db:migrate
```

## Run seeders
```bash
npx sequelize db:seed:all 
```

URL: http://localhost:3000/api/items