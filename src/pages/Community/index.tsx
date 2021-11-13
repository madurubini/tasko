import { ContainerInput, LogoHeader } from "./styles";
import Logo from '../../assets/image/logo.png';
import { InputCommunit } from "../../components/InputCommunit";

const Community = () => {
  return <>
      <LogoHeader>
          <img src={Logo} alt="" />
      </LogoHeader>
      <ContainerInput>
        <InputCommunit />
      </ContainerInput>
  </>;
};

export default Community;
