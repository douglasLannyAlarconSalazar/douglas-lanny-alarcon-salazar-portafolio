import LeftMenu from "@/components/organisms/LeftMenu";
import MainContent from "@/components/organisms/MainContent";
import RightMenu from "@/components/organisms/RightMenu";

export default function Home() {
  return (
    <div className="w-full flex flex-col justify-center sm:flex-row">

      <LeftMenu />
   

      <MainContent />


      <RightMenu /> 

    </div>
  );
}

