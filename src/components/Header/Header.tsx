import ImageComponent from "../ImageComponent/ImageComponent";
import { NavLinkCustom } from "../NavLinkCustom";

const Header: React.FC = () => {
  return (
    <header className="flex items-center justify-between w-full p-4 border border-gray-300">
      <div className="flex items-center gap-4 cursor-pointer">
        <ImageComponent
          src="/logoHeader/logo-big.svg"
          alt="STEMPS"
          width={28}
          height={28}
        />
        <p className="hidden sm:block">STEMPS</p>
      </div>
      <div className="hidden sm:flex items-center gap-6">
        <NavLinkCustom href="#">О школе</NavLinkCustom>
        <NavLinkCustom href="#">Курсы</NavLinkCustom>
        <NavLinkCustom href="#">Библиотека</NavLinkCustom>
      </div>
      <div className="flex items-center gap-4 cursor-pointer">
        <button className="hidden sm:block">Вход</button>
        <ImageComponent
          src="/logoHeader/back.svg"
          alt="Back"
          width={28}
          height={28}
        />
      </div>
    </header>
  );
};

export default Header;
