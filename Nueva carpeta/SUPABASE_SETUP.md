# NEXA AI — configuración de la API

La clave de NVIDIA **no se guarda en el frontend ni en Git**. Debe configurarse como secreto de Supabase.

## 1. Secrets de Edge Function

Configura estos secretos en tu proyecto Supabase:

- `NVIDIA_API_KEY` — tu clave de NVIDIA
- `NVIDIA_BASE_URL` — `https://integrate.api.nvidia.com/v1`
- `NEXA_PRIMARY_MODEL` — modelo principal
- `NEXA_ADVANCED_MODEL` — fallback
- `NEXA_PREMIUM_MODEL` — fallback final
- `NEXA_ALLOWED_ORIGIN` — dominio de tu web en producción

Ejemplo con Supabase CLI:

```bash
supabase secrets set NVIDIA_API_KEY="TU_CLAVE" NVIDIA_BASE_URL="https://integrate.api.nvidia.com/v1" NEXA_PRIMARY_MODEL="nvidia/nemotron-3.5-super-120b-a12b" NEXA_ADVANCED_MODEL="nvidia/nemotron-3.5-super-120b-a12b" NEXA_PREMIUM_MODEL="nvidia/nemotron-3.5-super-120b-a12b" NEXA_ALLOWED_ORIGIN="https://nexaasistenteia.netlify.app"
```

## 2. Deploy

```bash
supabase functions deploy nexa-ai --no-verify-jwt
```

## 3. Frontend

Crea `.env.local` (no se incluye en Git):

```env
VITE_SUPABASE_URL=https://TU-PROYECTO.supabase.co
VITE_SUPABASE_ANON_KEY=TU_ANON_KEY
```

## Seguridad

La clave NVIDIA recibida durante esta conversación debe considerarse expuesta y **rotarse antes de producción**. No la he incluido en el ZIP.


## Producción NEXA

Origen permitido configurado para Netlify: `https://nexaasistenteia.netlify.app`.

No guardes `NVIDIA_API_KEY` dentro del frontend ni en el ZIP. Configúrala como secret de la Edge Function en Supabase. Supabase recomienda mantener las credenciales sensibles como secretos de producción y acceder a ellas desde la Edge Function.
