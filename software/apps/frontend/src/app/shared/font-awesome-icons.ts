// imports specific items from Font Awesome icon libraries and creates a 
// list of icons for use in an application

import { IconDefinition } from "@fortawesome/angular-fontawesome";
import { faFacebook, faTwitter, faYoutube } from "@fortawesome/free-brands-svg-icons";
import { faCartShopping, faTruckFast, faUser } from "@fortawesome/free-solid-svg-icons";

export const fontAwsomeIcons: IconDefinition[] = [
    faUser,
    faCartShopping,
    faFacebook,
    faYoutube,
    faTruckFast,
    faTwitter
];