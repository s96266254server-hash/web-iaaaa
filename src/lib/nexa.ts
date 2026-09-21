export type Tier = 'primary' | 'advanced' | 'premium';

export interface NEXAResponse {
  response: string;
  tier: Tier;
}

interface NEXAError {
  error: string;
}

export async function askNexa(
  message: string,
  options?: { context?: string; tier?: Tier },
): Promise<NEXAResponse> {
  // Las variables de Netlify tienen prioridad; estos valores públicos permiten
  // que la app funcione incluso si Netlify no carga el archivo .env.production.
  const url =
    import.meta.env.VITE_SUPABASE_URL ||
    'https://polxdnsvntiufvdtqsqc.supabase.co';
  const anonKey =
    import.meta.env.VITE_SUPABASE_ANON_KEY ||
    'sb_publishable_cF0nFy_kN_w7buiNx2XLmg_cM_sObIi';

  const response = await fetch(`${url.replace(/\/$/, '')}/functions/v1/nexa-ai`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${anonKey}`,
      apikey: anonKey,
    },
    body: JSON.stringify({
      message,
      context: options?.context,
      tier: options?.tier ?? 'primary',
    }),
  });

  let data: NEXAResponse | NEXAError | null = null;
  try {
    data = await response.json();
  } catch {
    // The edge function may return an empty/non-JSON error response.
  }

  if (!response.ok) {
    const error = data && 'error' in data ? data.error : `Request failed (${response.status})`;
    throw new Error(error);
  }

  if (!data || !('response' in data) || !data.response) {
    throw new Error('El servicio de IA devolvió una respuesta vacía.');
  }

  return data;
}
