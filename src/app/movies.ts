export interface Movies {
  dates: {
    maximum: string,
    minimum: string
  },
  page: string,
  results:{
    id: string,
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
  total_pages: string,
  total_results: string
}

export interface MoviesData {
    data: Movies[];
}
