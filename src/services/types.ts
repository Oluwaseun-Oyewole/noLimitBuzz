export interface UsersResponse {
  id: number;
  name: string;
  email: string;
  username: string;
  phone: string;
  website: string;
  address: {
    city: string;
    street: string;
    geo: { lat: string; lng: string };
    zipCode: string;
    suite: string;
  };
  company: { name: string; catchPhrase: string };
}
