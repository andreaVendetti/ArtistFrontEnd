import { HttpInterceptorFn } from "@angular/common/http";
import { inject, Inject } from "@angular/core";
import { AuthService } from "./auth-service";

export const authInterceptor : HttpInterceptorFn = (req, next) => {
    const auth = inject(AuthService);
    const utente = auth.getUtente();

    if(utente){
        req = req.clone({
            setHeaders: { "x-utente-id": String(utente.id)}
        });
    }

    return next(req)
}