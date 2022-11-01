import {KeycloakService} from "keycloak-angular";
import {environment} from "../../environments/environment";

export function initializeKeycloak(keycloak: KeycloakService): () => Promise<boolean> {
    return () =>
        keycloak.init({
            config: environment.keycloak,
            initOptions: {
                pkceMethod: 'S256',
                onLoad: 'check-sso',
                checkLoginIframe: false
            },
            bearerExcludedUrls: []
        });
}