import About from "@/components/About";
import Acceuil from "@/components/Acceuil";
import Header from "@/components/Header";

export default function Home() {
  return (
    <div >
      <Header />
      <main className="acceuil" >
        {/* <h1>NDIHOKUBWAYO Eric</h1>
        <p>Analyste Programmeur</p>
        <Image  src="/images/kkoo.jpg" alt="mon image" width={200} height={200}/> */}
        <Acceuil/>
        <About/>

      
      </main>
    </div>
  );
}
