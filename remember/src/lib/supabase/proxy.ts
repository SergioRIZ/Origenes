import { createServerClient } from "@supabase/ssr";
import { NextResponse, type NextRequest } from "next/server";

export async function updateSession(request: NextRequest) {
  // Creamos una respuesta base que simplemente deja pasar la petición.
  // Usamos 'let' porque puede ser reemplazada más adelante si hay cookies nuevas.
  let supabaseResponse = NextResponse.next({
    request,
  });

  // Creamos el cliente de Supabase para el proxy.
  // Este cliente necesita acceso a las cookies de la petición para leer/escribir la sesión.
  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        // Lee todas las cookies de la petición entrante
        getAll() {
          return request.cookies.getAll();
        },
        // Cuando Supabase necesita actualizar las cookies (ej: refrescar el token):
        // 1. Las actualiza en la request (para que el servidor las vea)
        // 2. Crea una nueva respuesta con la request actualizada
        // 3. Las añade a la respuesta (para que el navegador las guarde)
        setAll(cookiesToSet) {
          cookiesToSet.forEach(({ name, value }) =>
            request.cookies.set(name, value)
          );
          supabaseResponse = NextResponse.next({
            request,
          });
          cookiesToSet.forEach(({ name, value, options }) =>
            supabaseResponse.cookies.set(name, value, options)
          );
        },
      },
    }
  );

  // Verificamos si hay un usuario autenticado.
  // getUser() también refresca el token si está a punto de expirar.
  const { data } = await supabase.auth.getUser();
  const user = data?.user;

  // Si NO hay usuario y la ruta NO es login ni auth, redirigimos al login.
  // Esto protege todas las rutas privadas de la app.
  if (
    !user &&
    !request.nextUrl.pathname.startsWith("/login") &&
    !request.nextUrl.pathname.startsWith("/auth") &&
    !request.nextUrl.pathname.startsWith("/register")
  ) {
    const url = request.nextUrl.clone();
    url.pathname = "/login";
    return NextResponse.redirect(url);
  }

  // Si hay usuario (o estamos en login/auth), dejamos pasar la petición.
  return supabaseResponse;
}
