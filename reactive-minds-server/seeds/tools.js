/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function seed(knex) {
  await knex("tools").del();
  await knex("tools").insert([
    {
      id: 1,
      name: "Box Breathing",
      effect: "Grounding",
      description:
        "Box breathing is a simple but powerful relaxation technique that aims to return breathing to its usual rhythm after a stressful experience. It involves 4 steps, each of which lasts 4 seconds: \n 1. breathing in \n 2. holding the breath \n 3. breathing out \n 4. holding the breath",
      avg_rating: 4.5,
    },
    {
      id: 2,
      name: "5-4-3-2-1 Senses",
      effect: "Grounding",
      description:
        "Guide the child through a sensory awareness exercise. Ask them to name 5 things they can see, 4 things they can touch, 3 things they can hear, 2 things they can smell, and 1 thing they can taste. This helps them focus on their immediate environment and grounds them in the present moment.",
      avg_rating: 5,
    },
    {
      id: 3,
      name: "Body Scan",
      effect: "Grounding",
      description:
        "Guide the child through a body scan. Tell them to notice how the body feels right now. Starting at the top of the head, gently scan down through the body, noticing what feels comfortable and what feels uncomfortable. Remember, you’re not trying to change anything, just noticing how the body feels as you scan down evenly and notice each and every part of the body, all the way down to the toes.",
      avg_rating: 3.5,
    },
    {
      id: 4,
      name: "Dance Party",
      effect: "Uplifting",
      description:
        "Play upbeat music and invite the child to dance. Dancing is a fun way to get the body moving, release endorphins, and increase energy levels.",
      avg_rating: 4,
    },
    {
      id: 5,
      name: "Squeezy Hugs",
      effect: "Grounding",
      description:
        "Encourage the child to give themselves a tight hug by crossing their arms and squeezing their shoulders. This self-soothing technique can provide comfort and a sense of security when they're feeling overwhelmed.",
      avg_rating: 5,
    },
    {
      id: 6,
      name: "Mindful Coloring",
      effect: "Grounding",
      description:
        "Provide the child with coloring materials and a simple coloring sheet. Encourage them to focus on the colors, the movement of their hand, and the sensation of the crayon or pencil on the paper. This activity promotes mindfulness and helps distract from overwhelming emotions.",
      avg_rating: 3.5,
    },
    {
      id: 7,
      name: "Safe Zone",
      effect: "Grounding",
      description:
        "Designate a cozy corner in your home with pillows, blankets, and a few favorite books or toys where your child can retreat when they feel overwhelmed and in a state of hyper-arousal. This personal space can serve as a refuge where they can practice self-calming techniques and regain control over their emotional state.",
      avg_rating: 4,
    },
    {
      id: 8,
      name: "Jumping Jacks or Mini Trampoline",
      effect: "Uplifting",
      description:
        "Encourage the child to do jumping jacks or bounce on a mini trampoline. These activities help get the body moving, increase heart rate, and boost energy levels.",
      avg_rating: 3,
    },
    {
      id: 9,
      name: "Obstacle Course",
      effect: "Uplifting",
      description:
        "Set up a simple obstacle course using household items like pillows, chairs, and toys. Challenge the child to navigate the course quickly, which can stimulate their senses and increase alertness.",
      avg_rating: 4.5,
    },
    {
      id: 10,
      name: "Sensory Play",
      effect: "Uplifting",
      description:
        "Provide the child with playdough or kinetic sand and various tools (e.g., cookie cutters, rolling pins). Engaging in tactile activities stimulates the senses and can increase alertness and focus.",
      avg_rating: 4,
    },
    {
      id: 11,
      name: "Progressive Muscle Relaxation (PMR)",
      effect: "Grounding",
      description:
        "Guide the child through tensing and relaxing different muscle groups in their body. Start with their toes and work up to their head, asking them to tense each muscle group for a few seconds and then release. This technique helps release physical tension and promotes relaxation.",
      avg_rating: 3.5,
    },
    {
      id: 12,
      name: "Cloud Watching",
      effect: "Grounding",
      description:
        "Find a comfortable spot outdoors or near a window with a view of the sky. Encourage the child to lie down or sit quietly and observe the clouds. Ask them to describe the shapes, movements, and colors they see. This activity helps shift their focus away from internal turmoil to the calming and ever-changing sky.",
      avg_rating: 2.5,
    },
    {
      id: 13,
      name: "Magic Box of Calm",
      effect: "Grounding",
      description:
        "Create or imagine a 'magic box' filled with items that represent calmness and safety for the child. Items could include a favorite stuffed animal, a small toy, a calming essential oil, or a picture of a loved one. When the child feels overwhelmed, encourage them to imagine opening their magic box and using these items to feel grounded and safe.",
      avg_rating: 3.5,
    },
    {
      id: 14,
      name: "Simon Says",
      effect: "Uplifting",
      description:
        "Play a game of Simon Says where you give commands like 'Simon says touch your toes' or 'Simon says hop on one foot.' This game encourages movement and cognitive engagement, helping to increase energy and alertness",
      avg_rating: 4,
    },
    {
      id: 15,
      name: "Balloon Volleyball",
      effect: "Uplifting",
      description:
        "Inflate a balloon and play volleyball indoors using hands or improvised paddles (e.g., paper plates). This game encourages hand-eye coordination, movement, and can increase alertness through physical activity.",
      avg_rating: 4.5,
    },
    {
      id: 16,
      name: "Scavenger Hunt",
      effect: "Uplifting",
      description:
        "Create a scavenger hunt with clues or a list of items for the child to find around the house or in the backyard. This activity promotes movement, problem-solving, and engagement.",
      avg_rating: 3,
    },
  ]);
}
