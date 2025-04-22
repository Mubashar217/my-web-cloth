import Image from "next/image";
import Navbar from "./(components)/Navbar/Navbar";
import Header from "./(components)/Header/Header";
import Shopes from "./(components)/Shopes/Shopes";
export default function Home() {
  return (
   <>
   <Navbar/>
   <Header/>
   <Shopes/>
   </>
  );
}
