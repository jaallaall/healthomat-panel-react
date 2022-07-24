import { Tabs } from "@UI";
import { useState } from "react";
import ChartHealth from "./ChartHealth";

type TabsType = {
  label: string;
  index: number;
  Component: React.FC<Record<string, unknown>>;
  icon?: string;
}[];

const tabs: TabsType = [
  {
    label: "قد بر حسب سن",
    index: 1,
    Component: ChartHealth,
    icon: "lineHeight",
  },
  {
    label: "قد بر حسب سن",
    index: 2,
    Component: () => <div>tab2</div>,
    icon: "lineHeight",
  },
  {
    label: "قد بر حسب سن",
    index: 3,
    Component: () => <div>tab3</div>,
    icon: "lineHeight",
  },
  {
    label: "قد بر حسب سن",
    index: 4,
    Component: () => <div>tab4</div>,
    icon: "lineHeight",
  },
];

const HealthCalculator: React.FC = (): React.ReactElement => {
  const [selectedTab, setSelectedTab] = useState<number>(tabs[0].index);

  return (
    <div className="bg-white pt-3 px-3 rounded-lg">
      <Tabs selectedTab={selectedTab} onClick={setSelectedTab} tabs={tabs} />
    </div>
  );
};

export default HealthCalculator;
