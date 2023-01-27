import { AuthSession } from 'expo'

const GOOGLE_CLIENT_ID = '439608126969-u6kjp9cqmplt0a7qf5a7cc6k50bu7n84.apps.googleusercontent.com'
const GOOGLE_AUTH_URL = 'https://accounts.google.com/o/oauth2/auth';

export default function googleLogin() {
  const redirectUrl = AuthSession.getRedirectUrl();
  const authUrl = `${GOOGLE_AUTH_URL}?client_id=${GOOGLE_CLIENT_ID}&redirect_uri=${redirectUrl}&response_type=code&scope=email`;
  const result = AuthSession.startAsync({ authUrl });
  // Handle the result to get the user's access token
}