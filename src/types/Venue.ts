export default interface Venue {
  id: number;
  name: string;
  address: string | null;
  owner: string | null;
  phone: string | null;
  remark: string | null;
}