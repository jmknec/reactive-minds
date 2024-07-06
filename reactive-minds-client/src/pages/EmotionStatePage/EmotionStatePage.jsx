import HeroBanner from "../../components/HeroBanner/HeroBanner";
import "./EmotionStatePage.scss";

export default function EmotionStatePage() {
  return (
    <main className="page page--states">
      <HeroBanner title="Emotion Regulation" />
      <section className="text text--states">
        <h2 className="text__heading text__heading--states">
          What is Emotion Regulation?
        </h2>
        <p className="text__description text__description--states">
          Emotion regulation is the ability to effectively manage and respond to
          an emotional experience. Think of it as a scale where the midpoint
          represents optimal emotion regulation. In this state, individuals are
          able to recognize, understand, and modulate their emotions in a
          healthy and adaptive manner. They can maintain a balance where
          emotions neither overwhelm nor diminish their ability to function.
        </p>
        <h3 className="text__heading text__heading--states">
          Understanding Dysregulation
        </h3>
        <p className="text__description text__description--states">
          On one end of the scale lies hypoarousal or low reactivity. Here,
          individuals may struggle with emotional numbness or difficulty
          engaging with their feelings. This state can manifest as withdrawal,
          lethargy, or disconnection from emotions, making it challenging to
          respond appropriately to emotional cues.
        </p>
        <p className="text__description text__description--states">
          On the opposite end of the spectrum is hyperarousal or high
          reactivity. In this state, emotions are intense and overwhelming,
          often leading to impulsive reactions or emotional outbursts.
          Individuals may feel easily agitated, anxious, or unable to calm down,
          which can interfere with their daily lives and relationships.
        </p>
        <h3 className="text__heading text__heading--states">
          The Spectrum of Emotion Regulation
        </h3>
        <p className="text__description text__description--states">
          Imagine this spectrum as a journey from balanced emotion regulation at
          the midpoint to extremes of hypoarousal and hyperarousal at either
          end. Understanding where an individual falls on this spectrum can
          provide insights into their emotional experiences and behaviors. It
          emphasizes the importance of developing strategies and techniques to
          help individuals, especially children, move towards the center of the
          scale where emotions are managed effectively and constructively.
        </p>
        <p className="text__description text__description--states">
          By exploring this spectrum, caregivers can gain a deeper understanding
          of their child's emotional challenges and tailor interventions to
          support them in achieving greater emotional well-being and
          self-regulation.
        </p>
      </section>
    </main>
  );
}
