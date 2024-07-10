import "./ErrorPage.scss";
import HeroBanner from "../../components/HeroBanner/HeroBanner";

export default function ErrorPage() {
  return (
    <main className="page page--error">
      <HeroBanner
        className="page__hero"
        title="404: Not Found"
        titleClass="page__title"
      />
    </main>
  );
}
