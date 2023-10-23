import Pocketbase from "pocketbase";

const pb = new Pocketbase(process.env.NEXT_PUBLIC_POCKETBASE_URL);
pb.autoCancellation(false);
export default pb;
