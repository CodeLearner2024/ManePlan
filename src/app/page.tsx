import Header from "@/components/Header";
import Image from "next/image";

export default function Home() {
  return (
    <div >
      <Header />
      <main className="acceuil" >
        <h1>NDIHOKUBWAYO Eric</h1>
        <p>Analyste Programmeur</p>
        <Image  src="/images/kkoo.jpg" alt="mon image" width={200} height={200}/>

      
      </main>
    </div>
  );
}
