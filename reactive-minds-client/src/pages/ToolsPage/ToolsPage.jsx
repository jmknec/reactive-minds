import { Link } from "react-router-dom";
import "./ToolsPage.scss";
import HeroBanner from "../../components/HeroBanner/HeroBanner";

export default function ToolsPage() {
  return (
    <main className="page page--tools">
      <HeroBanner title="Tools for Emotion Regulation" />
      <section className="text text--tools">
        <h2 className="text__heading text__heading--tools">
          Helping Your Child Navigate Emotions
        </h2>
        <p className="text__description text__description--tools">
          Welcome to our interactive resource for supporting your child’s
          emotional journey. Here, you'll discover a variety of effective
          strategies designed to foster emotional regulation in children.
          Whether your child is experiencing moments of high reactivity or low
          reactivity, these tools are tailored to provide the right support at
          the right time.
        </p>
        <Link className="link" to={"/grounding"}>
          <h3 className="text__subheading text__subheading--tools">
            Grounding Strategies for High Reactivity
          </h3>
        </Link>
        <p className="text__description text__description--tools">
          During periods of heightened emotions or hyperarousal, grounding
          strategies can help bring your child back to a calmer state.
          Techniques such as deep breathing exercises, sensory activities like
          holding a comforting object, or guided relaxation can provide
          immediate relief and help your child regain control over their
          emotions.
        </p>
        <Link className="link" to={"/uplifting"}>
          <h3 className="text__subheading text__subheading--tools">
            Uplifting Strategies for Low Reactivity
          </h3>
        </Link>
        <p className="text__description text__description--tools">
          When your child experiences low reactivity or hypoarousal, uplifting
          strategies can help them reconnect with their emotions and
          environment. Encouraging physical activity, engaging in creative arts,
          or practicing mindfulness exercises can stimulate their senses and
          elevate their mood, fostering a sense of engagement and emotional
          responsiveness.
        </p>
        <Link className="link" to={"/all-strategies"}>
          <h3 className="text__subheading text__subheading--tools">
            Practice During Periods of Balanced Regulation
          </h3>
        </Link>
        <p className="text__description text__description--tools">
          Even during periods of balanced emotion regulation, practicing these
          techniques can enhance your child’s emotional resilience and
          self-awareness. By incorporating these tools into daily routines and
          teaching moments, you empower your child to develop lifelong skills
          for managing emotions effectively.
        </p>
        <p className="text__description text__description--tools">
          Explore our interactive list of strategies, tailored to meet your
          child’s unique needs and developmental stage. Together, we can create
          a supportive environment where your child thrives emotionally and
          grows in their ability to regulate and express their feelings.
        </p>
      </section>
    </main>
  );
}
