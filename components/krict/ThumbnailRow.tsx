import Image from "next/image";
import Link from "next/link";
import { THUMBS } from "@/data/homeContent";

export default function ThumbnailRow() {
  return (
    <div className="mt-10 border-t border-gray-300 pt-8">
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
        {THUMBS.map((thumb) => (
          <Link key={thumb.title} href={thumb.href} className="group block">
            <div className="relative aspect-[4/3] overflow-hidden rounded-sm bg-[#dfeaf4]">
              <Image
                src={thumb.src}
                alt={thumb.alt}
                fill
                sizes="(max-width: 640px) 100vw, 20vw"
                className="object-cover transition-transform group-hover:scale-[1.04]"
              />
            </div>
            <p className="mt-3 text-xs font-semibold text-krict-cyan">
              {thumb.tag}
            </p>
            <p className="mt-1 line-clamp-2 text-sm font-medium text-gray-800 group-hover:text-[#14275c]">
              {thumb.title}
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
}
