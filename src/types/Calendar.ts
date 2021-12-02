export default interface Calendar {
  id: number;
  date: string;
  regular: boolean;
  title: string | null;
  remark: string | null;
  events: Event[] | [];
}