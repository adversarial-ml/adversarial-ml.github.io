const dataC3 = [
  [
    "<a href='https://arxiv.org/abs/1708.06733' target='_blank'>BadNets: Evaluating Backdooring Attacks on Deep Neural Networks</a>",
    "IEEE Access",
    "2019",
    ["Visible","Non-semantic","Manual","Digital","Physical","Additive","Static","Sample-agnostic","Label-inconsistent","Single-target","Multi-target"]
  ],
  [
    "<a href='https://arxiv.org/abs/1712.05526' target='_blank'>Targeted Backdoor Attacks on Deep Learning Systems Using Data Poisoning</a>",
    "arXiv",
    "2017",
    ["Invisible","Non-semantic","Manual","Digital","Additive","Static","Sample-agnostic","Label-inconsistent","Single-target"]
  ],
  [
    "<a href='https://www.ndss-symposium.org/wp-content/uploads/2018/02/ndss2018_03A-5_Liu_paper.pdf' target='_blank'>Trojaning Attack on Neural Networks</a>",
    "NDSS",
    "2018",
    ["Visible","Non-semantic","Learnable","Digital","Additive","Static","Sample-agnostic","Label-inconsistent","Single-target"]
  ],
  [
    "<a href='https://arxiv.org/abs/1804.00792' target='_blank'>Poison Frogs! Targeted Clean-Label Poisoning Attacks on Neural Networks</a>",
    "NeurIPS",
    "2018",
    ["Invisible","Non-semantic","Learnable","Digital","Additive","Dynamic","Sample-specific","Label-consistent","Single-target"]
  ],
  [
    "<a href='https://arxiv.org/abs/1902.11237' target='_blank'>A New Backdoor Attack in CNNs by Training-Set Corruption without Label Poisoning</a>",
    "ICIP",
    "2019",
    ["Visible","Non-semantic","Manual","Digital","Additive","Static","Sample-agnostic","Label-consistent","Single-target"]
  ],
  [
    "<a href='https://arxiv.org/abs/1912.02771' target='_blank'>Label-Consistent Backdoor Attacks</a>",
    "arXiv",
    "2019",
    ["Invisible","Non-semantic","Learnable","Digital","Additive","Dynamic","Sample-specific","Label-consistent","Single-target"]
  ],
  [
    "<a href='https://dl.acm.org/doi/10.1145/3319535.3354209' target='_blank'>Latent Backdoor Attacks on Deep Neural Networks</a>",
    "CCS",
    "2019",
    ["Visible","Non-semantic","Learnable","Digital","Physical","Additive","Static","Sample-agnostic","Label-inconsistent","Single-target"]
  ],
  [
    "<a href='https://arxiv.org/abs/1910.00033' target='_blank'>Hidden Trigger Backdoor Attacks</a>",
    "AAAI",
    "2020",
    ["Invisible","Non-semantic","Learnable","Digital","Additive","Dynamic","Sample-specific","Label-consistent","Single-target"]
  ],
  [
    "<a href='https://arxiv.org/abs/1808.10307' target='_blank'>Backdoor Embedding in Convolutional Neural Network Models via Invisible Perturbation</a>",
    "CODASPY",
    "2020",
    ["Invisible","Non-semantic","Manual","Digital","Additive","Static","Sample-agnostic","Label-inconsistent","Single-target"]
  ],
  [
    "<a href='https://arxiv.org/abs/1808.10307' target='_blank'>Backdoor Embedding in Convolutional Neural Network Models via Invisible Perturbation</a>",
    "CODASPY",
    "2020",
    ["Invisible","Non-semantic","Learnable","Digital","Additive","Dynamic","Sample-agnostic","Label-inconsistent","Single-target"]
  ],
  [
    "<a href='https://arxiv.org/abs/2003.03030' target='_blank'>Clean-Label Backdoor Attacks on Video Recognition Models</a>",
    "CVPR",
    "2020",
    ["Visible","Non-semantic","Learnable","Digital","Additive","Static","Sample-agnostic","Label-consistent","Single-target"]
  ],
  [
    "<a href='https://arxiv.org/abs/2007.02343' target='_blank'>Reflection Backdoor: A Natural Backdoor Attack on Deep Neural Networks</a>",
    "ECCV",
    "2020",
    ["Invisible","Non-semantic","Learnable","Digital","Additive","Dynamic","Sample-agnostic","Label-consistent","Single-target"]
  ],
  [
    "<a href='https://arxiv.org/abs/2009.06996' target='_blank'>Light Can Hack Your Face! Black-Box Backdoor Attack on Face Recognition Systems</a>",
    "arXiv",
    "2020",
    ["Invisible","Non-semantic","Learnable","Digital","Physical","Additive","Static","Sample-agnostic","Label-inconsistent","Single-target"]
  ],
  [
    "<a href='https://ojs.aaai.org/index.php/AAAI/article/view/17266' target='_blank'>DeHiB: Deep Hidden Backdoor Attack on Semi-Supervised Learning via Adversarial Perturbation</a>",
    "AAAI",
    "2021",
    ["Visible","Non-semantic","Learnable","Digital","Additive","Dynamic","Sample-specific","Label-consistent","Single-target"]
  ],
  [
    "<a href='https://arxiv.org/abs/2006.14580' target='_blank'>Backdoor Attacks Against Deep Learning Systems in the Physical World</a>",
    "CVPR",
    "2021",
    ["Visible","Non-semantic","Manual","Physical","Additive","Static","Sample-agnostic","Label-inconsistent","Single-target"]
  ],
  [
    "<a href='https://arxiv.org/abs/2105.00164' target='_blank'>Hidden Backdoors in Human-Centric Language Models</a>",
    "ICLR Workshop",
    "2021",
    ["Invisible","Semantic","Manual","Digital","Non-additive","Dynamic","Sample-specific","Label-inconsistent","Single-target"]
  ],
  [
    "<a href='https://arxiv.org/abs/1909.02742' target='_blank'>Invisible Backdoor Attacks on Deep Neural Networks via Steganography and Regularization</a>",
    "IEEE TDSC",
    "2021",
    ["Invisible","Non-semantic","Manual","Digital","Additive","Dynamic","Sample-specific","Label-inconsistent","Single-target"]
  ],
  [
    "<a href='https://arxiv.org/abs/1909.02742' target='_blank'>Invisible Backdoor Attacks on Deep Neural Networks via Steganography and Regularization</a>",
    "IEEE TDSC",
    "2021",
    ["Invisible","Non-semantic","Learnable","Digital","Additive","Static","Sample-agnostic","Label-inconsistent","Single-target"]
  ],
  [
    "<a href='https://u.arizona.edu/~mhwu/paper/infocom21.pdf' target='_blank'>Invisible Poison: A Black-Box Clean-Label Backdoor Attack to Deep Neural Networks</a>",
    "INFOCOM",
    "2021",
    ["Invisible","Non-semantic","Learnable","Digital","Additive","Static","Sample-agnostic","Label-consistent","Single-target"]
  ],
  [
    "<a href='https://ieeexplore.ieee.org/document/9464230' target='_blank'>Defense-Resistant Backdoor Attacks Against Deep Neural Networks in Outsourced Cloud Environment</a>",
    "IEEE JSAC",
    "2021",
    ["Visible","Non-semantic","Learnable","Digital","Additive","Dynamic","Sample-agnostic","Label-inconsistent","Single-target","Multi-target"]
  ],
  [
    "<a href='https://dl.acm.org/doi/10.1145/3460319.3464809' target='_blank'>AdvDoor: Adversarial Backdoor Attack of Deep Learning System</a>",
    "ISSTA",
    "2021",
    ["Invisible","Non-semantic","Learnable","Digital","Additive","Dynamic","Sample-agnostic","Label-inconsistent","Single-target"]
  ],
  [
    "<a href='https://openaccess.thecvf.com/content/ICCV2021/papers/Xiang_A_Backdoor_Attack_Against_3D_Point_Cloud_Classifiers_ICCV_2021_paper.pdf' target='_blank'>A Backdoor Attack Against 3D Point Cloud Classifiers</a>",
    "ICCV",
    "2021",
    ["Visible","Non-semantic","Learnable","Digital","Additive","Static","Sample-agnostic","Label-inconsistent","Single-target"]
  ],
  [
    "<a href='https://openaccess.thecvf.com/content/ICCV2021/papers/Li_PointBA_Towards_Backdoor_Attacks_in_3D_Point_Cloud_ICCV_2021_paper.pdf' target='_blank'>PointBA: Towards Backdoor Attacks in 3D Point Cloud</a>",
    "ICCV",
    "2021",
    ["Visible","Non-semantic","Manual","Digital","Non-additive","Static","Sample-agnostic","Label-inconsistent","Single-target"]
  ],
  [
    "<a href='https://openaccess.thecvf.com/content/ICCV2021/papers/Li_PointBA_Towards_Backdoor_Attacks_in_3D_Point_Cloud_ICCV_2021_paper.pdf' target='_blank'>PointBA: Towards Backdoor Attacks in 3D Point Cloud</a>",
    "ICCV",
    "2021",
    ["Visible","Non-semantic","Learnable","Digital","Non-additive","Dynamic","Sample-specific","Label-consistent","Single-target"]
  ],
  [
    "<a href='https://arxiv.org/abs/2012.03816' target='_blank'>Invisible Backdoor Attack with Sample-Specific Triggers</a>",
    "ICCV",
    "2021",
    ["Invisible","Non-semantic","Learnable","Digital","Additive","Dynamic","Sample-specific","Label-inconsistent","Single-target"]
  ],
  [
    "<a href='https://web.eecs.utk.edu/~jliu/publications/phan2022invisible.pdf' target='_blank'>Invisible and Efficient Backdoor Attacks for Compressed Deep Neural Networks</a>",
    "ICASSP",
    "2022",
    ["Invisible","Non-semantic","Learnable","Digital","Additive","Static","Sample-agnostic","Label-inconsistent","Single-target"]
  ],
  [
    "<a href='https://arxiv.org/abs/2003.03675' target='_blank'>Dynamic Backdoor Attacks Against Machine Learning Models</a>",
    "Euro S&amp;P",
    "2022",
    ["Visible","Non-semantic","Manual","Digital","Additive","Dynamic","Sample-agnostic","Label-inconsistent","Single-target","Multi-target"]
  ],
  [
    "<a href='https://arxiv.org/abs/2207.06998' target='_blank'>An Invisible Black-Box Backdoor Attack Through Frequency Domain</a>",
    "ECCV",
    "2022",
    ["Invisible","Non-semantic","Manual","Digital","Non-additive","Dynamic","Sample-agnostic","Label-inconsistent","Single-target"]
  ],
  [
    "<a href='https://arxiv.org/abs/2106.08970' target='_blank'>Sleeper Agent: Scalable Hidden Trigger Backdoors for Neural Networks Trained from Scratch</a>",
    "NeurIPS",
    "2022",
    ["Visible","Non-semantic","Learnable","Digital","Additive","Dynamic","Sample-agnostic","Label-consistent","Single-target"]
  ],
  [
    "<a href='https://www.sciencedirect.com/science/article/abs/pii/S0167404822001213' target='_blank'>PTB: Robust Physical Backdoor Attacks Against Deep Neural Networks in Real World</a>",
    "C &amp; S",
    "2022",
    ["Visible","Non-semantic","Manual","Physical","Additive","Static","Sample-agnostic","Label-inconsistent","Single-target"]
  ],
  [
    "<a href='https://arxiv.org/abs/2303.04552' target='_blank'>FaceHack: Attacking Facial Recognition Systems Using Malicious Facial Characteristics</a>",
    "IEEE TBBIS",
    "2022",
    ["Invisible","Non-semantic","Manual","Digital","Non-additive","Dynamic","Sample-specific","Label-inconsistent","Single-target"]
  ],
  [
    "<a href='https://arxiv.org/abs/2203.00858' target='_blank'>Physical Backdoor Attacks to Lane Detection Systems in Autonomous Driving</a>",
    "MM",
    "2022",
    ["Visible","Non-semantic","Manual","Physical","Additive","Static","Sample-agnostic","Label-consistent","Single-target"]
  ],
  [
    "<a href='https://arxiv.org/abs/2208.08052' target='_blank'>Imperceptible and Robust Backdoor Attack in 3D Point Cloud</a>",
    "arXiv",
    "2022",
    ["Invisible","Non-semantic","Manual","Digital","Non-additive","Dynamic","Sample-specific","Label-inconsistent","Single-target"]
  ],
  [
    "<a href='https://arxiv.org/abs/2208.09336' target='_blank'>Dispersed Pixel Perturbation-Based Imperceptible Backdoor Trigger for Image Classifier Models</a>",
    "IEEE TIFS",
    "2022",
    ["Invisible","Non-semantic","Manual","Digital","Additive","Static","Sample-agnostic","Label-inconsistent","Single-target"]
  ],
  [
    "<a href='https://openreview.net/forum?id=_wSHsgrVali' target='_blank'>Revisiting the Assumption of Latent Separability for Backdoor Defenses</a>",
    "ICLR",
    "2023",
    ["Visible","Non-semantic","Manual","Digital","Additive","Dynamic","Sample-agnostic","Label-inconsistent","Single-target"]
  ],
  [
    "<a href='https://openaccess.thecvf.com/content/CVPR2023/papers/Tan_Backdoor_Attacks_Against_Deep_Image_Compression_via_Adaptive_Frequency_Trigger_CVPR_2023_paper.pdf' target='_blank'>Backdoor Attacks Against Deep Image Compression via Adaptive Frequency Trigger</a>",
    "CVPR",
    "2023",
    ["Invisible","Non-semantic","Learnable","Digital","Non-additive","Dynamic","Sample-specific","Label-inconsistent","Single-target"]
  ],
  [
    "<a href='https://openaccess.thecvf.com/content/CVPR2023/papers/Jiang_Color_Backdoor_A_Robust_Poisoning_Attack_in_Color_Space_CVPR_2023_paper.pdf' target='_blank'>Color Backdoor: A Robust Poisoning Attack in Color Space</a>",
    "CVPR",
    "2023",
    ["Invisible","Non-semantic","Learnable","Digital","Non-additive","Dynamic","Sample-specific","Label-inconsistent","Single-target"]
  ],
  [
    "<a href='https://openreview.net/forum?id=H6XiAoyugv' target='_blank'>Robust Backdoor Attack with Visible, Semantic, Sample-Specific, and Compatible Triggers</a>",
    "arXiv",
    "2023",
    ["Visible","Semantic","Learnable","Digital","Physical","Additive","Dynamic","Sample-specific","Label-inconsistent","Single-target","Multi-target"]
  ],
  [
    "<a href='https://arxiv.org/abs/2310.18933' target='_blank'>Label Poisoning Is All You Need</a>",
    "NeurIPS",
    "2023",
    ["Visible","Non-semantic","Manual","Digital","Additive","Static","Sample-agnostic","Label-inconsistent","Single-target"]
  ],
  [
    "<a href='https://arxiv.org/abs/2401.13578' target='_blank'>WPDA: Frequency-Based Backdoor Attack with Wavelet Packet Decomposition</a>",
    "arXiv",
    "2024",
    ["Invisible","Non-semantic","Manual","Digital","Additive","Static","Sample-specific","Label-inconsistent","Single-target"]
  ],
  [
    "<a href='https://arxiv.org/abs/2310.11595' target='_blank'>WaveAttack: Asymmetric Frequency Obfuscation-Based Backdoor Attacks Against Deep Neural Networks</a>",
    "NeurIPS",
    "2024",
    ["Invisible","Non-semantic","Learnable","Digital","Additive","Static","Sample-specific","Label-inconsistent","Single-target"]
  ],
  [
    "<a href='https://arxiv.org/abs/2408.08671' target='_blank'>Towards Physical World Backdoor Attacks Against Skeleton Action Recognition</a>",
    "ECCV",
    "2024",
    ["Visible","Non-semantic","Manual","Physical","Additive","Static","Sample-agnostic","Label-inconsistent","Single-target"]
  ],
  [
    "<a href='https://www.ecva.net/papers/eccv_2024/papers_ECCV/papers/11142.pdf' target='_blank'>Data-Poisoning Quantization Backdoor Attack</a>",
    "ECCV",
    "2024",
    ["Invisible","Non-semantic","Learnable","Digital","Additive","Static","Sample-specific","Label-consistent","Single-target"]
  ],
  [
    "<a href='https://arxiv.org/abs/2406.00588' target='_blank'>Generalization Bound and New Algorithm for Clean-Label Backdoor Attack</a>",
    "ICML",
    "2024",
    ["Invisible","Non-semantic","Learnable","Digital","Additive","Static","Sample-specific","Label-consistent","Single-target"]
  ],
  [
    "<a href='https://arxiv.org/abs/2407.10825' target='_blank'>Wicked Oddities: Selectively Poisoning for Effective Clean-Label Backdoor Attacks</a>",
    "ICLR",
    "2025",
    ["Visible","Non-semantic","Manual","Digital","Additive","Static","Sample-agnostic","Label-consistent","Single-target"]
  ],
  ["<a href='https://arxiv.org/abs/1811.12470' target='_blank'>Analyzing Federated Learning through an Adversarial Lens</a>",
    "ICML","2019",["Digital","Partial-data"]],
   ["<a href='https://arxiv.org/abs/1807.00459' target='_blank'>How to Backdoor Federated Learning</a>",
    "AISTATS","2020",["Digital","Partial-data"]],
   ["<a href='https://arxiv.org/abs/2007.05084' target='_blank'>Attack of the Tails: Yes, You Really Can Backdoor Federated Learning</a>",
    "NeurIPS","2020",["Digital","Partial-data"]],
   ["<a href='https://www.usenix.org/system/files/raid20-fung.pdf' target='_blank'>The Limitations of Federated Learning in Sybil Settings</a>",
    "RAID","2020",["Digital","Partial-data"]],
   ["<a href='https://arxiv.org/abs/2006.07026' target='_blank'>Backdoor Attacks on Federated Meta-Learning</a>",
    "arXiv","2020",["Digital","Partial-data"]],
   ["<a href='https://arxiv.org/abs/2007.03608' target='_blank'>Backdoor Attacks and Defenses in Feature-Partitioned Collaborative Learning</a>",
    "arXiv","2020",["Digital","Partial-data"]],
   ["<a href='https://dl.acm.org/doi/10.1145/3372297.3423362' target='_blank'>Composite Backdoor Attack for Deep Neural Network by Mixing Existing Benign Features</a>",
    "CCS","2020",
    ["Visible","Semantic","Manual","Digital","Physical","Additive","Dynamic",
     "Sample-agnostic","Label-inconsistent","Single-target",
     "One-stage","Full-data","Full-ctrl","Algo-ctrl"]],
   ["<a href='https://arxiv.org/abs/1905.13409' target='_blank'>Bypassing Backdoor Detection Algorithms in Deep Learning</a>",
    "Euro S&amp;P","2020",
    ["Visible","Non-semantic","Manual","Digital","Additive","Static",
     "Sample-agnostic","Label-inconsistent","Single-target","Two-stage"]],
   ["<a href='https://openreview.net/pdf?id=HkND-SRYPb' target='_blank'>DBA: Distributed Backdoor Attacks against Federated Learning</a>",
    "ICLR","2020",["Digital","Partial-data"]],
   ["<a href='https://arxiv.org/abs/2006.08131' target='_blank'>An Embarrassingly Simple Approach for Trojan Attack in Deep Neural Networks</a>",
    "KDD","2020",
    ["Visible","Non-semantic","Manual","Digital","Additive","Dynamic",
     "Sample-agnostic","Label-inconsistent","Single-target","Multi-target",
     "Two-stage","Full-data","Partial-ctrl","Algo-ctrl"]],
   ["<a href='https://proceedings.neurips.cc/paper/2020/file/234e691320c0ad5b45ee3c96d0d7b8f8-Paper.pdf' target='_blank'>Input-Aware Dynamic Backdoor Attack</a>",
    "NeurIPS","2020",
    ["Visible","Non-semantic","Learnable","Digital","Additive","Dynamic",
     "Sample-specific","One-stage","Full-data","Full-ctrl","Algo-ctrl"]],
   /* ------------- 2021 ------------- */
   ["<a href='https://www.cs.purdue.edu/homes/cheng535/static/papers/aaai21_dfst.pdf' target='_blank'>Deep Feature Space Trojan Attack of Neural Networks by Controlled Detoxification</a>",
    "AAAI","2021",
    ["Invisible","Learnable","Digital","Non-additive","Dynamic",
     "Sample-specific","One-stage","Full-data","Full-ctrl","Algo-ctrl"]],
   ["<a href='https://openreview.net/pdf/db3277f5b47619abfe13880772b864960e98f643.pdf' target='_blank'>WaNet – Imperceptible Warping-based Backdoor Attack</a>",
    "ICLR","2021",
    ["Invisible","Digital","Additive","Dynamic",
     "Sample-specific","One-stage"]],
   ["<a href='https://proceedings.neurips.cc/paper/2021/file/9d99197e2ebf03fc388d09f1e94af89b-Paper.pdf' target='_blank'>Backdoor Attack with Imperceptible Input and Latent Modification</a>",
    "NeurIPS","2021",
    ["Invisible","Learnable","Digital","Dynamic","Sample-specific"]],
   ["<a href='https://papers.neurips.cc/paper_files/paper/2021/file/959ab9a0695c467e7caf75431a872e5c-Paper.pdf' target='_blank'>Manipulating SGD with Data Ordering Attacks</a>",
    "NeurIPS","2021",
    ["Digital","Partial-data","Partial-ctrl","Algo-ctrl"]],
   ["<a href='https://openaccess.thecvf.com/content/ICCV2021/papers/Doan_LIRA_Learnable_Imperceptible_and_Robust_Backdoor_Attacks_ICCV_2021_paper.pdf' target='_blank'>LIRA: Learnable, Imperceptible and Robust Backdoor Attacks</a>",
    "ICCV","2021",
    ["Invisible","Learnable","Digital","Dynamic",
     "Sample-agnostic","Algo-ctrl"]],
   ["<a href='https://aclanthology.org/2021.emnlp-main.241.pdf' target='_blank'>Backdoor Attacks on Pre-trained Models by Layerwise Weight Poisoning</a>",
    "EMNLP","2021",["Partial-data","Partial-ctrl","Algo-ctrl"]],
   ["<a href='https://datasec.whu.edu.cn/wp-content/uploads/2023/09/Backdoor-Pre-Trained-Models-Can-Transfer-to-All.pdf' target='_blank'>Backdoor Pre-trained Models Can Transfer to All</a>",
    "CCS","2021",["Partial-data","Partial-ctrl","Algo-ctrl"]],
   /* ------------- 2022 ------------- */
   ["<a href='https://ojs.aaai.org/index.php/AAAI/article/view/21272' target='_blank'>Hibernated Backdoor: A Mutual Information Empowered Backdoor Attack to Deep Neural Networks</a>",
    "AAAI","2022",
    ["Visible","Digital","Additive","One-stage","Two-stage"]],
   ["<a href='https://openaccess.thecvf.com/content/CVPR2022/papers/Zhao_DEFEAT_Deep_Hidden_Feature_Backdoor_Attacks_by_Imperceptible_Perturbation_and_CVPR_2022_paper.pdf' target='_blank'>DEFEAT: Deep Hidden Feature Backdoor Attacks by Imperceptible Perturbation and Latent Representation Constraints</a>",
    "AAAI","2022",
    ["Invisible","Learnable","Digital","One-stage","Algo-ctrl"]],
   ["<a href='https://yangzhangalmo.github.io/papers/EUROSP22.pdf' target='_blank'>Dynamic Backdoor Attacks against Machine Learning Models</a>",
    "Euro S&amp;P","2022",
    ["Visible","Learnable","Digital","Dynamic",
     "Sample-specific","Single-target","Multi-target","Algo-ctrl"]],
   ["<a href='https://arxiv.org/pdf/2003.03675.pdf' target='_blank'>Dynamic Backdoor Attacks against Machine Learning Models (Invisible Variant)</a>",
    "ECCV","2022",
    ["Invisible","Learnable","Digital","Multi-target","Algo-ctrl"]],
   ["<a href='https://www.winlab.rutgers.edu/~yychen/daisylab/papers/RIBAC%20Towards%20Robust%20and%20Imperceptible%20Backdoor%20Attack%20against%20Compact%20DNN.pdf' target='_blank'>RIBAC: Towards Robust and Imperceptible Backdoor Attack against Compact DNN</a>",
    "ICASSP","2022",["Invisible","Learnable","Digital","Dynamic"]],
   ["<a href='https://sigport.org/documents/stealthy-backdoor-attack-adversarial-training' target='_blank'>Stealthy Backdoor Attack with Adversarial Training</a>",
    "IJCAI","2022",
    ["Invisible","Learnable","Digital","Dynamic","Algo-ctrl"]],
   ["<a href='https://arxiv.org/abs/2205.03190' target='_blank'>Imperceptible Backdoor Attack: From Input Space to Feature Representation</a>",
    "arXiv","2022",["Digital","Partial-data"]],
   ["<a href='https://arxiv.org/abs/2210.09305' target='_blank'>Thinking Two Moves Ahead: Anticipating Other Users Improves Backdoor Attacks in Federated Learning</a>",
    "CVPR","2022",
    ["Digital","Full-data","Partial-ctrl","Algo-ctrl"]],
   ["<a href='https://openaccess.thecvf.com/content/CVPR2022/papers/Wang_BppAttack_Stealthy_and_Efficient_Trojan_Attacks_Against_Deep_Neural_Networks_CVPR_2022_paper.pdf' target='_blank'>BppAttack: Stealthy and Efficient Trojan Attacks against Deep Neural Networks via Image Quantization and Contrastive Adversarial Learning</a>",
    "CVPR","2022",
    ["Invisible","Digital","Additive","Dynamic","Algo-ctrl"]],
   ["<a href='https://openaccess.thecvf.com/content/CVPR2022/papers/Feng_FIBA_Frequency-Injection_Based_Backdoor_Attack_in_Medical_Image_Analysis_CVPR_2022_paper.pdf' target='_blank'>Fiba: Frequency-Injection Based Backdoor Attack in Medical Image Analysis</a>",
    "NeurIPS","2022",
    ["Invisible","Learnable","Digital","Dynamic",
     "Single-target","Multi-target","Algo-ctrl"]],
   ["<a href='https://proceedings.neurips.cc/paper/2022/file/fa0126bb7ebad258bf4ffdbbac2dd787-Paper-Conference.pdf' target='_blank'>Marksman Backdoor: Backdoor Attacks with Arbitrary Target Class</a>",
    "IEEE TIP","2022",
    ["Invisible","Learnable","Digital","Dynamic","Algo-ctrl"]],
   /* ------------- 2023 ------------- */
   ["<a href='https://arxiv.org/pdf/2108.02488' target='_blank'>Poison Ink: Robust and Invisible Backdoor Attack</a>",
    "ICLR","2023",
    ["Invisible","Learnable","Digital","Additive","Dynamic","Algo-ctrl"]],
   ["<a href='https://arxiv.org/abs/2210.05929' target='_blank'>Few-shot Backdoor Attacks via Neural Tangent Kernels</a>",
    "CVPR","2023",
    ["Invisible","Learnable","Digital","Algo-ctrl"]],
   ["<a href='https://openaccess.thecvf.com/content/CVPR2023/papers/Chen_The_Dark_Side_of_Dynamic_Routing_Neural_Networks_Towards_Efficiency_CVPR_2023_paper.pdf' target='_blank'>The Dark Side of Dynamic Routing Neural Networks: Towards Efficiency Backdoor Injection</a>",
    "CVPR","2023",
    ["Digital","Partial-data","Algo-ctrl"]],
   ["<a href='https://openaccess.thecvf.com/content/CVPR2023/papers/Bober-Irizar_Architectural_Backdoors_in_Neural_Networks_CVPR_2023_paper.pdf' target='_blank'>Architectural Backdoors in Neural Networks</a>",
    "NeurIPS","2023",
    ["Partial-data"]],
   ["<a href='https://proceedings.neurips.cc/paper/2023/file/d0c6bc641a56bebee9d985b937307367-Paper-Conference.pdf' target='_blank'>IBA: Towards Irreversible Backdoor Attacks in Federated Learning</a>",
    "NeurIPS","2023",
    ["Partial-data"]],
   /* ------------- 2022 (late) ------------- */
   ["<a href='https://openreview.net/forum?id=S6ajVZy6FA' target='_blank'>A3FL: Adversarially Adaptive Backdoor Attacks to Federated Learning</a>",
    "Euro S&amp;P","2022",
    ["Visible","Learnable","Digital","Dynamic",
     "Sample-specific","Single-target","Multi-target","Algo-ctrl"]]
];