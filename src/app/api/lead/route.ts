import { POST as leadsPOST } from '../leads/route';

export async function POST(req: any) {
  return leadsPOST(req);
}
