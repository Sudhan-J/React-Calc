import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const Profiles = ({ children }: Props) => {
  return (
    <>
      {children}
      <img
        src="https://media.formula1.com/image/upload/f_auto,c_limit,q_75,w_1320/content/dam/fom-website/drivers/2024Drivers/verstappen"
        alt="Max Vesrtappen"
      />
    </>
  );
};

export default Profiles;
