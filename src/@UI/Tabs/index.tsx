import Icon from "../Icon";
// import { AnimatePresence, motion } from "framer-motion";

type TabsProps = {
  tabs: {
    label: string;
    index: number;
    Component: React.FC<{ index: number }>;
  }[];
  selectedTab: number;
  onClick: (index: number) => void;
  orientation?: "horizontal" | "vertical";
  className?: string;
};

const Tabs: React.FC<TabsProps> = ({
  className = "tabs-component",
  tabs = [],
  selectedTab = 0,
  onClick,
  orientation = "horizontal",
}) => {
  const Panel = tabs && tabs.find((tab) => tab.index === selectedTab);

  return (
    <div
      className={
        orientation === "vertical" ? className + " vertical" : className
      }
    >
      <div
        role="tablist"
        aria-orientation={orientation}
        className="flex overflow-x-auto whitespace-nowrap md:pb-0 pb-3"
      >
        {tabs.map((tab) => (
          <button
            className={`px-2 md:py-4 py-2 flex-grow text-center cursor-pointer bg-gray-50 relative first-of-type:rounded-s-xl last-of-type:rounded-e-xl hover:text-primary  ${
              tab.index > 1
                ? "before:border-l before:absolute before:top-2 before:bottom-2 before:start-0"
                : ""
            } ${selectedTab === tab.index ? "text-primary" : "text-gray-400"}`}
            onClick={() => onClick(tab.index)}
            key={tab.index}
            type="button"
            role="tab"
            aria-selected={selectedTab === tab.index}
            aria-controls={`tabpanel-${tab.index}`}
            tabIndex={selectedTab === tab.index ? 0 : -1}
            id={`btn-${tab.index}`}
          >
            {tab.label}
            <Icon name="lineHeight" className="ms-2 align-middle" />
          </button>
        ))}
      </div>

      <div
        role="tabpanel"
        aria-labelledby={`btn-${selectedTab}`}
        id={`tabpanel-${selectedTab}`}
        className="p-4 min-h-[calc(100vh-200px)]"
      >
        {Panel && <Panel.Component index={selectedTab} />}
      </div>
    </div>
  );
};
export default Tabs;
