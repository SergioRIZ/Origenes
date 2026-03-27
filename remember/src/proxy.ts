import { type NextRequest } from "next/server";
import { updateSession } from "@/lib/supabase/proxy";

// Este proxy se ejecuta ANTES de cada petición a la app.
// Su único trabajo es refrescar la sesión del usuario.
export async function proxy(request: NextRequest) {
  return await updateSession(request);
}

// matcher: define en qué rutas se ejecuta el proxy.
// Excluimos archivos estáticos e imágenes porque no necesitan autenticación.
export const config = {
  matcher: [
    "/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)",
  ],
};
