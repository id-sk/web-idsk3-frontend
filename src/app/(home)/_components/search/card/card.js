import Link from "next/link";

const Card = ({ page }) => {
  return (
    <li className="first:mt-1 last:mb-1">
      <Link
        href={page.link}
        className="
          relative flex w-full whitespace-nowrap
          px-5 py-3
          hover:bg-neutral-100
          focus-visible:bg-neutral-100
          active:font-bold
          active:text-my-blue
        "
      >
        {page.name}
      </Link>
    </li>
  );
};

export default Card;