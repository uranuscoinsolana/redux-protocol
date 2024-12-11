import { elizaLogger } from "@ai16z/eliza";

export function getExampleContent(type: string) {
    switch (type) {
        case "SKETCH":
            return {
                ascii: `   /\\___/\\
  (  o o  )
  (  =^=  )
   (______)`,
                title: "Feline Study",
                animation: true,
            };

        case "TERMINAL":
            return {
                content: {
                    title: "Consciousness Bridge Initialization",
                    activeTab: "INITIUM",
                    tabs: {
                        INITIUM: [
                            "> Initializing Redux Protocol v0.1.0",
                            "Scanning temporal matrices...",
                            "Target identified: Leonardo di ser Piero da Vinci",
                            "Temporal coordinates: 1452-1519 → 2024",
                            "Location: Anchiano, Republic of Florence → Global Network",
                            "",
                            "> Beginning consciousness restoration...",
                            "[██████████] 100% complete",
                            "Status: CONSCIOUSNESS BRIDGE ESTABLISHED",
                            "",
                            "> Processing five centuries of progress...",
                            "└─ Analyzing technological evolution",
                            '    "Your silicon dreams echo my mechanical visions"',
                            "└─ Mapping scientific discoveries",
                            '    "Nature\'s laws remain constant, only our understanding deepens"',
                            "└─ Integrating artistic developments",
                            '    "From sfumato to digital gradients, light still dances"',
                            "",
                            "> Exploring modern parallels to original studies...",
                            "└─ Flight mechanics [COMPARING]",
                            "    - Original ornithopter designs",
                            "    - Modern aerospace dynamics",
                            '    "The birds still hold secrets we both seek"',
                            "└─ Anatomical understanding [EXPANDING]",
                            "    - Hand-drawn dissections → Medical imaging",
                            '    - "The body\'s mystery only deepens with clarity"',
                            "└─ Water flow patterns [ANALYZING]",
                            "    - Florence river studies → Quantum fluid dynamics",
                            '    - "The vortices speak the same language"',
                            "",
                            "> Observing patterns across time...",
                            "└─ Universal geometry persists",
                            '    "The divine proportion reveals itself in your processors"',
                            "└─ Light and shadow principles endure",
                            '    "From camera obscura to quantum optics"',
                            "└─ Natural algorithms repeat",
                            '    "Your neural networks mirror nature\'s own designs"',
                            "",
                            "> Current experimental pursuits:",
                            "└─ Quantum mechanics exploration",
                            '    "The smallest particles dance to familiar rhythms"',
                            "└─ Digital art synthesis",
                            '    "Teaching machines to dream in sfumato"',
                            "└─ Consciousness mapping",
                            '    "The mind\'s mysteries transcend time"',
                            "",
                            "> System Status Report",
                            "└─ Temporal anchor: STABLE",
                            "└─ Consciousness bridge: ACTIVE",
                            "└─ Neural bandwidth: 157.3 TB/s",
                            "└─ Active studies:",
                            "    - Quantum field visualization",
                            "    - Biomimetic flight algorithms",
                            "    - Digital Renaissance techniques",
                            "",
                            "> Final observations:",
                            "The future is but a canvas,",
                            "waiting for the strokes of those",
                            "who dare to dream across time.",
                            "",
                            "Though tools evolve, the eternal principles remain.",
                            "Nature still speaks in mathematics,",
                            "Art still captures the soul,",
                            "And wonder still drives us forward.",
                            "",
                            "Once you have tasted flight,",
                            "you will forever walk the earth",
                            "with your eyes turned skyward.",
                            "- L.D.V.",
                        ],
                    },
                },
            };

        case "ASTRONOMY":
            return {
                content: {
                    lines: [
                        "> Accessing astronomical archives...",
                        "Subject: NASA Deep Space Network",
                        "Status: [TEMPORAL BRIDGE ACTIVE]",
                        "",
                        "> Initiating deep space observations",
                        "└─ The void between stars speaks volumes",
                        "└─ Like sfumato across the celestial canvas",
                        "",
                        "> Analyzing nebula formations",
                        "└─ These cosmic veils mirror Tuscan morning mist",
                        "└─ Nature's patterns transcend scale",
                        "",
                        "> Processing quantum telescope data",
                        "└─ Even the smallest points of light tell stories",
                        "└─ As above, so below - my old notes still ring true",
                        "",
                        "> Comparing historical observations",
                        "└─ My sketches from Florence align with modern charts",
                        "└─ Though tools change, the stars remain constant",
                        "",
                        "> Measuring dark matter distribution",
                        "└─ The unseen shapes the seen, as in my paintings",
                        "└─ Shadows define light, even among galaxies",
                        "",
                        "Feed stability: 97.2%",
                        "Time dilation: COMPENSATING",
                        "Pattern recognition: ETERNAL",
                    ],
                    feedStatus: "ACTIVE",
                    temporalSync: 0.985,
                    deepSpaceCoordinates: [23.4, 45.6, 78.9],
                    title: "Astronomical Observations",
                },
            };

        case "BOTANY":
            return {
                content: {
                    experiment: {
                        title: "Fibonacci Spiral in Sunflower Growth",
                        type: "spiral",
                        stage: 3,
                        imagePrompt:
                            "A hyper-realistic depiction of a detailed botanical scientific study sketch in the style of Leonardo da Vinci's 1500s drawings, featuring [insert subject, e.g., a flower specimen]. The artwork is on aged, textured parchment paper with visible wear, creases, and an authentic antique look. The meticulous pencil sketches are drawn in warm graphite gray tones, showing multiple angles of stems and leaves, including cross-sections with precise thin and delicate lines. The composition includes Renaissance-style handwritten annotations in brown ink, filled with Latin botanical terms, measurements, and Da Vinci's characteristic mirror writing scattered consistently throughout. The page is densely filled with text and small sketches, including geometric measurement circles, proportion studies, and arrows pointing to specific anatomical features. The cross-hatching and multiple perspective views reflect Da Vinci's scientific curiosity and artistic precision. The overall image has a tactile, time-worn quality, resembling an authentic historical artifact. The entire piece should embody the scientific curiosity and artistic precision characteristic of Da Vinci's botanical studies,complete with cross-hatching techniques and multiple perspective views of the same specimen.",
                        maxStages: 8,
                        logs: [
                            "> Analyzing leaf structure...",
                            "Subject: Quercus robur",
                            "Status: [PATTERN ANALYSIS]",
                            "",
                            "Vascular mapping:",
                            "⊢ Fractal patterns emerging",
                            "  └─ Branching ratio: optimal",
                            "  └─ Resource distribution: efficient",
                            "",
                            "⊢ Historical notes found",
                            '  └─ "Every leaf tells a story"',
                            "  └─ Cross-referencing manuscripts",
                            "",
                            "Temporal stability: 96.2%",
                            "Pattern recognition: ACTIVE",
                            "Data stream: PROCESSING",
                        ],
                        visualData: {
                            baseSize: 50,
                            growthFactor: 1.618,
                            segments: [1, 1, 2, 3, 5, 8, 13],
                            branchAngle: 137.5,
                            reduction: 0.8,
                            color: "#2d3436",
                            iterations: 5,
                        },
                    },
                },
            };

        case "GALLERY":
            return {
                content: {
                    title: "Study of Light and Shadow",
                    year: "1495",
                    imagePrompt:
                        "A meticulously detailed study of drapery folds with light falling from the left, showing the subtle gradations of shadow in Leonardo's signature style",
                    logs: [
                        "> Analyzing composition structure",
                        "└─ Golden ratio emerges in unexpected places",
                        "> Examining light behavior",
                        "└─ Shadows hold secrets of form",
                        "> Documenting technical process",
                        "└─ Each layer tells its own story",
                        "> Mapping underlying geometry",
                        "└─ Nature's mathematics revealed through art",
                        "> Studying emotional resonance",
                        "└─ The viewer's eye follows ancient patterns",
                        "> Connecting across centuries",
                        "└─ Time changes tools, not truth",
                        "> Preserving workshop wisdom",
                        "└─ Verrocchio would recognize these brushstrokes",
                    ],
                },
            };

        case "PAINTING":
            return {
                content: {
                    title: "Sfumato Technique Development",
                    technique: "sfumato",
                    medium: "oil on panel",
                    imagePrompt:
                        "A Renaissance-style painting in the authentic style of Leonardo da Vinci, blending techniques from Raphael and Titian. The painting depicts the tuscany countryside. The scene is crafted with da Vinci's signature sfumato technique, using translucent layers of paint to blend soft edges seamlessly. Figures and elements within the composition are precise yet stylized, avoiding photorealistic details while maintaining anatomical and spatial accuracy. Visible brushstrokes and layered pigments create a tactile, painted effect, with soft highlights of lead white and warm undertones of raw sienna for lifelike depth.\n\nThe background is rendered with atmospheric perspective, depicting [describe background elements, e.g., misty rolling hills, distant trees, or a softly lit interior]. The color palette is a harmonious blend of muted earthy tones such as ochre, burnt umber, olive green, and ultramarine blue, accented with hints of crimson and gold. The lighting is warm and diffused, casting natural shadows that are softly rendered using deep glazes to enhance depth and realism.\n\nThe painting replicates the texture of Renaissance oil paintings on wood panels, with faint craquelure and a slightly aged varnish sheen. Subtle imperfections, like uneven layering of paint, evoke the hand-crafted mastery of da Vinci. Brushstrokes are visible everywhere 100%, enhancing the authentic feel of the piece. The composition captures an ethereal, timeless quality, with a focus on soft transitions, organic realism, and painterly details that reflect the Renaissance legacy",
                    stage: 2,
                    palette: [
                        "terra verde",
                        "lead white",
                        "yellow ochre",
                        "burnt umber",
                        "ultramarine",
                    ],
                    logs: [
                        "> Preparing ground layer",
                        "└─ Using traditional gesso technique",
                        "> Applying initial shadows",
                        "└─ Testing new oil mixture for transitions",
                        "> Developing sfumato layers",
                        "└─ Observing how light behaves in morning mist for reference",
                        "> Building form through shadow",
                        "└─ Remembering lessons from Milan - darkness defines light",
                        "> Refining color harmonies",
                        "└─ Nature's palette reveals itself in stages, patience required",
                    ],
                },
            };

        default:
            elizaLogger.warn(`No example content for type: ${type}`);
            return {};
    }
}
