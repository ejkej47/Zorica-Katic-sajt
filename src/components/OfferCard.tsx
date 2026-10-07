import Link from "next/link";

export type OfferCardProps = {
  category: string;
  title: string;
  description: string;
  href: string;
  index: number;
  image?: string;
  action?: string;
};

export function OfferCard({ category, title, description, href, index, image, action = "Saznaj više" }: OfferCardProps) {
  return (
    <Link href={href} className={`offer-card offer-card-${index}`}>
      <span className={`offer-art offer-art-${index}${image ? " offer-art-image" : ""}`} aria-hidden="true">
        {image && <img src={image} alt="" loading="lazy" decoding="async" />}
      </span>
      <span className="offer-index">{category}</span>
      <h3>{title}</h3>
      <p>{description}</p>
      <span className="offer-link">{action}</span>
    </Link>
  );
}
