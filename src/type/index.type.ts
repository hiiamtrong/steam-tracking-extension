declare interface PriceOverview {
  initial: number;
  final: number;
  discount_percent: number;
  initial_formatted: string;
  final_formatted: string;
  currency: string;
}

declare interface Platforms {
  windows: boolean;
  mac: boolean;
  linux: boolean;
}

declare interface Category {
  id: number;
  description: string;
}

declare interface ReleaseDate {
  coming_soon: boolean;
  date: string;
}

declare interface Metacritic {
  score: number;
  url: string;
}

declare interface Genre {
  id: string;
  description: string;
}

declare interface Screenshot {
  id: number;
  path_thumbnail: string;
  path_full: string;
}

declare interface Movie {
  id: number;
  name: string;
  thumbnail: string;
  Webm: {
    '480': string;
    max: string;
  };
  Mp4: {
    '480': string;
    max: string;
  };
  highlight: boolean;
}

declare interface Recommendation {
  total: number;
}

declare interface SupportInfo {
  url: string;
  email: string;
}

export interface IGame {
  steam_appid: number;
  name: string;
  type: string;
  required_age: any;
  dlc: number[];
  detailed_description: string;
  pc_requirements: any;
  mac_requirements: any;
  linux_requirements: any;
  legal_notice: string;
  developers: string[];
  publishers: string[];
  packages: number[];
  metacritic?: Metacritic;
  genres: Genre[];
  screenshots: Screenshot[];
  movies: Movie[];
  recommendations?: Recommendation;
  support_info?: SupportInfo;
  background: string;
  background_raw: string;
  controller_support: string;
  short_description: string;
  supported_languages: string;
  about_the_game: string;
  header_image: string;
  platforms?: Platforms;
  categories: Category[];
  price_overview?: PriceOverview;
  release_date?: ReleaseDate;
  is_free: boolean;
}
