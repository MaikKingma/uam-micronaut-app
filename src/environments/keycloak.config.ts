import {KeycloakConfig} from "keycloak-js";

const keycloakConfig: KeycloakConfig = {
    url: 'http://localhost:8080' + '/auth',
    realm: 'intranet-b2x',
    clientId: 'example',
}

export default keycloakConfig;