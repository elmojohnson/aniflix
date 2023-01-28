export interface Anime {
  mal_id?: number;
  url?: string;
  images?: Images;
  trailer?: Trailer;
  title?: string;
  type?: string;
  episodes?: number;
  status?: string;
  aired?: Aired;
  duration?: string;
  rating?: string;
  score?: number;
  rank?: number;
  synopsis?: string;
  background?: string;
  season?: string;
  year?: number;
  broadcast?: Broadcast;
  producers?: GeneralItem[];
  licensors?: GeneralItem[];
  studios?: GeneralItem[];
  source?: string;
  genres?: GeneralItem[];
  demographics?: GeneralItem[];
  themes?: GeneralItem[];
  streaming?: Streaming[];
}

interface Images {
  jpg: Image;
  webp: Image;
}

interface Image {
  image_url?: string;
  small_image_url?: string;
  medium_image_url?: string;
  large_image_url?: string;
  maximum_image_url?: string;
}

interface Trailer {
  youtube_id?: string;
  url?: string;
  embed_url?: string;
  images: Image;
}

interface Aired {
  from?: string;
  to?: string;
  string?: string;
}

interface Broadcast {
  day?: string;
  type?: string;
  timezone?: string;
  string?: string;
}

export interface GeneralItem {
  mal_id?: number;
  type?: string;
  name?: string;
  url?: string;
}

export interface Streaming {
  name?: string;
  url?: string;
}

export interface Episode {
  mal_id: number;
  title?: string;
  episode?: string;
  url?: string;
  images?: Images
}

export interface AnimeCharacter {
  character: Character;
  role?: string;
  favorites?: number;
}

interface Character {
  mal_id: number;
  url?: string;
  images?: Images;
  name: string;
  voice_actors?: VoiceActors[];
}

interface VoiceActors {
  person?: {
    mal_id: number;
    url?: string;
    images?: Images;
    name?: string;
  }
  language?: string;
}

export interface Review {
  mal_id: number;
  date?: string;
  review: string;
  score: number;
  tags?: [];
  is_spoiler: boolean;
  user: User
}

interface User {
  username: string;
  images?: Images;
}