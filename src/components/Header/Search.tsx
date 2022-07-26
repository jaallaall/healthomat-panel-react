import { useTranslation } from "react-i18next";

const Search: React.FC = (): React.ReactElement => {
  const { t } = useTranslation();
  return (
    <form action="#">
      <div className="flex relative h-10">
        <div className="inline-flex items-center justify-center absolute left-0 top-0 h-full w-10 text-gray-400">
          <svg
            className="h-6 w-6"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </div>
        <input
          id="search"
          type="text"
          name="search"
          className="text-sm sm:text-base placeholder-gray-300 pl-10 pr-4 rounded-lg border border-gray-200 w-full h-10 bg-transparent focus:outline-none focus:border-primary"
          placeholder={t("search") + "..."}
        />
      </div>
    </form>
  );
};

export default Search;
