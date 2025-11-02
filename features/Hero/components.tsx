import { SpinningText } from "@ppaop/components/magicui/spinning-text";
import { HorizonGuideLine } from "@ppaop/components/shadcn-ui/horizonGuideLine";

export const Spinner = () => {
  return (
    <div className="absolute bottom-[250px] left-[50%] translate-x-[-50%]">
      <HorizonGuideLine className="absolute top-[-250px]" />
      <SpinningText>see more see more see more</SpinningText>
    </div>
  );
};
