import HeroBanner from "../../components/HeroBanner/HeroBanner";
import "./EmotionStatePage.scss";

export default function EmotionStatePage() {
  return (
    <main className="page page--states">
      <HeroBanner title="Reactive States" />
      <section className="cards"></section>
    </main>
  );
}
