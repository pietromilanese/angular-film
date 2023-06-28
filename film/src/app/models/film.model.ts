export interface Film {
    "score": number,
    "show": {
        "id": number,
        "url": string,
        "name": string,
        "type": string,
        "language": string,
        "genres": string[],
        "status": string,
        "runtime": number,
        "averageRuntime": number,
        "premiered": string,
        "ended": string,
        "officialSite": string,
        "schedule": {
            "time": string,
            "days": string[]
        },
        "rating": {
            "average": number
        },
        "weight": number,
        "network": {
            "id": number,
            "name": string,
            "country": {
                "name": string,
                "code": string,
                "timezone": string
            },
            "officialSite": string
        },
        "webChannel": null,
        "dvdCountry": null,
        "externals": {
            "tvrage": number,
            "thetvdb": number,
            "imdb": string
        },
        "image": {
            "medium": string | null,
            "original": string
        },
        "summary": string,
        "updated": number,
        "_links": {
            "self": {
                "href": string
            },
            "previousepisode": {
                "href": string
            }
        }
    }
}

export interface FilmDetail {
    id: number,
    name: string,
    image: {
        original: string
    },
    summary: string
}



