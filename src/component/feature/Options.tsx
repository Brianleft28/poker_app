import { Button, Slider } from "@nextui-org/react";

const Options = () => {
  return (
    <>
      <div className="flex flex-col md:flex-row justify-center items-center gap-5 bg-foreground-50/25 p-4">
        <Slider
          isDisabled={false}
          label="Valor"
          showTooltip={true}
          formatOptions={{ style: "currency", currency: "USD" }}
          tooltipValueFormatOptions={{ style: "currency", currency: "USD" }}
          defaultValue={40}
          className="w-md md:w-[525px]"
        />
        <Button
          className="w-44  hover:scale-95 hover:duration-75 hover:transition-all h-16 rounded-none"
          color="primary"
          variant="solid"
        >
          Apostar
        </Button>
        <Button
          className="w-44 hover:scale-95 hover:duration-75 hover:transition-all h-16 rounded-none"
          color="danger"
          variant="bordered"
        >
          Retirar mano
        </Button>
      </div>
    </>
  );
};

export default Options;
