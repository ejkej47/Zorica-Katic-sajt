import type { Metadata } from "next";
import { ComingSoonPage } from "@/components/OfferPages";

export const metadata: Metadata = { title: "Komunikacija po dizajnu — Zorica Katić" };
export default function Page() { return <ComingSoonPage title="Komunikacija po dizajnu" description="Nova ponuda je u pripremi. Za sada možeš da se informišeš o drugim načinima rada ili da pošalješ pitanje." />; }
