// config/spotifyConfig.ts
import { SPOTIFY_CLIENT_ID, SPOTIFY_REDIRECT_URL } from '@env';

export const SPOTIFY_AUTH_ENDPOINT = 'https://accounts.spotify.com/authorize';
export const SPOTIFY_TOKEN_ENDPOINT = 'https://accounts.spotify.com/api/token';

export const SPOTIFY_SCOPES = [
  'user-read-email',
  'user-read-private',
  'playlist-read-private',
].join(' ');
