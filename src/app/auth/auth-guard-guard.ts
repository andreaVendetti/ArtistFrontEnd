import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from './auth-service';
import { map, catchError } from 'rxjs/operators';
import { of } from 'rxjs';

export const authGuardGuard: CanActivateFn = () => {
  const auth = inject(AuthService);
  const router = inject(Router);

  if (!auth.isLogged()) {
    return router.createUrlTree(['/login']);
  }

  return auth.validateToken().pipe(
    map(() => true),
    catchError(() => {
      auth.logout();
      return of(router.createUrlTree(['/login']));
    })
  );
};