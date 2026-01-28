# DannyCell - Backend Mercado Pago

## Instalación

```bash
npm install
```

## Variables de entorno

Copia `.env.example` a `.env` y configura:

```
MP_ACCESS_TOKEN=tu_access_token_de_mercado_pago
PORT=3000
```

## Ejecución

```bash
npm start
```

## Endpoint

### POST /crear-preferencia

Crea una preferencia de pago en Mercado Pago.

**Body:**
```json
{
  "titulo": "Producto DannyCell",
  "precio": 50000
}
```

**Response:**
```json
{
  "id": "123456789-abcdef"
}
```

## Deploy

### Render
1. Conecta este repo a Render
2. Configura las variables de entorno
3. Deploy automático

### Railway
1. Importa el repo a Railway
2. Configura MP_ACCESS_TOKEN
3. Deploy

### Vercel
1. `vercel` en la carpeta
2. Configura variables en dashboard
3. Deploy
