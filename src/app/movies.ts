export interface Movies {
    id: number,
    adult: string,
    backdrop_path: string,
    genre_ids: [];
    original_language: string,
    original_title: string,
    poster_path: string,
    video: boolean,
    
    title: string,
    overview: string,
    popularity: string,
    release_date: string,
    vote_average: string,
    vote_count: string,
}

export interface MoviesData {
    data: Movies[];
}