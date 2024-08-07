// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

import { Luv2ShopFormService } from "src/app/services/luv2-shop-form.service";

export const environment = {
  production: false,
  luv2ShopApiUrl: "https://localhost:9898/api",
  stripePublishableKey: "pk_test_51Pa2E32MrxjyLINLTKQEXnqttd47b9bpCaucmFKBlzlsiNYqy1xlBncC4M1wLV23XzEeOrXmTzdH2rN9das1flj000rRg2Aysm"
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
