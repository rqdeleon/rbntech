import Link from "next/link";
import Label from "@/components/ui/label";

export default function CategoryLabel({
  categories,
  nomargin = false
}) {
  return (
    <div className="flex gap-3">
      {categories?.length &&
        categories.slice(0).map((cat, index) => (
          <Link
            href={`/category/${cat.slug.current}`}
            key={index}>
            <Label nomargin={nomargin} color={cat.color ? cat.color : " "}>
              {cat.name}
            </Label>
          </Link>
        ))}
    </div>
  );
}
