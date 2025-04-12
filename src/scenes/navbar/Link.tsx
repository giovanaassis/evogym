import { SelectedPages } from "@/shared/types";
import AnchorLink from "react-anchor-link-smooth-scroll";

type Props = {
  page: string;
  selectedPage: SelectedPages;
  setSelectedPage: (value: SelectedPages) => void;
};

const Link = ({ page, selectedPage, setSelectedPage }: Props) => {
  const lowerCasePage = page.toLowerCase().replace(/ /g, "") as SelectedPages;

  return (
    <AnchorLink
      className={`${selectedPage === lowerCasePage ? "text-(--color-primary-500)" : ""} hover:text-primary-300 transition duration-500`}
      href={`#${lowerCasePage}`}
      onClick={() => setSelectedPage(lowerCasePage)}
    >
      {page}
    </AnchorLink>
  );
};

export default Link;
