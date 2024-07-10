import "./HomePage.scss";
import HeroBanner from "../../components/HeroBanner/HeroBanner";

export default function HomePage() {
  return (
    <main className="page page--home">
      <HeroBanner
        className="page__hero"
        title="Welcome to Reactive Minds"
        titleClass="page__title"
      />
      <section className="text text--home">
        <h2 className="text__heading text__heading--home">Who are we?</h2>
        <p className="text__description text__description--home">
          We're here to support parents and caregivers of children experiencing
          emotion dysregulation. You'll find valuable resources and techniques
          designed to empower you in nurturing your child's emotional
          well-being.
        </p>
        <p className="text__description text__description--home">
          Whether your child is navigating typical developmental challenges or
          faces additional hurdles due to neurodivergence or mental health
          disorders, our goal is to provide practical strategies tailored to
          their needs. From grounding techniques for periods of high reactivity,
          to stimulating play-based activities for periods of low reactivity,
          we're here to help you every step of the way.
        </p>
        <p className="text__description text__description--home">
          Learn more about emotion dysregulation right off the bat, or register
          for an account where you can personalize your experience by saving
          your favorite techniques and tracking their effectiveness over time.
          Together, we can help your child learn to self-regulate and thrive
          emotionally. Join our community and embark on this journey towards
          greater understanding and support.
        </p>
      </section>
    </main>
  );
}
