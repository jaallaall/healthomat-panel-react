import { useDemoConfig } from "hooks";
import { useMemo } from "react";
import { Chart, AxisOptions } from "react-charts";

const ChartHealth: React.FC = (): React.ReactElement => {
  const { data, randomizeData } = useDemoConfig({
    series: 10,
    dataType: "time",
  });

  const primaryAxis = useMemo<AxisOptions<typeof data[number]["data"][number]>>(
    () => ({
      getValue: (datum) => datum.primary as Date,
    }),
    []
  );

  const secondaryAxes = useMemo<
    AxisOptions<typeof data[number]["data"][number]>[]
  >(
    () => [
      {
        getValue: (datum) => datum.secondary,
        stacked: true,
        // OR
        // elementType: "area",
      },
    ],
    []
  );
  return (
    <div className="md:flex">
      <div className="md:w-1/2">
        <Chart
          options={{
            data,
            primaryAxis,
            secondaryAxes,
          }}
        />
      </div>
      <div className="md:w-1/2">
        <div className="flex flex-col w-full max-w-lg mx-2 order-1 lg:order-2 mt-4 lg:mt-0 shadow-melow rounded-lg">
          <div className=" flex flex-col items-center w-full min-h-[250px] py-4 relative overflow-hidden">
            <div className=" flex justify-center w-60px] items-center absolute top-8 left-6 cursor-pointer">
              <div className=" rounded-full border mr-[-12px] overflow-hidden w-6 shadow-melow">
                <img
                  className=" w-full"
                  src="/static/images/doctor-defult.svg"
                />
              </div>
              <div className=" rounded-full border mr-[-12px] overflow-hidden w-6 shadow-melow">
                <img
                  className=" w-full"
                  src="/static/images/doctor-defult.svg"
                />
              </div>
              <div className=" rounded-full border mr-[-12px] overflow-hidden w-6 shadow-melow">
                <img
                  className=" w-full"
                  src="/static/images/doctor-defult.svg"
                />
              </div>
              <div className=" rounded-full border mr-[-12px] overflow-hidden w-6 shadow-melow">
                <img
                  className=" w-full"
                  src="/static/images/doctor-defult.svg"
                />
              </div>
            </div>
            <img
              className=" max-w-[80px]"
              src="/static/images/baby-caractor.svg"
            />
            <h2 className=" text-lg mt-2"> مریم گلی </h2>
            <img
              src="/static/images/wave3.svg"
              className=" absolute bottom-0 right-0 left-0"
            />
            <img
              src="/static/images/wave.svg"
              className=" absolute bottom-0 right-0 left-0"
            />
            <img
              src="/static/images/wave1.svg"
              className=" absolute bottom-0 right-0 left-0"
            />
            <div className=" w-full flex justify-between absolute bottom-0 items-center py-6 ">
              <div className=" flex flex-col w-4/12 justify-center items-center ">
                <p className=" font-bold mb-4">سنشون</p>
                <p className=" text-sm">21 ماه</p>
              </div>
              <div className=" flex flex-col w-4/12 justify-center items-center ">
                <p className=" font-bold mb-4">قدشون</p>
                <p className=" text-sm">61 سانتیمتر</p>
              </div>
              <div className=" flex flex-col w-4/12 justify-center items-center ">
                <p className=" font-bold mb-4">وزنشون</p>
                <p className=" text-sm">تعریف نشده</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChartHealth;
