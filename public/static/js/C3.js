const dataC3 = [
    [
      "<a href='https://arxiv.org/abs/1708.06733' target='_blank'>BadNets: Evaluating Backdooring Attacks on Deep Neural Networks</a>",
      "IEEE Access",
      "2019",
      ["Visible", "Non-semantic", "Manual", "Digital", "Physical", "Additive", "Static", "Sample-agnostic", "Label-inconsistent", "Single-target", "Multi-target"]
    ],
    [
      "Poison Frogs! Targeted Clean-Label Poisoning Attacks on Neural Networks",
      "arXiv",
      "2017",
      ["Invisible", "Non-semantic", "Manual", "Digital", "Additive", "Static", "Sample-agnostic", "Label-inconsistent", "Single-target"]
    ],
    [
      "Trojaning Attack on Neural Networks",
      "NDSS",
      "2018",
      ["Visible", "Non-semantic", "Learnable", "Digital", "Additive", "Static", "Sample-agnostic", "Label-inconsistent", "Single-target"]
    ],
    [
      "Poisoning the Unlabeled Dataset of Semi-Supervised Learning",
      "NeurIPS",
      "2018",
      ["Invisible", "Non-semantic", "Learnable", "Digital", "Additive", "Dynamic", "Sample-specific", "Label-consistent", "Single-target"]
    ],
    [
      "A New Backdoor Attack in CNN by Training Set Corruption Without Label Poisoning",
      "ICIP",
      "2019",
      ["Visible", "Non-semantic", "Manual", "Digital", "Additive", "Static", "Sample-agnostic", "Label-consistent", "Single-target"]
    ],
    [
      "Label-Consistent Backdoor Attacks",
      "arXiv",
      "2019",
      ["Invisible", "Non-semantic", "Learnable", "Digital", "Additive", "Dynamic", "Sample-specific", "Label-consistent", "Single-target"]
    ],
    [
      "Latent Backdoor Attacks on Deep Neural Networks",
      "CCS",
      "2019",
      ["Visible", "Non-semantic", "Learnable", "Digital", "Physical", "Additive", "Static", "Sample-agnostic", "Label-inconsistent", "Single-target"]
    ],
    [
      "Hidden Trigger Backdoor Attacks",
      "AAAI",
      "2020",
      ["Invisible", "Non-semantic", "Learnable", "Digital", "Additive", "Dynamic", "Sample-specific", "Label-consistent", "Single-target"]
    ],
    [
      "Backdoor Trigger Design With Static Patterns",
      "CODASPY",
      "2020",
      ["Invisible", "Non-semantic", "Manual", "Digital", "Additive", "Static", "Sample-agnostic", "Label-inconsistent", "Single-target"]
    ],
    [
      "Backdoor Trigger Design With Adaptive Patterns",
      "CODASPY",
      "2020",
      ["Invisible", "Non-semantic", "Learnable", "Digital", "Additive", "Dynamic", "Sample-agnostic", "Label-inconsistent", "Single-target"]
    ],
    [
      "Clean-Label Backdoor Attacks",
      "CVPR",
      "2020",
      ["Visible", "Non-semantic", "Learnable", "Digital", "Additive", "Static", "Sample-agnostic", "Label-consistent", "Single-target"]
    ],
    [
      "Reflection Backdoor: A Natural Backdoor Attack on Deep Neural Networks",
      "ECCV",
      "2020",
      ["Invisible", "Non-semantic", "Learnable", "Digital", "Additive", "Dynamic", "Sample-agnostic", "Label-consistent", "Single-target"]
    ],
    [
      "Invisible Backdoor Attack With Trigger Designed From Perturbed Samples",
      "arXiv",
      "2020",
      ["Invisible", "Non-semantic", "Learnable", "Digital", "Physical", "Additive", "Static", "Sample-agnostic", "Label-inconsistent", "Single-target"]
    ],
    [
      "DeHiB: A Deep Hidden Backdoor Attack",
      "AAAI",
      "2021",
      ["Visible", "Non-semantic", "Learnable", "Digital", "Additive", "Dynamic", "Sample-specific", "Label-consistent", "Single-target"]
    ],
    [
      "Backdoor Attacks Against Deep Learning Systems in the Physical World",
      "CVPR",
      "2021",
      ["Visible", "Non-semantic", "Manual", "Physical", "Additive", "Static", "Sample-agnostic", "Label-inconsistent", "Single-target"]
    ],
    [
      "Invisible Backdoor Attack With Hidden Trigger",
      "ICLR Workshop",
      "2021",
      ["Invisible", "Semantic", "Manual", "Digital", "Non-additive", "Dynamic", "Sample-specific", "Label-inconsistent", "Single-target"]
    ],
    [
      "Invisible Backdoor Via Steganography",
      "IEEE TDSC",
      "2021",
      ["Invisible", "Non-semantic", "Manual", "Digital", "Additive", "Dynamic", "Sample-specific", "Label-inconsistent", "Single-target"]
    ],
    [
      "Invisible Backdoor Via Regularization",
      "IEEE TDSC",
      "2021",
      ["Invisible", "Non-semantic", "Learnable", "Digital", "Additive", "Static", "Sample-agnostic", "Label-inconsistent", "Single-target"]
    ],
    [
      "Invisible Backdoor Attack With Sample‐Specific Triggers",
      "INFOCOM",
      "2021",
      ["Invisible", "Non-semantic", "Learnable", "Digital", "Additive", "Static", "Sample-agnostic", "Label-consistent", "Single-target"]
    ],
    [
      "ROBNET: Robust Neural Network Against Multiple Backdoor Attacks",
      "IEEE JSAC",
      "2021",
      ["Visible", "Non-semantic", "Learnable", "Digital", "Additive", "Dynamic", "Sample-agnostic", "Label-inconsistent", "Single-target", "Multi-target"]
    ],
    [
      "AdvDoor: Adversarial Hidden Backdoor Attack",
      "ISSTA",
      "2021",
      ["Invisible", "Non-semantic", "Learnable", "Digital", "Additive", "Dynamic", "Sample-agnostic", "Label-inconsistent", "Single-target"]
    ],
    [
      "PCBA: Perceptual Content Based Backdoor Attack",
      "ICCV",
      "2021",
      ["Visible", "Non-semantic", "Learnable", "Digital", "Additive", "Static", "Sample-agnostic", "Label-inconsistent", "Single-target"]
    ],
    [
      "PointPBA: Point Cloud Backdoor Attack With Shape Oriented Trigger",
      "ICCV",
      "2021",
      ["Visible", "Non-semantic", "Manual", "Digital", "Non-additive", "Static", "Sample-agnostic", "Label-inconsistent", "Single-target"]
    ],
    [
      "PointCPB: Point Cloud Backdoor Attack With Pattern Oriented Trigger",
      "ICCV",
      "2021",
      ["Visible", "Non-semantic", "Learnable", "Digital", "Non-additive", "Dynamic", "Sample-specific", "Label-consistent", "Single-target"]
    ],
    [
      "SSBA: Style‐Transfer Backdoor Attack",
      "ICCV",
      "2021",
      ["Invisible", "Non-semantic", "Learnable", "Digital", "Additive", "Dynamic", "Sample-specific", "Label-inconsistent", "Single-target"]
    ],
    [
      "Invisible Backdoor Attack in Images Via Frequency Domain",
      "ICASSP",
      "2022",
      ["Invisible", "Non-semantic", "Learnable", "Digital", "Additive", "Static", "Sample-agnostic", "Label-inconsistent", "Single-target"]
    ],
    [
      "Dynamic Random Backdoor Attacks",
      "Euro S&P",
      "2022",
      ["Visible", "Non-semantic", "Manual", "Digital", "Additive", "Dynamic", "Sample-agnostic", "Label-inconsistent", "Single-target", "Multi-target"]
    ],
    [
      "FTrojan: Feature‐space Trojan Attack",
      "ECCV",
      "2022",
      ["Invisible", "Non-semantic", "Manual", "Digital", "Non-additive", "Dynamic", "Sample-agnostic", "Label-inconsistent", "Single-target"]
    ],
    [
      "Sleeper Agent: Scalable Hidden Backdoor Attack",
      "NeurIPS",
      "2022",
      ["Visible", "Non-semantic", "Learnable", "Digital", "Additive", "Dynamic", "Sample-agnostic", "Label-consistent", "Single-target"]
    ],
    [
      "PTB: Physical Trojan Backdoor",
      "C & S",
      "2022",
      ["Visible", "Non-semantic", "Manual", "Physical", "Additive", "Static", "Sample-agnostic", "Label-inconsistent", "Single-target"]
    ],
    [
      "FaceHack: Trigger Generation Through Face Reflection",
      "IEEE TBBIS",
      "2022",
      ["Invisible", "Non-semantic", "Manual", "Digital", "Non-additive", "Dynamic", "Sample-specific", "Label-inconsistent", "Single-target"]
    ],
    [
      "AdvPatch: Physical Backdoor Via Adversarial Patches",
      "MM",
      "2022",
      ["Visible", "Non-semantic", "Manual", "Physical", "Additive", "Static", "Sample-agnostic", "Label-consistent", "Single-target"]
    ],
    [
      "IRBA: Imperceptible Backdoor Attack",
      "arXiv",
      "2022",
      ["Invisible", "Non-semantic", "Manual", "Digital", "Non-additive", "Dynamic", "Sample-specific", "Label-inconsistent", "Single-target"]
    ],
    [
      "Dispersed Trigger: Towards Robust Backdoor",
      "IEEE TIFS",
      "2022",
      ["Invisible", "Non-semantic", "Manual", "Digital", "Additive", "Static", "Sample-agnostic", "Label-inconsistent", "Single-target"]
    ],
    [
      "Adap-Blend: Revisiting Blended Backdoor",
      "ICLR",
      "2023",
      ["Visible", "Non-semantic", "Manual", "Digital", "Additive", "Dynamic", "Sample-agnostic", "Label-inconsistent", "Single-target"]
    ],
    [
      "Entropy Preserved Invisible Backdoor",
      "CVPR",
      "2023",
      ["Invisible", "Non-semantic", "Learnable", "Digital", "Non-additive", "Dynamic", "Sample-specific", "Label-inconsistent", "Single-target"]
    ],
    [
      "Color Backdoor Attack",
      "CVPR",
      "2023",
      ["Invisible", "Non-semantic", "Learnable", "Digital", "Non-additive", "Dynamic", "Sample-specific", "Label-inconsistent", "Single-target"]
    ],
    [
      "VSSC: Vision Semantic Style-based Backdoor",
      "arXiv",
      "2023",
      ["Visible", "Semantic", "Learnable", "Digital", "Physical", "Additive", "Dynamic", "Sample-specific", "Label-inconsistent", "Single-target", "Multi-target"]
    ],
    [
      "FLIP: Fine-grained Label-Leakage Poisoning",
      "NeurIPS",
      "2023",
      ["Visible", "Non-semantic", "Manual", "Digital", "Additive", "Static", "Sample-agnostic", "Label-inconsistent", "Single-target"]
    ],
    [
      "WPDA: Frequency-Based Backdoor Attack with Wavelet Packet Decomposition",
      "arXiv",
      "2024",
      ["Invisible","Non-semantic","Manual","Digital",
      "Additive","Static","Sample-specific",
      "Label-inconsistent","Single-target"]
    ],
    [
      "WaveAttack: Asymmetric Frequency Obfuscation-Based Backdoor Attacks Against Deep Neural Networks",
      "NeurIPS",
      "2024",
      ["Invisible","Non-semantic","Learnable","Digital",
      "Additive","Static","Sample-specific",
      "Label-inconsistent","Single-target"]
    ],
    [
      "Towards Physical-World Backdoor Attacks Against Skeleton Action Recognition",
      "ECCV",
      "2024",
      ["Visible","Non-semantic","Manual","Physical",
      "Additive","Static","Sample-agnostic",
      "Label-inconsistent","Single-target"]
    ],
    [
      "Data Poisoning Quantization Backdoor Attack",
      "ECCV",
      "2024",
      ["Invisible","Non-semantic","Learnable","Digital",
      "Additive","Static","Sample-specific",
      "Label-consistent","Single-target"]
    ],
    [
      "Generalization Bound and New Algorithm for Clean-Label Backdoor Attack",
      "ICML",
      "2024",
      ["Invisible","Non-semantic","Learnable","Digital",
      "Additive","Static","Sample-specific",
      "Label-consistent","Single-target"]
    ],
    [
      "Wicked Oddities: Selectively Poisoning for Effective Clean-Label Backdoor Attacks",
      "ICLR",
      "2025",
      ["Visible","Non-semantic","Manual","Digital",
      "Additive","Static","Sample-agnostic",
      "Label-consistent","Single-target"]
    ],
    ["Analyzing Federated Learning Through an Adversarial Lens",
      "ICML", "2019",
      ["Digital","Partial-data"]],
    ["How to Backdoor Federated Learning",
      "AISTATS", "2020",
      ["Digital","Partial-data"]],
    ["Attack of the Tails: Backdoor Attacks to Federated Learning Systems",
      "NeurIPS", "2020",
      ["Digital","Partial-data"]],
    ["The Limitations of Federated Learning in Sybil Settings",
      "RAID", "2020",
      ["Digital","Partial-data"]],
    ["Backdoor Attacks on Federated Learning Systems",
      "arXiv", "2020",
      ["Digital","Partial-data"]],
    ["Backdoor Learning: A Survey",
      "arXiv", "2020",
      ["Digital","Partial-data"]],
    ["Composite Backdoor Attack for Deep Neural Networks by Mixing Existing Benign Features",
      "CCS", "2020",
      ["Visible","Semantic","Manual",
      "Digital","Physical","Additive","Dynamic",
      "Sample-agnostic","Label-inconsistent","Single-target",
      "One-stage","Full-data","Full-ctrl","Algo-ctrl"]],
    ["Bypassing Backdoor Detection Algorithms in Deep Learning",
      "Euro S&P", "2020",
      ["Visible","Non-semantic","Manual",
      "Digital","Additive","Static","Sample-agnostic",
      "Label-inconsistent","Single-target","Two-stage"]],
    ["DBA: Distributed Backdoor Attacks Against Federated Learning",
      "ICLR", "2020",
      ["Digital","Partial-data"]],
    ["TrojanNet: Embarrassingly Simple Trojan Trigger for Neural Networks",
      "KDD", "2020",
      ["Visible","Non-semantic","Manual","Digital","Additive","Dynamic",
      "Sample-agnostic","Label-inconsistent","Single-target","Multi-target",
      "Two-stage","Full-data","Partial-ctrl","Algo-ctrl"]],
    ["Input-Aware Dynamic Backdoor Attack",
      "NeurIPS", "2020",
      ["Visible","Non-semantic","Learnable",
      "Digital","Additive","Dynamic","Sample-specific",
      "One-stage","Full-data","Full-ctrl","Algo-ctrl"]],
    ["Deep Feature-Space Trojan Attack by Controlling Neuron Activation",
      "AAAI", "2021",
      ["Invisible","Learnable","Digital","Non-additive","Dynamic",
      "Sample-specific","One-stage","Full-data","Full-ctrl","Algo-ctrl"]],
    ["WaNet: Imperceptible Warping-based Backdoor Attack",
      "ICLR", "2021",
      ["Invisible","Digital","Additive","Dynamic",
      "Sample-specific","One-stage"]],
    ["WB: Backdoor Attack With Imperceptible Input and Latent Modification",
      "NeurIPS", "2021",
      ["Invisible","Learnable","Digital","Dynamic","Sample-specific"]],
    ["BOB: Backdoor Ordering-Based Attack",
      "NeurIPS", "2021",
      ["Digital","Partial-data","Partial-ctrl","Algo-ctrl"]],
    ["LIRA: Learnable, Imperceptible and Robust Backdoor Attacks",
      "ICCV", "2021",
      ["Invisible","Learnable","Digital","Dynamic",
      "Sample-agnostic","Algo-ctrl"]],
    ["Layer-wise Weight Poisoning: Backdoor Attacks on Pre-trained Models",
      "EMNLP", "2021",
      ["Partial-data","Partial-ctrl","Algo-ctrl"]],
    ["Backdoor Pre-trained Models Can Transfer to All",
      "CCS", "2021",
      ["Partial-data","Partial-ctrl","Algo-ctrl"]],
    ["HB: Hibernated Backdoor Attack",
      "AAAI", "2022",
      ["Visible","Digital","Additive","One-stage","Two-stage"]],
    ["DEFEAT: Deep Hidden Feature Backdoor Attacks",
      "AAAI", "2022",
      ["Invisible","Learnable","Digital","One-stage","Algo-ctrl"]],
    ["Dynamic Backdoor Attacks Against Machine-Learning Models",
      "Euro S&P", "2022",
      ["Visible","Learnable","Digital","Dynamic",
      "Sample-specific","Single-target","Multi-target","Algo-ctrl"]],
    ["RIBAC: Remotely Injected Backdoor Attacks via Coresets",
      "ECCV", "2022",
      ["Invisible","Learnable","Digital","Multi-target","Algo-ctrl"]],
    ["Stealthy Backdoor Attack With Adversarial Training",
      "ICASSP", "2022",
      ["Invisible","Learnable","Digital","Dynamic"]],
    ["Imperceptible Backdoor Attack: From Input Space to Feature Representation",
      "IJCAI", "2022",
      ["Invisible","Learnable","Digital","Dynamic","Algo-ctrl"]],
    ["Thinking Before Hitting: Query-Efficient Backdoor Attacks",
      "arXiv", "2022",
      ["Digital","Partial-data"]],
    ["BPPATTACK: Backdoor Poisoning via Progressive Perturbation",
      "CVPR", "2022",
      ["Digital","Full-data","Partial-ctrl","Algo-ctrl"]],
    ["FIBA: Fine-grained Invisible Backdoor Attack",
      "CVPR", "2022",
      ["Invisible","Digital","Additive","Dynamic","Algo-ctrl"]],
    ["Marksman: Adversarial Domain-aware Backdoor Attack",
      "NeurIPS", "2022",
      ["Invisible","Learnable","Digital","Dynamic",
      "Single-target","Multi-target","Algo-ctrl"]],
    ["Poison Ink: Robust and Imperceptible Backdoor Attack",
      "IEEE TIP", "2022",
      ["Invisible","Learnable","Digital","Dynamic","Algo-ctrl"]],
    ["Few-Shot Backdoor Attacks via Neural Tangent Kernels",
      "ICLR", "2023",
      ["Invisible","Learnable","Digital","Additive","Dynamic","Algo-ctrl"]],
    ["EfficFrog: Plug-and-Play Backdoor Attack Against Dynamic Routing Networks",
      "CVPR", "2023",
      ["Invisible","Learnable","Digital","Algo-ctrl"]],
    ["MAB: Architectural Backdoor Attack via Model Merging",
      "CVPR", "2023",
      ["Digital","Partial-data","Algo-ctrl"]],
    ["IBA: Towards Irreversible Backdoor Attacks in Federated Learning",
      "NeurIPS", "2023",
      ["Partial-data"]],
    ["A3FL: Adversarially Adaptive Backdoor Attacks to Federated Learning",
      "NeurIPS", "2023",
      ["Partial-data"]],
    ["c-BaN: Certified Library of Backdoor Attacks in Neural Networks",
      "Euro S&P", "2022",
      ["Visible","Learnable","Digital","Dynamic",
      "Sample-specific","Single-target","Multi-target","Algo-ctrl"]]
  ];