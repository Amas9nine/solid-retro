import Companies from "../components/companies/Companies";
import Jumbotron from "../components/jumbotron/Jumbotron";
import BottomCompanies from "../components/bottomCompanies/BottomCompanies";
import Footer from "../../src/components/footer/Footer";
import Benefits from "../components/benefits/Benefits";

export default function HomePage() {
  return (
    <div>
      <Jumbotron />
      <Companies />
      <Benefits />
      <BottomCompanies />
      <Footer />
    </div>
  );
}
