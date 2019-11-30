import { User } from "./User";
import { Company } from "./Company";

export interface Mappable {
    location: {
        lat: number;
        lng: number;
    };
    color: string;
    markerContent(): string;
}

export class CustomMap {
    private googleMap: google.maps.Map;

    constructor(divId) {
        this.googleMap = new google.maps.Map(document.getElementById(divId), {
            zoom: 1,
            center: {
                lat: 0,
                lng: 0
            }
        });
    }

    addMarker(location: Mappable): void {
        const marker = new google.maps.Marker({
            map: this.googleMap,
            position: {
                lat: location.location.lat,
                lng: location.location.lng
            }
        });

        marker.addListener("click", () => {
            const infoWindow = new google.maps.InfoWindow({
                content: location.markerContent()
            });

            infoWindow.open(this.googleMap, marker);
        });
    }

    // addCompanyMarker(company: Company): void {
    //     new google.maps.Marker({
    //         map: this.googleMap,
    //         position: {
    //             lat: company.location.lat,
    //             lng: company.location.lng
    //         }
    //     });
    // }
}
