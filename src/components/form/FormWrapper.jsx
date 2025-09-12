import { Card, useIsMobile } from "elseware-ui";
import classNames from "classnames";

function FormWrapper({ children }) {
  const isMobile = useIsMobile();

  return (
    <Card
      styles={classNames({
        "flex flex-col items-center p-5": true,
        "w-[450px]": !isMobile,
        "w-full": isMobile,
      })}
    >
      {children}
    </Card>
  );
}

export default FormWrapper;
