import BottomCompanies from "../Components/bottomCompanies/BottomCompanies";
import Benefits from "../Components/benefits/Benefits";
import Companies from "../Components/companies/Companies";
import Jumbotron from "../Components/jumbotron/Jumbotron";

export default function HomePage() {
  return (
    <div>
      <Jumbotron />
      <Companies />
      <Benefits />
      <BottomCompanies />
    </div>
  );
}
