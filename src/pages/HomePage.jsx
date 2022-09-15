import BottomCompanies from "../Components/bottomCompanies/BottomCompanies";
import Benefits from "../Components/benefits/Benefits";
import Companies from "../Components/companies/Companies";
import Jumbotron from "../Components/jumbotron/Jumbotron";
import Footer from "../Components/footer/Footer";
import Header from "../Components/headerDashboard";
export default function HomePage() {
  return (
    <div>
      <Header />
      <Jumbotron />
      <Companies />
      <Benefits />
      <BottomCompanies />
      <Footer />
    </div>
  );
}
