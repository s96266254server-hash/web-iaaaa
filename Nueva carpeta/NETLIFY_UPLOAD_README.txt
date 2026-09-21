NEXA IA - NETLIFY

Frontend public Supabase configuration is already included in .env.production.

IMPORTANT:
- NVIDIA_API_KEY is NOT included here. Put it in Supabase Edge Function Secrets.
- Set NEXA_ALLOWED_ORIGIN=https://nexaasistenteia.netlify.app in Supabase.
- Netlify build command: npm run build
- Publish directory: dist

If using Netlify Drop/manual deploy, build the project first and upload the generated dist/ folder.
If importing the project from Git, Netlify will use netlify.toml automatically.


CONFIGURACIÓN DE NETLIFY
========================
Build command: npm run build
Publish directory: dist

Variables recomendadas:
VITE_SUPABASE_URL=https://polxdnsvntiufvdtqsqc.supabase.co
VITE_SUPABASE_ANON_KEY=sb_publishable_cF0nFy_kN_w7buiNx2XLmg_cM_sObIi

La aplicación incluye valores públicos de respaldo para evitar el error
"NEXA no está configurado" si Netlify no carga las variables. La clave
privada de NVIDIA NO debe añadirse a Netlify como variable VITE_ ni al ZIP.
