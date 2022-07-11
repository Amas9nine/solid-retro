import Companies from "../components/companies/Companies";
import Jumbotron from "../components/jumbotron/Jumbotron";
import BottomCompanies from "../components/bottomCompanies/BottomCompanies";
import Footer from "../../src/components/footer/Footer";
import BottomCompanies from "../Components/bottomCompanies/BottomCompanies";
import Footer from "../../src/Components/footer/Footer";
import Benefits from "../Components/benefits/Benefits";

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
