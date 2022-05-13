export interface searchHosts {
    matches: [
        {
            hash: number,
            uuid: string,
            timestamp: string,
            isp: string,
            transport: string,
            data: string,
            asn: string,
            port: number,
            hostnames: [
                string
            ],
            location: {
                city: string,
                region_code: string,
                area_code: any,
                longitude: number,
                latitude: number,
                postal_code: any,
                country_code: string,
                country_name: string
            },
            ip: number,
            domains: [
                string
            ],
            org: string,
            os: any,
            _shodan: {
                crawler: string,
                options: {},
                id: string,
                module: string,
                ptr: boolean
            },
            ip_str: string
        },
    ],
    total: number
}
