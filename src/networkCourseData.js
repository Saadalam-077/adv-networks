// Advanced Topics in Networks Course Curriculum | مقرر موضوعات متقدمة في الشبكات
// Prepared for Taif University | جامعة الطائف

export const networkCourseWeeks = {
  1: {
    titleEn: "Software-Defined Networking (SDN) & OpenFlow",
    titleAr: "الشبكات المعرفة بالبرمجيات وبروتوكول OpenFlow",
    icon: "🌐",
    video: {
      title: "Introduction to Software-Defined Networking (SDN)",
      titleAr: "مقدمة في الشبكات المعرفة بالبرمجيات (SDN)",
      youtubeId: "lbf_0j3zF4c",
      description: "Fundamental principles of SDN: decoupling control plane from data plane, centralized network controllers, and programmable forwarding tables."
    },
    content: [
      {
        type: "intro",
        titleEn: "Welcome to Advanced Topics in Networks!",
        titleAr: "مرحباً بك في مقرر موضوعات متقدمة في الشبكات!",
        contentEn: "Traditional computer networks bundle forwarding decisions (Data Plane) and routing logic (Control Plane) onto proprietary, hardware-locked switches and routers. Software-Defined Networking (SDN) revolutionizes network engineering by separating control logic into centralized, programmable software controllers, treating the underlying hardware as generic packet forwarding engines.",
        contentAr: "في الشبكات التقليدية، تندمج قرارات التوجيه وحزم البيانات داخل أجهزة مغلقة خاصة بكل مصنّع. تُحدث الشبكات المعرفة بالبرمجيات (SDN) ثورة في هندسة الشبكات من خلال فصل مستوى التحكم (Control Plane) برمجياً وجعله مركزياً، بينما تقتصر المبدلات على تمرير البيانات (Data Plane) بكفاءة عالية وفق قواعد برمجية مرنة."
      },
      {
        type: "concept",
        titleEn: "Architectural Planes in SDN",
        titleAr: "مستويات البنية المعمارية في SDN",
        contentEn: "SDN organizes the network into three distinct functional planes communicating via standardized interfaces.",
        contentAr: "تقسم معمارية SDN الشبكة إلى ثلاثة مستويات وظيفية مترابطة عبر واجهات قياسية موحدة.",
        keyPoints: [
          { en: "Data / Infrastructure Plane: Physical and virtual switches (e.g., Open vSwitch) responsible solely for packet matching and forwarding.", ar: "مستوى البيانات (Data Plane): المبدلات المادية والافتراضية المسؤولة عن مطابقة الحزم وإعادة توجيهها استناداً للجداول." },
          { en: "Control Plane: Centralized intelligence software (e.g., Ryu, ONOS, OpenDaylight) computing paths and pushing flow rules.", ar: "مستوى التحكم (Control Plane): وحدة التحكم البرمجية الذكية المركزية التي تحسب المسارات وتوزع قواعد التمرير." },
          { en: "Application Plane: Network business logic, traffic engineering, load balancing, and firewall applications.", ar: "مستوى التطبيقات (Application Plane): برمجيات إدارة الشبكة وهندسة حركة المرور وجدران الحماية وتحليل الأداء." },
          { en: "Southbound API (OpenFlow): Standard protocol linking the Controller with Data Plane switches.", ar: "واجهة Southbound (بروتوكول OpenFlow): البروتوكول القياسي الذي يربط وحدة التحكم بمبدلات تمرير البيانات." },
          { en: "Northbound API (REST/gRPC): Interfaces allowing management applications to instruct the controller.", ar: "واجهة Northbound (مثل REST و gRPC): تتيح لتطبيقات الإدارة توجيه وإرسال الأوامر لوحدة التحكم." }
        ]
      },
      {
        type: "code",
        titleEn: "OpenFlow Flow Table Entry & Ryu Controller Logic",
        titleAr: "بنية قاعدة جدول OpenFlow ونموذج تحكم بلغة Python",
        code: `# Ryu SDN Controller: Simple Switch Flow Insertion (Python)
from ryu.base import app_manager
from ryu.controller import ofp_event
from ryu.controller.handler import MAIN_DISPATCHER, set_ev_cls
from ryu.ofproto import ofproto_v1_3

class SimpleSwitch13(app_manager.RyuApp):
    OFP_VERSIONS = [ofproto_v1_3.OFP_VERSION]

    def add_flow(self, datapath, priority, match, actions, buffer_id=None):
        ofproto = datapath.ofproto
        parser = datapath.ofproto_parser
        inst = [parser.OFPInstructionActions(ofproto.OFPIT_APPLY_ACTIONS, actions)]
        mod = parser.OFPFlowMod(
            datapath=datapath, priority=priority, match=match,
            instructions=inst, idle_timeout=60, hard_timeout=0
        )
        datapath.send_msg(mod)
        # Flow rule dynamically pushed down Southbound channel to switch`,
        explanation: "This snippet demonstrates how an SDN controller injects an OpenFlow 1.3 flow rule into a switch with a priority and specific action (forward, drop, modify).",
        explanationAr: "يوضح هذا الكود كيفية قيام وحدة تحكم Ryu بتعريف وحقن قاعدة توجيه بروتوكول OpenFlow 1.3 مباشرة في جدول المبدل عبر واجهة Southbound."
      }
    ],
    exercises: [
      {
        q: "What is the primary architectural innovation of Software-Defined Networking (SDN)?",
        qAr: "ما هو الابتكار المعماري الأساسي للشبكات المعرفة بالبرمجيات (SDN)؟",
        options: [
          "Decoupling the Control Plane from the Data Plane into programmable software",
          "Replacing fiber optic cables with wireless satellite links",
          "Eliminating the need for IP addresses in local networks",
          "Encrypting physical Ethernet cables with hardware chips"
        ],
        correct: 0
      },
      {
        q: "Which interface communicates between the SDN Controller and the forwarding switches?",
        qAr: "ما هي الواجهة المسؤولة عن الاتصال بين وحدة التحكم (Controller) ومبدلات البيانات؟",
        options: [
          "Northbound API",
          "Southbound API (such as OpenFlow)",
          "Eastbound Gateway",
          "Direct Memory Access (DMA)"
        ],
        correct: 1
      },
      {
        q: "In an OpenFlow switch, what happens when a packet matches no rule in the flow table?",
        qAr: "في مبدل OpenFlow، ماذا يحدث عندما لا تطابق الحزمة أي قاعدة في جدول التمرير؟",
        options: [
          "The switch turns off immediately",
          "It is sent to the Controller as a Packet-In event or dropped based on table-miss rule",
          "The packet is broadcasted to all internet root servers",
          "The switch rewrites its MAC address permanently"
        ],
        correct: 1
      },
      {
        q: "Which of the following is a popular open-source SDN controller?",
        qAr: "أي من الخيارات التالية يُعد وحدة تحكم مفتوحة المصدر شهيرة في SDN؟",
        options: [
          "ONOS / Ryu / OpenDaylight",
          "Apache Kafka",
          "MySQL Workbench",
          "Adobe Photoshop"
        ],
        correct: 0
      }
    ]
  },

  2: {
    titleEn: "Network Functions Virtualization (NFV) & Service Chaining",
    titleAr: "محاكاة وظائف الشبكة وسلاسل الخدمات",
    icon: "📦",
    video: {
      title: "Network Functions Virtualization (NFV) Architecture",
      titleAr: "معمارية المحاكاة الافتراضية لوظائف الشبكة (NFV)",
      youtubeId: "V6oN_1U4qQY",
      description: "ETSI NFV framework: Virtualized Network Functions (VNFs), NFV Infrastructure (NFVI), and Management and Orchestration (MANO)."
    },
    content: [
      {
        type: "intro",
        titleEn: "From Middleboxes to Virtualized Functions",
        titleAr: "الانتقال من العتاد المخصص (Middleboxes) إلى الوظائف الافتراضية",
        contentEn: "Traditionally, network functions like Firewalls, NAT, DPI (Deep Packet Inspection), and WAN Accelerators required dedicated proprietary hardware boxes. NFV decouples these functions from hardware by executing them as software instances (VNFs) running on standard Commercial Off-The-Shelf (COTS) x86 servers.",
        contentAr: "تاريخياً، كانت وظائف الشبكة مثل جدران الحماية، محولات العناوين (NAT)، وفحص الحزم العميق (DPI) تتطلب شراء أجهزة مادية مخصصة باهظة الثمن. تتيح تقنية NFV تشغيل هذه الوظائف كبرمجيات افتراضية (VNFs) على خوادم تجارية قياسية x86 دون الارتباط بعتاد معين."
      },
      {
        type: "concept",
        titleEn: "The ETSI NFV Architectural Framework",
        titleAr: "الإطار المعماري القياسي لـ NFV من منظمة ETSI",
        contentEn: "The European Telecommunications Standards Institute (ETSI) defined the benchmark reference model for NFV.",
        contentAr: "حددت هيئة ETSI المعمارية المرجعية القياسية لتقنية NFV المكونة من ثلاثة مكونات رئيسية.",
        keyPoints: [
          { en: "VNFs (Virtualized Network Functions): The software implementation of network appliances (e.g., vFirewall, vRouter, vEPC).", ar: "الوظائف الافتراضية (VNFs): البرمجيات التي تؤدي وظيفة شبكية كاملة كجدار الحماية أو جهاز التوجيه الافتراضي." },
          { en: "NFVI (NFV Infrastructure): Hardware resources (compute, storage, network) abstracted by virtualization layer (KVM, ESXi, Docker).", ar: "البنية التحتية (NFVI): العتاد المادي وخوادم المعالجة وطبقة المحاكاة الافتراضية الداعمة." },
          { en: "MANO (Management and Orchestration): Coordinates resource allocation, lifecycle of VNFs, and end-to-end service chaining.", ar: "منظومة MANO: المسؤولة عن إدارة الموارد، دورة حياة الوظائف، وربط الخدمات الشبكية تلقائياً." },
          { en: "High Performance Accelerators: DPDK (Data Plane Development Kit) and SR-IOV for bypassing kernel overhead.", ar: "تقنيات تسريع الأداء: مثل DPDK و SR-IOV لتجاوز عبء نواة النظام وتحقيق سرعة نقل شبكية خطية." }
        ]
      },
      {
        type: "concept",
        titleEn: "Service Function Chaining (SFC)",
        titleAr: "سلسلة وظائف الخدمة (Service Function Chaining)",
        contentEn: "SFC stitches together ordered sequences of virtual network functions (e.g., Firewall -> NAT -> Load Balancer) steering traffic through policy-defined paths.",
        contentAr: "تتيح تقنية SFC توجيه حزم البيانات عبر مسار منظم يمر بسلسلة من الوظائف الافتراضية المحددة مسبقاً (مثل: جدار حماية ➔ كاشف تطفل ➔ موزع أحمال)."
      }
    ],
    exercises: [
      {
        q: "What does NFV primarily aim to achieve?",
        qAr: "ما هو الهدف الرئيسي الذي تسعى تقنية NFV لتحقيقه؟",
        options: [
          "Run network functions as software on standard commodity x86 servers",
          "Replace TCP/IP with Bluetooth protocols",
          "Remove routers from internet data centers",
          "Force all network traffic to be unencrypted"
        ],
        correct: 0
      },
      {
        q: "What does the MANO framework stand for in ETSI NFV?",
        qAr: "إلى ماذا يرمز اختصار MANO في معمارية ETSI NFV؟",
        options: [
          "Management and Orchestration",
          "Manual Access Network Operator",
          "Modern Algorithm for Network Optimization",
          "Multi-core Architecture Node Output"
        ],
        correct: 0
      },
      {
        q: "Which technique is used to bypass OS kernel networking overhead for high-speed VNF packet processing?",
        qAr: "ما هي التقنية المستخدمة لتجاوز عبء نواة نظام التشغيل لتسريع معالجة الحزم في VNFs؟",
        options: [
          "DPDK (Data Plane Development Kit) / SR-IOV",
          "CSS Flexbox layout",
          "HTML5 local storage",
          "Hard drive disk defragmentation"
        ],
        correct: 0
      },
      {
        q: "What is Service Function Chaining (SFC)?",
        qAr: "ما هو مفهوم سلسلة وظائف الخدمة (Service Function Chaining)؟",
        options: [
          "Steering traffic sequentially through an ordered set of network services",
          "Connecting multiple laptops using serial cables",
          "Creating Bitcoin blockchain hashes on routers",
          "Deleting routing tables when bandwidth exceeds 80%"
        ],
        correct: 0
      }
    ]
  },

  3: {
    titleEn: "5G/6G Core Architecture & Multi-Access Edge Computing",
    titleAr: "بنية شبكات الجيل الخامس والحوسبة الطرفية",
    icon: "📶",
    video: {
      title: "5G Core (5GC) Service-Based Architecture & Network Slicing",
      titleAr: "معمارية شبكات الجيل الخامس والحوسبة الطرفية",
      youtubeId: "vBq7_X94Ksc",
      description: "Service-Based Architecture (SBA), HTTP/2 REST communication, eMBB, URLLC, mMTC, and Edge Computing latency reduction."
    },
    content: [
      {
        type: "intro",
        titleEn: "5G Core: Cloud-Native Telecommunications",
        titleAr: "قلب شبكات الجيل الخامس: بنية سحابية متقدمة",
        contentEn: "The 3GPP 5G Core (5GC) completely redesigns mobile networking from monolithic hardware nodes into microservices utilizing cloud-native containers. Functions communicate through HTTP/2 REST APIs with JSON payloads in a Service-Based Architecture (SBA).",
        contentAr: "أعادت مواصفات 3GPP تصميم قلب شبكة الجيل الخامس بالكامل ليتحول من عتاد مادي مغلق إلى خدمات سحابية متناهية الصغر (Microservices) تتواصل فيما بينها عبر بروتوكول HTTP/2 وواجهات برمجة التطبيقات REST."
      },
      {
        type: "concept",
        titleEn: "The 3 Pillars of 5G & Network Slicing",
        titleAr: "ركائز الجيل الخامس الثلاث وتقطيع الشبكة (Network Slicing)",
        contentEn: "5G caters to three fundamentally different traffic requirements using logical isolated network slices on shared physical infrastructure.",
        contentAr: "تخدم شبكات 5G ثلاثة سيناريوهات متباينة للأداء عبر إنشاء شرائح شبكية افتراضية معزولة تماماً على نفس البنية التحتية.",
        keyPoints: [
          { en: "eMBB (Enhanced Mobile Broadband): Ultra-high throughput (gigabits/sec) for 4K/8K streaming and immersive XR.", ar: "النطاق العريض المتنقل المعزز (eMBB): سرعات نقل فائقة لتشغيل الفيديو عالي الدقة وتجارب الواقع الافتراضي." },
          { en: "URLLC (Ultra-Reliable Low-Latency Communication): Sub-millisecond latency with 99.999% reliability for autonomous vehicles and robotic surgery.", ar: "الاتصالات فائقة الموثوقية وزمن الاستجابة المنخفض (URLLC): استجابة بأجزاء من الألف من الثانية للمركبات ذاتية القيادة والعمليات الجراحية." },
          { en: "mMTC (Massive Machine-Type Communication): Density of up to 1 million connected IoT sensors per square kilometer.", ar: "اتصالات الآلات الضخمة (mMTC): ربط حتى مليون جهاز ومستشعر لإنترنت الأشياء في الكيلومتر المربع الواحد." },
          { en: "MEC (Multi-Access Edge Computing): Bringing cloud computing power closer to the user to cut round-trip latency.", ar: "الحوسبة الطرفية متعددة الوصول (MEC): تقريب المعالجة السحابية إلى حافة الشبكة لتقليص زمن الاستجابة إلى أدنى حد." }
        ]
      }
    ],
    exercises: [
      {
        q: "What architectural model does the 5G Core (5GC) use for communication between Network Functions?",
        qAr: "ما هو النموذج المعماري الذي يستخدمه قلب شبكة 5G للتواصل بين وظائفه؟",
        options: [
          "Service-Based Architecture (SBA) over HTTP/2 REST",
          "Analog dial-up phone switching",
          "Simple Token Ring topology",
          "Raw unformatted RS-232 serial bytes"
        ],
        correct: 0
      },
      {
        q: "Which 5G use case is designed specifically for autonomous driving and remote robotic surgery?",
        qAr: "أي حالات استخدام 5G مخصصة تحديداً للمركبات ذاتية القيادة والجراحة الروبوتية عن بُعد؟",
        options: [
          "URLLC (Ultra-Reliable Low-Latency Communication)",
          "eMBB (Enhanced Mobile Broadband)",
          "mMTC (Massive Machine Type)",
          "Legacy GSM Voice"
        ],
        correct: 0
      },
      {
        q: "What is Network Slicing in 5G?",
        qAr: "ما هو مفهوم تقطيع الشبكة (Network Slicing) في الجيل الخامس؟",
        options: [
          "Creating multiple isolated virtual networks with dedicated SLAs over shared infrastructure",
          "Physically cutting network cables with scissors",
          "Splitting a single fiber into multiple pieces manually",
          "Limiting all users to 64 kbps speeds"
        ],
        correct: 0
      },
      {
        q: "What is the primary benefit of Multi-Access Edge Computing (MEC)?",
        qAr: "ما هي الفائدة الأساسية للحوسبة الطرفية متعددة الوصول (MEC)؟",
        options: [
          "Drastically reducing latency by processing data closer to end-users",
          "Increasing the size of smartphone batteries",
          "Replacing SIM cards with barcode stickers",
          "Disabling Wi-Fi access in cities"
        ],
        correct: 0
      }
    ]
  },

  4: {
    titleEn: "Data Center Networking & Spine-Leaf Architectures",
    titleAr: "شبكات مراكز البيانات وبنية Spine-Leaf",
    icon: "🏢",
    video: {
      title: "Data Center Fabrics: Spine-Leaf, Clos, & VXLAN",
      titleAr: "بنية مراكز البيانات: تصميم Spine-Leaf وبروتوكول VXLAN",
      youtubeId: "yXp6-Jv2Qz8",
      description: "East-West traffic dominance, Clos architecture, Equal-Cost Multi-Path (ECMP), and VXLAN network overlays."
    },
    content: [
      {
        type: "intro",
        titleEn: "The Shift to East-West Traffic",
        titleAr: "التحول نحو حركة المرور الأفقية (East-West Traffic)",
        contentEn: "In classic networks, traffic flowed North-South (client to external internet server). In modern hyper-scale data centers (AWS, Google, Azure), 80%+ of traffic is East-West (server-to-server microservice and distributed storage traffic). Traditional 3-tier hierarchical models (Core-Aggregation-Access) with Spanning Tree Protocol (STP) blocked half the links and created massive bandwidth bottlenecks.",
        contentAr: "في الشبكات التقليدية كانت حركة المرور رأسية (North-South) بين المستخدم والخادم الخارجي. أما في مراكز البيانات الضخمة المعاصرة، فإن أكثر من 80% من البيانات تنتقل أفقياً (East-West) بين الخوادم وقواعد البيانات الموزعة، مما جعل التصميم الهرمي القديم وبروتوكول STP غير صالحين نظراً لإغلاقهما لنصف الروابط."
      },
      {
        type: "concept",
        titleEn: "Spine-Leaf (Clos) Architecture",
        titleAr: "معمارية Spine-Leaf القائمة على شبكات Clos",
        contentEn: "A 2-tier non-blocking topology where every Leaf switch connects to every Spine switch.",
        contentAr: "بنية شبكية ثنائية الطبقات غير قابلة للحجب يرتبط فيها كل مبدل طرفي (Leaf) بجميع مبدلات القلب (Spine).",
        keyPoints: [
          { en: "Predictable Latency: Every server is exactly two network hops away from any other server.", ar: "زمن وصول متوقع وثابت: أي خادم يبعد خطوتين شبكيتين فقط عن أي خادم آخر في المركز." },
          { en: "ECMP (Equal-Cost Multi-Path): All uplinks are simultaneously active and load-balanced at Layer 3 using BGP or OSPF.", ar: "التوجيه متعدد المسارات متساوي التكلفة (ECMP): جميع المسارات تعمل بالتوازي لتوزيع الأحمال دون حجب الروابط." },
          { en: "VXLAN (Virtual Extensible LAN): Encapsulates Layer 2 Ethernet frames in Layer 3 UDP packets (port 4789).", ar: "بروتوكول VXLAN: يغلّف إطارات الطبقة الثانية داخل حزم UDP في الطبقة الثالثة لإنشاء شبكات تراكب مرنة." },
          { en: "Scalability: Expands VLAN limit from 4,096 up to 16.7 million Virtual Network Identifiers (VNIs).", ar: "قابلية التوسع: يوسع نطاق شبكات VLAN من 4,096 شبكة فقط إلى أكثر من 16 مليون شبكة عبر VNIs." }
        ]
      }
    ],
    exercises: [
      {
        q: "Why did modern data centers replace traditional 3-tier topologies with Spine-Leaf architectures?",
        qAr: "لماذا استبدلت مراكز البيانات الحديثة البنية الهرمية التقليدية بتصميم Spine-Leaf؟",
        options: [
          "To optimize high-throughput East-West server-to-server traffic with predictable latency",
          "To reduce the number of servers in the building",
          "Because Spanning Tree Protocol is faster than BGP",
          "To run networks without electricity"
        ],
        correct: 0
      },
      {
        q: "In a Spine-Leaf network, how many hops separate any two servers connected to different leaf switches?",
        qAr: "في شبكة Spine-Leaf، كم عدد القفزات بين خادمين متصلين بمبدلات Leaf مختلفة؟",
        options: [
          "Exactly 2 hops (Leaf -> Spine -> Leaf)",
          "15 to 20 random hops",
          "Depends on the day of the week",
          "0 hops"
        ],
        correct: 0
      },
      {
        q: "What is the primary advantage of VXLAN over traditional 802.1Q VLANs?",
        qAr: "ما هي الميزة الأساسية لبروتوكول VXLAN مقارنة بشبكات VLAN التقليدية؟",
        options: [
          "Expands network segments from 4,096 to over 16 million (24-bit VNI) over Layer 3",
          "Restricts networks to 10 computers maximum",
          "Disables encryption permanently",
          "Converts all Ethernet frames into text messages"
        ],
        correct: 0
      },
      {
        q: "What protocol mechanism enables all active links in a Spine-Leaf fabric to forward traffic concurrently?",
        qAr: "ما هي الآلية التي تمكن كافة الروابط في بنية Spine-Leaf من العمل بالتوازي وتوزيع الأحمال؟",
        options: [
          "ECMP (Equal-Cost Multi-Pathing)",
          "STP blocking mode",
          "Single-thread FIFO queue",
          "Half-duplex collision detection"
        ],
        correct: 0
      }
    ]
  },

  5: {
    titleEn: "Advanced Network Security & Zero Trust Architecture",
    titleAr: "أمن الشبكات المتقدم ونموذج انعدام الثقة Zero Trust",
    icon: "🛡️",
    video: {
      title: "Zero Trust Architecture (ZTA) & Micro-segmentation",
      titleAr: "معمارية انعدام الثقة والتقسيم الدقيق للشبكات",
      youtubeId: "1W7oX3F_W0c",
      description: "Principles of 'Never Trust, Always Verify', NIST SP 800-207, Micro-segmentation, and Mutual TLS (mTLS)."
    },
    content: [
      {
        type: "intro",
        titleEn: "Beyond the Castle-and-Moat Security Model",
        titleAr: "ما بعد نموذج 'القلعة والخندق' الأمني التقليدي",
        contentEn: "Classic network perimeter security assumed anyone inside the corporate intranet was trustworthy. In modern cloud and hybrid environments, an attacker who breaches one device can move laterally. Zero Trust Architecture (ZTA) operates on the core principle: 'Never Trust, Always Verify', treating internal network traffic as equally hostile as public internet traffic.",
        contentAr: "افترضت نماذج الأمان التقليدية أن كل من داخل شبكة المؤسسة موثوق به. في البيئات السحابية والهجينة، إذا تمكن المهاجم من اختراق جهاز واحد فإنه ينتقل جانبياً بسهولة. يقوم نموذج انعدام الثقة (Zero Trust) على مبدأ أساسي: 'لا تثق أبداً، وتحقق دائماً' ويعامل الحركة الداخلية كأنها حركة عامة غير آمنة."
      },
      {
        type: "concept",
        titleEn: "Core Tenets of Zero Trust (NIST SP 800-207)",
        titleAr: "المبادئ الأساسية لنموذج Zero Trust وفق معايير NIST",
        contentEn: "Zero trust establishes strict identity verification and dynamic context-based authorization for every transaction.",
        contentAr: "يفرض نموذج انعدام الثقة تحققا صارماً من الهوية وتفويضاً ديناميكياً يعتمد على السياق لكل عملية تبادل للبيانات.",
        keyPoints: [
          { en: "Identity-Centric Access: User and device identity replaces IP address as the primary perimeter.", ar: "الوصول المعتمد على الهوية: هوية المستخدم والجهاز أصبحت هي خط الدفاع الأساسي بدلاً من عنوان IP." },
          { en: "Least Privilege: Granting only the minimum required access permissions for each specific session.", ar: "الحد الأدنى من الصلاحيات: منح الوصول الضروري فقط لأداء المهمة ولفترة زمنية محددة." },
          { en: "Micro-segmentation: Isolating workloads and workloads in individual policy containers to stop lateral movement.", ar: "التقسيم الدقيق (Micro-segmentation): عزل كل خدمة وتطبيق في منطقة أمنية خاصة لمنع الاختراق الجانبي." },
          { en: "Mutual TLS (mTLS): Enforcing cryptographic verification of both client and server on every service hop.", ar: "التشفير التبادلي (mTLS): التحقق الرقمي المتبادل من هوية العميل والخادم في كل معاملة شبكية." }
        ]
      }
    ],
    exercises: [
      {
        q: "What is the foundational principle of Zero Trust Architecture (ZTA)?",
        qAr: "ما هو المبدأ الأساسي لمعمارية انعدام الثقة (Zero Trust Architecture)؟",
        options: [
          "Never Trust, Always Verify",
          "Trust anyone connected to the company Wi-Fi",
          "Disable firewalls to speed up communication",
          "Only inspect packets originating from foreign countries"
        ],
        correct: 0
      },
      {
        q: "What does Micro-segmentation prevent in modern enterprise networks?",
        qAr: "ما الذي تمنعه تقنية التقسيم الدقيق (Micro-segmentation) في شبكات الشركات؟",
        options: [
          "Lateral movement of attackers between internal workloads and servers",
          "Users from browsing the internet",
          "Computers from downloading security patches",
          "Monitors from displaying colored graphics"
        ],
        correct: 0
      },
      {
        q: "How does Mutual TLS (mTLS) differ from standard one-way TLS?",
        qAr: "كيف يختلف التشفير المتبادل (mTLS) عن تشفير TLS القياسي أحادي الاتجاه؟",
        options: [
          "Both client and server must cryptographically verify each other with digital certificates",
          "mTLS does not use encryption at all",
          "Only the server proves its identity, client remains anonymous",
          "It uses passwords written in plain text"
        ],
        correct: 0
      },
      {
        q: "Under NIST SP 800-207, which component dynamically decides whether to grant access to a resource?",
        qAr: "وفق مواصفات NIST SP 800-207، ما هو المكون الذي يتخذ قرار منح أو رفض الوصول للموارد؟",
        options: [
          "Policy Decision Point (PDP) / Policy Engine",
          "A random coin toss module",
          "The client's mouse driver",
          "The cooling fan speed sensor"
        ],
        correct: 0
      }
    ]
  },

  6: {
    titleEn: "IoT Protocols & Low-Power Wide-Area Networks (LPWAN)",
    titleAr: "بروتوكولات إنترنت الأشياء والشبكات منخفضة الطاقة",
    icon: "📡",
    video: {
      title: "IoT Communication Protocols: MQTT, CoAP, LoRaWAN",
      titleAr: "بروتوكولات اتصالات إنترنت الأشياء: MQTT و CoAP و LoRaWAN",
      youtubeId: "hQ1Nq8L9g5Y",
      description: "Comparison of lightweight application protocols (MQTT vs CoAP) and physical LPWAN standards (LoRaWAN, NB-IoT)."
    },
    content: [
      {
        type: "intro",
        titleEn: "Constrained Devices in Challenging Environments",
        titleAr: "أجهزة إنترنت الأشياء المقيدة والبيئات الصعبة",
        contentEn: "Internet of Things (IoT) sensors often run on tiny coin-cell batteries with low compute power and lossy wireless links. Heavy enterprise protocols like HTTP/1.1 and bulky TLS handshakes deplete battery life in days. Specialized lightweight protocols reduce protocol overhead down to a few bytes.",
        contentAr: "تعمل مستشعرات إنترنت الأشياء غالباً ببطاريات صغيرة وطاقة معالجة محدودة عبر روابط لاسلكية ضعيفة. استخدام البروتوكولات التقليدية الثقيلة مثل HTTP يستنزف البطارية سريعاً، لذا ابتُكرت بروتوكولات خفيفة تقلل حجم الترويسة إلى بايتات معدودة لتوفير الطاقة وزيادة المدى."
      },
      {
        type: "concept",
        titleEn: "Application Layer Protocols: MQTT vs CoAP",
        titleAr: "بروتوكولات طبقة التطبيقات: مقارنة بين MQTT و CoAP",
        contentEn: "Two leading messaging paradigms dominate the IoT application landscape.",
        contentAr: "يهيمن بروتوكولان رئيسيان على تطبيقات إنترنت الأشياء بنماذج اتصال مختلفة.",
        keyPoints: [
          { en: "MQTT (Message Queuing Telemetry Transport): Publish/Subscribe model running over TCP. Uses a central Broker. Header is only 2 bytes.", ar: "بروتوكول MQTT: يعتمد نموذج النشر/الاشتراك (Pub/Sub) عبر TCP ووسيط مركزي (Broker) بترويسة خفيفة تبدأ من 2 بايت فقط." },
          { en: "MQTT Quality of Service: QoS 0 (at most once), QoS 1 (at least once), QoS 2 (exactly once).", ar: "مستويات جودة خدمة MQTT: مستويات (QoS 0 و 1 و 2) لضمان وصول الرسالة دون تكرار أو فقدان." },
          { en: "CoAP (Constrained Application Protocol): RESTful Request/Response model running over UDP (RFC 7252) designed to mimic HTTP.", ar: "بروتوكول CoAP: نموذج طلب/استجابة مستوحى من HTTP ويعمل فوق UDP لتجنب تكلفة مصافحة TCP." },
          { en: "LoRaWAN & NB-IoT: LPWAN technologies offering 10+ km transmission ranges with 10-year battery life.", ar: "تقنيات LPWAN (مثل LoRaWAN و NB-IoT): تتيح مدى بث يتجاوز 10 كيلومترات مع عمر بطارية يصل لـ 10 سنوات." }
        ]
      }
    ],
    exercises: [
      {
        q: "Which communication pattern does MQTT utilize?",
        qAr: "ما هو نمط الاتصال الذي يعتمد عليه بروتوكول MQTT؟",
        options: [
          "Publish / Subscribe architecture via a centralized broker",
          "Peer-to-peer file torrenting",
          "Circuit-switched telephony",
          "Master-slave parallel printer cable"
        ],
        correct: 0
      },
      {
        q: "What underlying transport layer protocol does CoAP use to minimize overhead?",
        qAr: "ما هو بروتوكول طبقة النقل الذي يستخدمه CoAP لتقليل استهلاك الطاقة والبيانات؟",
        options: [
          "UDP (User Datagram Protocol)",
          "TCP (Transmission Control Protocol)",
          "BGP",
          "FTP"
        ],
        correct: 0
      },
      {
        q: "What does LoRaWAN provide for IoT deployments?",
        qAr: "ما الذي توفره تقنية LoRaWAN لشبكات إنترنت الأشياء؟",
        options: [
          "Long-range (kilometers) low-power communication for battery-operated devices",
          "Gigabit video streaming to smart televisions",
          "Satellite rocket steering",
          "HDMI display mirroring"
        ],
        correct: 0
      },
      {
        q: "Which MQTT QoS level guarantees that a message is delivered 'exactly once' without duplication?",
        qAr: "أي مستوى من جودة الخدمة (QoS) في MQTT يضمن وصول الرسالة 'مرة واحدة بالضبط' دون تكرار؟",
        options: [
          "QoS 2",
          "QoS 0",
          "QoS 1",
          "QoS 4"
        ],
        correct: 0
      }
    ]
  },

  7: {
    titleEn: "IPv6 Migration & Segment Routing (SRv6 / SR-MPLS)",
    titleAr: "الانتقال إلى IPv6 والتوجيه المقطعي SRv6",
    icon: "🔀",
    video: {
      title: "Segment Routing Architecture (SR-MPLS and SRv6)",
      titleAr: "معمارية التوجيه المقطعي (Segment Routing و SRv6)",
      youtubeId: "3_oX1Pq9m0w",
      description: "Source-based routing, Segment Routing Header (SRH), elimination of LDP/RSVP-TE, and unified data planes."
    },
    content: [
      {
        type: "intro",
        titleEn: "Source Routing Reimagined for the Modern Cloud",
        titleAr: "إعادة ابتكار التوجيه من المصدر (Source Routing)",
        contentEn: "Traditional MPLS traffic engineering required routers to maintain massive per-flow state tables using complex signaling protocols (LDP, RSVP-TE). Segment Routing (SR) revolutionizes packet forwarding by placing the complete path instruction directly inside the packet header at the ingress router, making transit routers completely stateless.",
        contentAr: "تطلبت هندسة المرور في شبكات MPLS التقليدية من الموجهات حفظ آلاف حالات المسارات عبر بروتوكولات معقدة كـ RSVP-TE. يقدم التوجيه المقطعي (Segment Routing) مفهوماً ثورياً: يُحدد المسار كاملاً في ترويسة الحزمة عند نقطة الدخول، مما يجعل الموجهات الوسيطة خالية تماماً من حفظ الحالات (Stateless)."
      },
      {
        type: "concept",
        titleEn: "SRv6: Native IPv6 Integration",
        titleAr: "تقنية SRv6: التكامل المباشر مع IPv6",
        contentEn: "SRv6 encodes segments as standard 128-bit IPv6 addresses within a Segment Routing Extension Header (SRH).",
        contentAr: "تستخدم SRv6 عناوين IPv6 قياسية بطول 128-بت لتمثيل المقاطع البرمجية داخل ترويسة امتداد التوجيه (SRH).",
        keyPoints: [
          { en: "No Extra MPLS Labels: Transits natively across standard IPv6 networks without needing MPLS tags.", ar: "الاستغناء عن علامات MPLS: تمر الحزم عبر شبكات IPv6 العادية دون الحاجة لأجهزة مخصصة." },
          { en: "Network Programmability: A segment can represent a topological instruction (go to node X) or a service instruction (run firewall VNF).", ar: "قابلية برمجة الشبكة: يمكن للمقطع تمثيل تعليمة مسار (انتقل للموجه X) أو تعليمة خدمة (مرر الحزمة لجدار حماية افتراضي)." },
          { en: "IPv4 to IPv6 Migration: Transition mechanisms including Dual-Stack, 6in4 encapsulation tunnels, and NAT64/DNS64.", ar: "تقنيات الانتقال لـ IPv6: تشمل المكدس المزدوج (Dual-Stack)، الأنفاق التراكبية، وتقنية NAT64 مع DNS64." }
        ]
      }
    ],
    exercises: [
      {
        q: "What is the primary operational advantage of Segment Routing over traditional RSVP-TE?",
        qAr: "ما هي الميزة التشغيلية الكبرى للتوجيه المقطعي مقارنة ببروتوكول RSVP-TE التقليدي؟",
        options: [
          "It eliminates path state in intermediate transit routers by encoding the path in packet headers",
          "It forces all packets to use dial-up modems",
          "It requires 10 times more memory in core routers",
          "It only works on copper twisted-pair cables"
        ],
        correct: 0
      },
      {
        q: "How are segments represented in SRv6?",
        qAr: "كيف يتم تمثيل المقاطع (Segments) في تقنية SRv6؟",
        options: [
          "As standard 128-bit IPv6 addresses in a Segment Routing Header (SRH)",
          "As 4-digit PIN numbers",
          "As audio frequencies",
          "As barcode images"
        ],
        correct: 0
      },
      {
        q: "Which transition technology allows IPv6-only clients to access legacy IPv4-only servers?",
        qAr: "ما هي تقنية الانتقال التي تتيح لأجهزة IPv6 فقط الاتصال بخوادم IPv4 القديمة؟",
        options: [
          "NAT64 / DNS64",
          "CSMA/CD",
          "WEP encryption",
          "FTP passive mode"
        ],
        correct: 0
      },
      {
        q: "In Segment Routing, where is the routing path decision encoded?",
        qAr: "في التوجيه المقطعي، أين يتم تشفير وتحديد مسار الرحلة الشبكية؟",
        options: [
          "At the ingress (entry) node directly into the packet header",
          "In every core router's hard drive simultaneously",
          "At the destination device after the packet arrives",
          "On a piece of paper in the server room"
        ],
        correct: 0
      }
    ]
  },

  8: {
    titleEn: "In-Band Network Telemetry (INT) & Network Observability",
    titleAr: "قياسات الشبكة عن بُعد والمراقبة الذاتية",
    icon: "📊",
    video: {
      title: "Streaming Telemetry vs SNMP & In-band Network Telemetry (INT)",
      titleAr: "القياسات الشبكية المتدفقة وتقنية In-Band Network Telemetry",
      youtubeId: "2eK8X_rFq4k",
      description: "Limitations of SNMP polling, push-based streaming telemetry, P4 programmable data planes, and nanosecond latency tracing."
    },
    content: [
      {
        type: "intro",
        titleEn: "The Death of SNMP Polling",
        titleAr: "نهاية حقبة استطلاع SNMP التقليدي",
        contentEn: "For 30 years, network engineers monitored switches using SNMP polling every 5 minutes. In modern 400Gbps links, microbursts that cause packet loss happen in microseconds and are completely invisible to SNMP. Streaming Telemetry and In-Band Network Telemetry (INT) capture ground-truth telemetry from live packets in real-time.",
        contentAr: "لعقود طويلة اعتمد مهندسو الشبكات على بروتوكول SNMP الذي يستطلع حالة الأجهزة كل 5 دقائق. ولكن في شبكات اليوم فائقة السرعة، تحدث الاختناقات وفقدان الحزم في أجزاء من المليون من الثانية. تقدم تقنيات Telemetry و INT حلاً فورياً عبر استخراج البيانات مباشرة من الحزم الحقيقية."
      },
      {
        type: "concept",
        titleEn: "In-Band Network Telemetry (INT) & P4",
        titleAr: "تقنية القياسات المضمنة (INT) ولغة برمجة المبدلات P4",
        contentEn: "INT embeds telemetry metadata directly into live user data packets as they traverse each hop.",
        contentAr: "تقوم تقنية INT بحقن معلومات القياس (مثل زمن الانتظار في الطابور والمعرف) داخل ترويسة الحزمة أثناء مرورها.",
        keyPoints: [
          { en: "Hop-by-Hop Telemetry: Switch ID, ingress/egress port, queue occupancy, and nanosecond timestamps.", ar: "قياس دقيق عند كل قفزة: معرف المبدل، المنفذ، حجم الطابور وزمن الانتظار بالنانو ثانية." },
          { en: "P4 Programming Language: Allows programming the packet parser and match-action pipeline of network ASIC chips.", ar: "لغة P4: لغة برمجية مفتوحة تتيح للمهندس برمجة معالجات المبدلات (ASIC) وتحديد سلوك الحزم." },
          { en: "Streaming Telemetry: Pushes gRPC/Protobuf state notifications to telemetry databases (e.g., InfluxDB, Prometheus).", ar: "القياسات المتدفقة: دفع الإشعارات آلياً عبر gRPC و Protobuf إلى قواعد بيانات المراقبة والتحليل." }
        ]
      }
    ],
    exercises: [
      {
        q: "Why is SNMP polling inadequate for monitoring high-speed modern data centers?",
        qAr: "لماذا يعد استطلاع SNMP غير كافٍ لمراقبة مراكز البيانات فائقة السرعة الحديثة؟",
        options: [
          "Its polling interval (minutes) misses microbursts and transient congestion that happen in microseconds",
          "SNMP requires vacuum tubes to function",
          "SNMP was banned by the United Nations",
          "Modern switches no longer have IP addresses"
        ],
        correct: 0
      },
      {
        q: "How does In-Band Network Telemetry (INT) collect forwarding path information?",
        qAr: "كيف تجمع تقنية In-Band Network Telemetry (INT) معلومات مسار تمرير البيانات؟",
        options: [
          "Each switch inserts its own telemetry metadata (timestamp, queue depth) into the packet header as it passes",
          "By sending technician emails once per hour",
          "By measuring the physical temperature of the room only",
          "By turning off the router when congestion occurs"
        ],
        correct: 0
      },
      {
        q: "What is the primary function of the P4 programming language?",
        qAr: "ما هي الوظيفة الأساسية للغة البرمجة P4 في الشبكات؟",
        options: [
          "Programming the packet forwarding behavior and header parsing of network switches/ASICs",
          "Writing 3D mobile games",
          "Designing web browser stylesheets",
          "Managing employee payroll"
        ],
        correct: 0
      },
      {
        q: "What transport protocol and serialization are commonly used in Streaming Telemetry?",
        qAr: "ما هو بروتوكول النقل الشائع المستخدم في دفع القياسات الشبكية المتدفقة؟",
        options: [
          "gRPC over HTTP/2 with Protocol Buffers (Protobuf)",
          "Floppy disks mailed to headquarters",
          "Morse code over serial ports",
          "Telnet without passwords"
        ],
        correct: 0
      }
    ]
  },

  9: {
    titleEn: "AI & Machine Learning in Autonomous Networks",
    titleAr: "الذكاء الاصطناعي في إدارة الشبكات الذاتية",
    icon: "🤖",
    video: {
      title: "AI in Networking: Intent-Based Networking (IBN) & Closed Loops",
      titleAr: "الذكاء الاصطناعي في الشبكات: الشبكات القائمة على النوايا والأتمتة",
      youtubeId: "3e_lQ_gX9r4",
      description: "Machine Learning models for traffic prediction, automated anomaly detection, and Intent-Based Networking closed loops."
    },
    content: [
      {
        type: "intro",
        titleEn: "From Reactive Scripting to Self-Driving Networks",
        titleAr: "من الأوامر اليدوية إلى الشبكات ذاتية القيادة (Self-Driving Networks)",
        contentEn: "Network complexity has outpaced human manual configuration capabilities. AI-driven networking uses machine learning algorithms (Reinforcement Learning, Graph Neural Networks) to predict traffic surges, detect security breaches in real-time, and automatically reconfigure network policies without human intervention.",
        contentAr: "تجاوزت درجة تعقيد الشبكات الحديثة قدرة البشر على إدارتها بالأوامر اليدوية. توظف شبكات الذكاء الاصطناعي خوارزميات تعلم الآلة للتنبؤ باختناقات حركة المرور، واكتشاف الهجمات لحظياً، وإعادة تشكيل المسارات تلقائياً لتكون شبكات ذاتية الشفاء والتحسين (Self-Healing)."
      },
      {
        type: "concept",
        titleEn: "Intent-Based Networking (IBN) & Closed-Loop Automation",
        titleAr: "الشبكات القائمة على النوايا (IBN) وحلقة الأتمتة المغلقة",
        contentEn: "Administrators specify WHAT they want (Intent), and AI figures out HOW to configure the infrastructure to maintain it.",
        contentAr: "يحدد مدير الشبكة 'الغاية' أو النية المرجوة، ويتولى الذكاء الاصطناعي تحويلها إلى إعدادات تقنية مفصلة مع مراقبة استمرارها.",
        keyPoints: [
          { en: "Intent Translation: Converting high-level business goals (e.g., 'Ensure VIP video traffic latency < 15ms') into specific routing rules.", ar: "ترجمة النية: تحويل أهداف العمل (مثل: 'حافظ على زمن وصول مكالمات الفيديو أقل من 15 مللي ثانية') لإعدادات دقيقة." },
          { en: "Continuous Validation: Constantly verifying that actual network behavior matches the intended business policy.", ar: "التحقق المستمر: مقارنة أداء الشبكة الفعلي بالسياسة المحددة لحظة بلحظة." },
          { en: "Closed-Loop Remediation: Automatic corrective actions (re-routing, spin-up VNFs) when SLA violations or anomalies are detected.", ar: "حلقة المعالجة المغلقة: اتخاذ إجراءات تصحيحية تلقائية فور رصد أي انحراف عن مؤشرات الخدمة المطلوبة." }
        ]
      }
    ],
    exercises: [
      {
        q: "What is the core philosophy of Intent-Based Networking (IBN)?",
        qAr: "ما هي الفلسفة الجوهرية للشبكات القائمة على النوايا (IBN)؟",
        options: [
          "Operators declare the desired outcome/intent, and the system automatically translates, validates, and maintains the state",
          "Operators must manually type 10,000 CLI commands every morning",
          "Replacing routers with human postal workers",
          "Eliminating all user authentication completely"
        ],
        correct: 0
      },
      {
        q: "What does 'Closed-Loop Automation' mean in autonomous network operations?",
        qAr: "ماذا تعني 'حلقة الأتمتة المغلقة' في تشغيل الشبكات الذاتية؟",
        options: [
          "The system senses network state, analyzes telemetry, decides action, and executes fixes autonomously without human delay",
          "A network with cables connected in an endless circle causing broadcast loops",
          "A network that shuts down at 5:00 PM every day",
          "A computer without an internet connection"
        ],
        correct: 0
      },
      {
        q: "Which AI technique is often used for optimal routing path selection under dynamically changing traffic conditions?",
        qAr: "أي تقنيات الذكاء الاصطناعي تُستخدم لاختيار أفضل مسار توجيه في ظل ظروف حركة المرور الديناميكية المتغيرة؟",
        options: [
          "Reinforcement Learning (RL)",
          "Optical Character Recognition (OCR)",
          "Linear spreadsheet macros",
          "Photographic filters"
        ],
        correct: 0
      },
      {
        q: "How does AI-driven predictive maintenance benefit computer networks?",
        qAr: "كيف تفيد الصيانة التنبؤية المدعومة بالذكاء الاصطناعي شبكات الحاسب؟",
        options: [
          "It identifies hardware degradation and imminent link failures before service disruption occurs",
          "It makes network equipment turn into solid gold",
          "It writes homework essays for students",
          "It prevents users from turning on their laptops"
        ],
        correct: 0
      }
    ]
  },

  10: {
    titleEn: "Cloud Networking, Multi-Cloud Interconnect & SASE",
    titleAr: "شبكات السحابة والربط متعدد السحب و SASE",
    icon: "☁️",
    video: {
      title: "Cloud Networking: VPC, Transit Gateway, SD-WAN, and SASE",
      titleAr: "شبكات السحابة: VPC و Transit Gateway وتقنية SASE",
      youtubeId: "d_6HqGf5m7k",
      description: "Virtual Private Clouds (VPCs), Hybrid Cloud interconnect (Direct Connect / ExpressRoute), SD-WAN, and Secure Access Service Edge (SASE)."
    },
    content: [
      {
        type: "intro",
        titleEn: "The Modern Distributed Enterprise Fabric",
        titleAr: "النسيج الشبكي للمؤسسات الموزعة الحديثة",
        contentEn: "Enterprises no longer host applications in a single private building. Modern networks span public clouds (AWS, Microsoft Azure, Google Cloud), software-as-a-service providers, and remote distributed workforces. Software-Defined WAN (SD-WAN) and Secure Access Service Edge (SASE) converge software networking and cybersecurity into a unified, globally distributed cloud service.",
        contentAr: "لم تعد الشركات تستضيف تطبيقاتها داخل مبنى واحد منعزل، بل تتوزع مواردها عبر السحب العامة (AWS و Azure و GCP) والبرمجيات السحابية والموظفين عن بُعد. تجمع تقنية SASE بين قدرات شبكات SD-WAN المتقدمة والأمن السيبراني السحابي في خدمة واحدة موزعة عالمياً."
      },
      {
        type: "concept",
        titleEn: "VPC Networking & Hybrid Cloud Interconnect",
        titleAr: "شبكات VPC والربط الهجين متعدد السحب",
        contentEn: "Building isolated private networks across cloud providers with high-speed dedicated links.",
        contentAr: "بناء شبكات افتراضية خاصة (VPC) عبر مزودي السحابة وربطها بروابط مخصصة فائقة السرعة.",
        keyPoints: [
          { en: "VPC (Virtual Private Cloud): Logically isolated virtual network with custom CIDR IP blocks, subnets, and route tables.", ar: "الشبكة الافتراضية الخاصة (VPC): شبكة معزولة داخل السحابة بنطاقات عناوين وتحكم كامل بالتوجيه." },
          { en: "Cloud Interconnect (AWS Direct Connect, Azure ExpressRoute): Dedicated private fiber links bypassing the public internet for SLA-guaranteed security and bandwidth.", ar: "روابط الاتصال المباشر (مثل Direct Connect و ExpressRoute): ألياف بصرية خاصة تتجاوز الإنترنت العام لضمان الموثوقية." },
          { en: "SD-WAN: Dynamically routes branch office traffic across multiple transport links (Broadband, 5G, MPLS) based on real-time quality.", ar: "شبكات SD-WAN: توجيه ذكي ديناميكي لبيانات الفروع عبر عدة روابط (إنترنت، 5G، MPLS) وفق جودة الخط." },
          { en: "SASE (Secure Access Service Edge): Unifies SD-WAN with cloud-delivered security services (Zero Trust, CASB, FWaaS, SWG) into a single cloud-native service.", ar: "تقنية SASE: تدمج تقنية SD-WAN مع جدران الحماية وخدمات الأمان كخدمة سحابية موحدة عند حافة الشبكة." }
        ]
      }
    ],
    exercises: [
      {
        q: "What does SASE (Secure Access Service Edge) converge?",
        qAr: "ما الذي تدمجه معمارية SASE (Secure Access Service Edge) معاً؟",
        options: [
          "Wide Area Networking (like SD-WAN) with comprehensive cloud-delivered security services (FWaaS, CASB, ZTNA)",
          "Monochrome printers with fax machines",
          "VGA monitors with copper telephone poles",
          "Battery chargers with audio speakers"
        ],
        correct: 0
      },
      {
        q: "What is the key benefit of dedicated cloud links like AWS Direct Connect or Azure ExpressRoute?",
        qAr: "ما هي الفائدة الأساسية للروابط السحابية المخصصة مثل AWS Direct Connect و Azure ExpressRoute؟",
        options: [
          "Private, consistent, high-bandwidth connection that completely bypasses the unpredictable public internet",
          "Free wireless charging for employee cellphones",
          "Automatic creation of company logos",
          "Bypassing all legal tax requirements"
        ],
        correct: 0
      },
      {
        q: "How does SD-WAN optimize application traffic across multiple WAN links?",
        qAr: "كيف تحسن شبكات SD-WAN حركة مرور التطبيقات عبر روابط WAN المتعددة؟",
        options: [
          "Dynamically steering packets based on real-time link latency, jitter, loss, and application priority",
          "Sending all packets through the slowest link intentionally",
          "Deleting 50% of packets randomly",
          "Converting all videos to black and white"
        ],
        correct: 0
      },
      {
        q: "In cloud networking, what is a Virtual Private Cloud (VPC)?",
        qAr: "في الشبكات السحابية، ما هي الشبكة الافتراضية الخاصة (VPC)؟",
        options: [
          "A logically isolated virtual network dedicated to a specific user or organization within a cloud provider",
          "A physical computer shipped to your home",
          "A satellite in orbit around the earth",
          "A public chatroom on the web"
        ],
        correct: 0
      }
    ]
  }
};
