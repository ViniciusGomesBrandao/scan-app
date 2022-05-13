export interface searchHosts {
    code: number,
    status: string,
    result: {
        query: string,
        total: number,
        duration: number,
        hits: [
            {
                ip: string,
                services: [
                    {
                        port: number,
                        service_name: string,
                        transport_protocol: string
                    }
                ],
                location: {
                    continent: string,
                    country: string,
                    country_code: string,
                    city: string,
                    postal_code: string,
                    timezone: string,
                    province: string,
                    coordinates: {
                        latitude: number,
                        longitude: number
                    },
                    registered_country: string,
                    registered_country_code: string
                },
                autonomous_system: {
                    asn: number,
                    description: string,
                    bgp_prefix: string,
                    name: string,
                    country_code: string
                },
                last_updated_at: string
            },
        ],
        links: {
            next: string,
            prev: string
        }
    }
}
