// Human-Computer Interaction (HCI) Course Curriculum | مقرر تفاعل الإنسان والحاسب
// Prepared for Taif University | جامعة الطائف

export const hciCourseWeeks = {
  1: {
    titleEn: "Introduction to HCI",
    titleAr: "مقدمة في تفاعل الإنسان والحاسب",
    icon: "🖥️",
    video: {
      title: "What is Human-Computer Interaction (HCI)?",
      titleAr: "ما هو تفاعل الإنسان والحاسب؟",
      youtubeId: "vLnPwxZdW4Y",
      description: "Overview of HCI definition, goals of user experience (UX), and the relationship between humans, machines, and tasks."
    },
    content: [
      {
        type: "intro",
        titleEn: "Welcome to Human-Computer Interaction (HCI)!",
        titleAr: "مرحباً بك في مقرر تفاعل الإنسان والحاسب!",
        contentEn: "Human-Computer Interaction (HCI) is a multidisciplinary field of study focusing on the design of computer technology and, in particular, the interaction between humans (the users) and computers. It merges computer science, cognitive psychology, design, and human factors.",
        contentAr: "تفاعل الإنسان والحاسب (HCI) هو مجال دراسي متعدد التخصصات يركز على تصميم تقنيات الحاسب والتفاعل بين البشر وأجهزة الحاسب، ويجمع بين علوم الحاسب، علم النفس المعرفي، التصميم، والعوامل البشرية."
      },
      {
        type: "concept",
        titleEn: "Core Goals of HCI: Usability & User Experience (UX)",
        titleAr: "الأهداف الأساسية لـ HCI: قابلية الاستخدام وتجربة المستخدم",
        contentEn: "The primary objective of HCI is to develop systems that are usable, safe, effective, and enjoyable for people.",
        contentAr: "الهدف الرئيسي لـ HCI هو بناء وتطوير أنظمة سهلة الاستخدام، آمنة، فعالة وممتعة للمستخدمين.",
        keyPoints: [
          { en: "Effectiveness: How well users achieve their intended goals.", ar: "الفعالية: مدى نجاح المستخدمين في تحقيق أهدافهم بدقة." },
          { en: "Efficiency: The amount of effort and time required to accomplish a task.", ar: "الكفاءة: الوقت والجهد المبذول لإنجاز المهمة المطلوبة." },
          { en: "Safety: Protecting users from dangerous errors and catastrophic mistakes.", ar: "الأمان: حماية المستخدم من الوقوع في أخطاء كارثية وتوفير التراجع." },
          { en: "Learnability: How easy it is for first-time users to accomplish basic tasks.", ar: "سهولة التعلم: سرعة وسهولة إتقان النظام للمستخدم الجديد." }
        ]
      },
      {
        type: "concept",
        titleEn: "Evolution of User Interfaces",
        titleAr: "تطور واجهات المستخدم عبر الأجيال",
        contentEn: "Interfaces have evolved from text commands to graphical displays and natural interfaces.",
        contentAr: "تطورت الواجهات عبر عقود من شاشات الأوامر النصية إلى الواجهات الرسومية ثم الواجهات الطبيعية.",
        keyPoints: [
          { en: "CLI (Command Line Interface): Typed text commands (e.g., Terminal, Bash). Fast for experts, high learning curve.", ar: "واجهة سطر الأوامر (CLI): أوامر نصية سريعة للمحترفين ولكنها صعبة التعلم للمبتدئين." },
          { en: "GUI (Graphical User Interface): Windows, Icons, Menus, Pointer (WIMP). Intuitive visual interaction.", ar: "واجهة المستخدم الرسومية (GUI): النوافذ، الأيقونات، القوائم، والمؤشر (WIMP)." },
          { en: "NUI (Natural User Interface): Touchscreens, voice recognition, hand gestures, and eye tracking.", ar: "واجهات المستخدم الطبيعية (NUI): اللمس، الصوت، الإيماءات، وتتبع حركة العين." }
        ]
      }
    ],
    exercises: [
      {
        q: "What is the primary focus of Human-Computer Interaction (HCI)?",
        qAr: "ما هو التركيز الأساسي لمجال تفاعل الإنسان والحاسب (HCI)؟",
        options: [
          "Designing user-friendly and efficient interfaces between humans and computers",
          "Building computer hardware and microprocessors",
          "Writing assembly compiler instructions",
          "Managing computer network cables"
        ],
        correct: 0
      },
      {
        q: "Which dimension of usability measures how quickly a user can perform tasks once learned?",
        qAr: "أي أبعاد قابلية الاستخدام يقيس سرعة إنجاز المستخدم للمهام بعد تعلم النظام؟",
        options: ["Memorability", "Efficiency", "Aesthetics", "Licensing"],
        correct: 1
      },
      {
        q: "What does WIMP stand for in GUI history?",
        qAr: "إلى ماذا يرمز الاختصار الشهير WIMP في واجهات المستخدم الرسومية؟",
        options: [
          "Windows, Icons, Menus, Pointer",
          "Web, Internet, Mobile, Protocol",
          "Wireless, Input, Memory, Power",
          "Width, Image, Motion, Pixel"
        ],
        correct: 0
      }
    ]
  },
  2: {
    titleEn: "Human Factors & Cognition",
    titleAr: "العوامل البشرية والإدراك المعرفي",
    icon: "🧠",
    video: {
      title: "Human Cognition and Mental Models in HCI",
      titleAr: "الإدراك البشري والنماذج الذهنية في تفاعل الإنسان والحاسب",
      youtubeId: "vLnPwxZdW4Y",
      description: "How human sensory channels, memory limitations, and mental models dictate good software interface design."
    },
    content: [
      {
        type: "intro",
        titleEn: "The Human Component in HCI",
        titleAr: "العنصر البشري في تفاعل الإنسان والحاسب",
        contentEn: "To design great interfaces, designers must understand human capabilities and limitations: vision, hearing, physical motor skills, and mental cognitive processing.",
        contentAr: "لتصميم واجهات ناجحة، يجب فهم إمكانيات وحدود الإنسان: الرؤية، السمع، المهارات الحركية، ومعالجة الذاكرة والمعلومات في الدماغ."
      },
      {
        type: "concept",
        titleEn: "Human Memory & Miller's Law (7 ± 2)",
        titleAr: "الذاكرة البشرية وقاعدة ميلر (7 ± 2)",
        contentEn: "Human memory is divided into Sensory Memory, Working (Short-Term) Memory, and Long-Term Memory.",
        contentAr: "تنقسم الذاكرة البشرية إلى حسية، قصيرة الأجل (عاملة)، وطويلة الأجل.",
        keyPoints: [
          { en: "Short-Term Memory Capacity: Humans can hold approximately 7 ± 2 chunks of information at once.", ar: "سعة الذاكرة العاملة: يستطيع الإنسان الاحتفاظ بحوالي 7 ± 2 عناصر في وقت واحد." },
          { en: "Recognition over Recall: Interfaces should make options visible so users recognize rather than recall from memory.", ar: "التعرف بدلاً من الاستدعاء: يجب عرض الخيارات بصرياً حتى يتعرف عليها المستخدم ولا يضطر لتذكرها." },
          { en: "Chunking: Grouping related information (e.g. phone numbers 05X XXX XXXX) eases mental load.", ar: "تقسيم المعلومات (Chunking): تجميع العناصر في مجموعات يقلل العبء الذهني على المستخدم." }
        ]
      },
      {
        type: "concept",
        titleEn: "Gestalt Principles of Visual Perception",
        titleAr: "مبادئ الجشطلت (Gestalt) للإدراك البصري",
        contentEn: "Gestalt psychology explains how the human visual system groups individual elements into cohesive wholes.",
        contentAr: "توضح نظريات الجشطلت كيف يجمع العقل البشري العناصر الفردية تلقائياً لتكوين كليات مترابطة.",
        keyPoints: [
          { en: "Proximity: Objects placed close together are perceived as belonging to the same group.", ar: "التقارب (Proximity): العناصر القريبة من بعضها يُنظر إليها كمجموعة واحدة." },
          { en: "Similarity: Elements sharing color, shape, or size are seen as having the same function.", ar: "التشابه (Similarity): العناصر المتشابهة في اللون أو الشكل تبدو ذات وظيفة متماثلة." },
          { en: "Continuity: The eye naturally follows paths and aligned rows or columns.", ar: "الاستمرارية (Continuity): تفضل العين تتبع الخطوط والمسارات المنسابة." },
          { en: "Closure: The mind automatically completes incomplete visual shapes.", ar: "الإغلاق (Closure): يكمل العقل تلقائياً الفراغات في الأشكال غير المكتملة." }
        ]
      }
    ],
    exercises: [
      {
        q: "According to Miller's Law, how many chunks of information can working memory typically hold?",
        qAr: "وفقاً لقانون ميلر، كم عنصراً تقريبياً يمكن للذاكرة العاملة الاحتفاظ به في وقت واحد؟",
        options: ["7 ± 2 chunks", "25 to 30 chunks", "Unlimited chunks", "Only 1 chunk"],
        correct: 0
      },
      {
        q: "Which Gestalt principle states that items placed near each other are perceived as related?",
        qAr: "أي مبدأ من مبادئ الجشطلت ينص على أن العناصر القريبة من بعضها تُعتبر مترابطة؟",
        options: ["Law of Proximity", "Law of Contrast", "Law of Repetition", "Law of Gravity"],
        correct: 0
      },
      {
        q: "Why is 'Recognition over Recall' a vital HCI usability guideline?",
        qAr: "لماذا يعد مبدأ 'التعرف بدلاً من التذكر' قاعدة أساسية في تصميم الواجهات؟",
        options: [
          "Because recognizing visible cues requires far less cognitive effort than remembering from memory",
          "Because users prefer typing long text commands",
          "Because computers run out of RAM",
          "Because graphics load slower than text"
        ],
        correct: 0
      }
    ]
  },
  3: {
    titleEn: "Interaction Styles & Direct Manipulation",
    titleAr: "أساليب التفاعل والمعالجة المباشرة",
    icon: "🖱️",
    video: {
      title: "Direct Manipulation & Affordances in HCI",
      titleAr: "المعالجة المباشرة والخصائص الدلالية في التفاعل",
      youtubeId: "vLnPwxZdW4Y",
      description: "Exploring Don Norman's affordances, signifiers, feedback, and Ben Shneiderman's direct manipulation concepts."
    },
    content: [
      {
        type: "intro",
        titleEn: "How Users Communicate with Computers",
        titleAr: "كيف يتواصل المستخدم مع أجهزة الحاسب",
        contentEn: "An interaction style describes the dialogue mode between user and system: Command language, menus, form fill-in, direct manipulation, and conversational agents.",
        contentAr: "يحدد أسلوب التفاعل طريقة الحوار بين المستخدم والنظام: لغة الأوامر، القوائم، تعبئة النماذج، المعالجة المباشرة، والمساعدات الصوتية."
      },
      {
        type: "concept",
        titleEn: "Direct Manipulation (Ben Shneiderman)",
        titleAr: "المعالجة المباشرة (Direct Manipulation)",
        contentEn: "Users directly interact with visual objects on screen rather than issuing abstract commands.",
        contentAr: "يتفاعل المستخدم مباشرة مع العناصر المرئية على الشاشة بدلاً من كتابة أوامر مجردة.",
        keyPoints: [
          { en: "Continuous visual representation of the objects of interest (e.g. desktop files and folders).", ar: "التمثيل المرئي المستمر للعناصر المهمة (مثل الملفات والمجلدات)." },
          { en: "Physical actions or button presses instead of complex syntax (e.g. dragging a file to the Trash).", ar: "إجراءات حركية أو نقرات بدلاً من صياغات معقدة (مثل سحب ملف إلى سلة المهملات)." },
          { en: "Rapid, incremental, reversible operations whose impact on objects is immediately visible.", ar: "عمليات سريعة، تدريجية وقابلة للتراجع مع ظهور النتائج فورياً على الشاشة." }
        ]
      },
      {
        type: "concept",
        titleEn: "Norman's Fundamental Design Concepts",
        titleAr: "المفاهيم الأساسية للتصميم (دون نورمان)",
        contentEn: "Donald Norman, author of 'The Design of Everyday Things', defined the essential properties of interactive objects.",
        contentAr: "حدد دون نورمان في كتابه الشهير 'تصميم الأشياء اليومية' الركائز التي توضح للمستخدم كيفية استخدام الأشياء.",
        keyPoints: [
          { en: "Affordance: The actual properties of an object that indicate how it can be used (e.g. a chair affords sitting).", ar: "الإتاحة (Affordance): الخصائص الحقيقية للشيء التي تحدد إمكانية استخدامه (مثل الكرسي يتيح الجلوس)." },
          { en: "Signifier: Any perceivable indicator that tells people what action is possible (e.g. a 'PUSH' label on a door).", ar: "الدلالة (Signifier): إشارة مرئية تخبر المستخدم بالإجراء المتاح (مثل لافتة 'ادفع' على الباب)." },
          { en: "Feedback: Sending back information about what action has just been done (e.g. audio click or loading indicator).", ar: "التغذية الراجعة (Feedback): إشعار المستخدم فورياً بنتيجة الإجراء المتخذ." },
          { en: "Constraints: Limiting the set of possible actions to prevent errors.", ar: "القيود (Constraints): تقييد الخيارات غير الصالحة لمنع وقوع أخطاء." }
        ]
      }
    ],
    exercises: [
      {
        q: "Dragging a file into the recycle bin is an example of which interaction style?",
        qAr: "سحب ملف وإفلاته في سلة المحذوفات يمثل أي أسلوب من أساليب التفاعل؟",
        options: [
          "Direct Manipulation",
          "Command Line Interface",
          "Natural Language Query",
          "Batch Processing"
        ],
        correct: 0
      },
      {
        q: "What is a 'Signifier' according to Donald Norman?",
        qAr: "ما هو تعريف 'الدلالة' (Signifier) وفقاً لدون نورمان؟",
        options: [
          "A visual or audible signal showing where and how an action should take place",
          "A hardware bug in the processor",
          "A secret password encrypted in the database",
          "The legal trademark of a company"
        ],
        correct: 0
      },
      {
        q: "Why is 'Feedback' critical during user interaction?",
        qAr: "لماذا تعد التغذية الراجعة (Feedback) أمراً حاسماً أثناء تفاعل المستخدم؟",
        options: [
          "It reassures the user that their action was received and processed",
          "It increases the price of the software",
          "It forces the user to restart their device",
          "It hides errors from the user"
        ],
        correct: 0
      }
    ]
  },
  4: {
    titleEn: "Usability & Nielsen Heuristics",
    titleAr: "قابلية الاستخدام وقواعد نيلسن",
    icon: "📐",
    video: {
      title: "Jakob Nielsen's 10 Usability Heuristics",
      titleAr: "قواعد نيلسن العشر لقابلية الاستخدام",
      youtubeId: "vLnPwxZdW4Y",
      description: "Detailed study of Jakob Nielsen's universal 10 usability heuristics used to evaluate any modern web or mobile app."
    },
    content: [
      {
        type: "intro",
        titleEn: "What is Usability?",
        titleAr: "ما هي قابلية الاستخدام (Usability)؟",
        contentEn: "According to ISO 9241, usability is the extent to which a product can be used by specified users to achieve specified goals with effectiveness, efficiency, and satisfaction in a specified context of use.",
        contentAr: "وفقاً للمعيار الدولي ISO 9241، قابلية الاستخدام هي مدى قدرة مستخدمين محددين على تحقيق أهدافهم بفعالية وكفاءة ورضا في سياق استخدام محدد."
      },
      {
        type: "concept",
        titleEn: "Nielsen's 10 Usability Heuristics (Part 1)",
        titleAr: "قواعد نيلسن العشر لقابلية الاستخدام (الجزء الأول)",
        contentEn: "Jakob Nielsen created the most widely used rules of thumb for interface design.",
        contentAr: "وضع جاكوب نيلسن أشهر قواعد إرشادية عالمية لتقييم وتصميم الواجهات.",
        keyPoints: [
          { en: "#1 Visibility of system status: Always keep users informed through appropriate feedback within reasonable time.", ar: "1. وضوح حالة النظام: إبقاء المستخدم على علم بما يحدث عبر مؤشرات التقدم والتنبيهات." },
          { en: "#2 Match between system and real world: Speak the users' language with words, concepts familiar to them.", ar: "2. التوافق مع العالم الواقعي: التحدث بلغة المستخدم واستخدام مفاهيم وأيقونات مألوفة." },
          { en: "#3 User control and freedom: Provide clear 'emergency exits' such as Undo and Redo without extended dialogue.", ar: "3. تحكم وحرية المستخدم: توفير مخرج طوارئ واضح مثل زر التراجع (Undo) والإلغاء." },
          { en: "#4 Consistency and standards: Users should not have to wonder whether different words or actions mean the same thing.", ar: "4. الاتساق والمعايير: اتباع المعايير المعتمدة في التصميم وعدم تغيير المعاني." },
          { en: "#5 Error prevention: Eliminate error-prone conditions or check for them and present confirmation before commit.", ar: "5. الوقاية من الأخطاء: تصميم النظام لمنع حدوث الأخطاء مسبقاً قبل وقوعها." }
        ]
      },
      {
        type: "concept",
        titleEn: "Nielsen's 10 Usability Heuristics (Part 2)",
        titleAr: "قواعد نيلسن العشر لقابلية الاستخدام (الجزء الثاني)",
        contentEn: "The remaining five principles guide recognition, flexibility, aesthetics, recovery, and documentation.",
        contentAr: "المبادئ الخمسة المتبقية تركز على تقليل العبء المعرفي والمرونة والجمالية والتعافي من الأخطاء.",
        keyPoints: [
          { en: "#6 Recognition rather than recall: Minimize user memory load by making objects and actions visible.", ar: "6. التعرف بدلاً من الاستدعاء: جعل الخيارات مرئية لتقليل إجهاد الذاكرة." },
          { en: "#7 Flexibility and efficiency of use: Accelerators (keyboard shortcuts) that speed up the interaction for experts.", ar: "7. مرونة وكفاءة الاستخدام: اختصارات لوحة المفاتيح والخيارات المتقدمة للمحترفين." },
          { en: "#8 Aesthetic and minimalist design: Dialogues should not contain irrelevant or rarely needed information.", ar: "8. التصميم الجمالي والمبسط: إزالة الحشو البصري والتركيز على ما يهم المستخدم فقط." },
          { en: "#9 Help users recognize, diagnose, and recover from errors: Express error messages in plain language, indicating constructive solution.", ar: "9. المساعدة في معالجة الأخطاء: صياغة رسائل خطأ واضحة ومفيدة دون استخدام رموز مبهمة." },
          { en: "#10 Help and documentation: Provide easily searchable, concise help focused on user tasks.", ar: "10. المساعدة والتوثيق: توفير مساعدة يسهل البحث فيها ومرتبطة بمهام المستخدم." }
        ]
      }
    ],
    exercises: [
      {
        q: "A progress bar showing 'Uploading file 45%...' exemplifies which Nielsen heuristic?",
        qAr: "شريط تقدم يوضح 'جاري رفع الملف 45%...' يمثل أي قاعدة من قواعد نيلسن؟",
        options: [
          "Visibility of system status",
          "Aesthetic and minimalist design",
          "Flexibility and efficiency of use",
          "Help and documentation"
        ],
        correct: 0
      },
      {
        q: "Providing an 'Undo' button after deleting an email aligns with:",
        qAr: "توفير زر 'تراجع' (Undo) فور حذف بريد إلكتروني يتوافق مع:",
        options: [
          "User control and freedom",
          "Consistency and standards",
          "Error prevention",
          "Direct Memory Access"
        ],
        correct: 0
      },
      {
        q: "Showing a warning dialog before permanently formatting a disk is an example of:",
        qAr: "ظهور رسالة تأكيد تحذيرية قبل تهيئة القرص الصلب نهائياً يعد تطبيقاً لـ:",
        options: [
          "Error prevention",
          "Match between system and real world",
          "Flexibility of use",
          "Recognition over recall"
        ],
        correct: 0
      }
    ]
  },
  5: {
    titleEn: "User-Centered Design & Personas",
    titleAr: "التصميم المتمحور حول المستخدم وبناء الشخصيات",
    icon: "👥",
    video: {
      title: "User-Centered Design (UCD) Process & User Personas",
      titleAr: "عملية التصميم المتمحور حول المستخدم وبناء شخصيات المستخدمين",
      youtubeId: "vLnPwxZdW4Y",
      description: "How to apply UCD iterative cycles: Research, Requirements, Design, Prototyping, and Evaluation."
    },
    content: [
      {
        type: "intro",
        titleEn: "What is User-Centered Design (UCD)?",
        titleAr: "ما هو التصميم المتمحور حول المستخدم (UCD)؟",
        contentEn: "UCD is an iterative design process in which designers focus on the users and their needs in each phase of the design process. It emphasizes real user feedback over developer assumptions.",
        contentAr: "UCD هو نهج تكراري يضع المستخدمين واحتياجاتهم وسلوكياتهم في قلب كل مرحلة من مراحل التصميم والتطوير، بدلاً من الاعتماد على افتراضات المطورين."
      },
      {
        type: "concept",
        titleEn: "The 4 Main Stages of UCD",
        titleAr: "المراحل الأربع الأساسية لعملية UCD",
        contentEn: "The ISO standard for human-centred design specifies a continuous, iterative cycle.",
        contentAr: "تحدد معايير التصميم البشري دورة تكرارية مستمرة لتحسين المنتج.",
        keyPoints: [
          { en: "1. Understand Context of Use: Identify who will use the system, their goals, environment, and tasks.", ar: "1. فهم سياق الاستخدام: معرفة من هم المستخدمون وأهدافهم وبيئة استخدامهم." },
          { en: "2. Specify User Requirements: Determine technical and functional needs that must be satisfied.", ar: "2. تحديد متطلبات المستخدم: صياغة المتطلبات الوظيفية التي تحقق أهداف المستخدم." },
          { en: "3. Design Solutions: Develop wireframes, mockups, and prototypes from low to high fidelity.", ar: "3. تصميم الحلول: بناء المخططات الهيكلية والنماذج الأولية." },
          { en: "4. Evaluate Against Requirements: Usability testing with actual users to find defects and iterate.", ar: "4. التقييم وفق المتطلبات: اختبار قابلية الاستخدام مع مستخدمين حقيقيين والتحسين المستمر." }
        ]
      },
      {
        type: "concept",
        titleEn: "User Personas & Empathy Mapping",
        titleAr: "شخصيات المستخدمين (Personas) وخرائط التعاطف",
        contentEn: "A Persona is a fictional yet research-based archetype representing a key user segment.",
        contentAr: "الشخصية (Persona) هي نموذج خيالي مبني على أبحاث واقعية يمثل شريحة أساسية من مستخدمي النظام.",
        keyPoints: [
          { en: "Demographics & Background: Age, occupation, technical proficiency, and tools used.", ar: "البيانات الديموغرافية: العمر، الوظيفة، الخبرة التقنية، والأجهزة المستخدمة." },
          { en: "Goals & Motivations: What does this user want to accomplish using our application?", ar: "الأهداف والدوافع: ما الذي يريد هذا المستخدم تحقيقه من خلال التطبيق؟" },
          { en: "Frustrations & Pain Points: Obstacles, fears, and annoyances with existing tools.", ar: "نقاط الألم والإحباط: الصعوبات والمشاكل التي يعاني منها حالياً." }
        ]
      }
    ],
    exercises: [
      {
        q: "What is a 'Persona' in User-Centered Design?",
        qAr: "ما هو تعريف 'الشخصية' (Persona) في التصميم المتمحور حول المستخدم؟",
        options: [
          "A realistic fictional representation of a target user segment based on empirical research",
          "An AI agent that answers phone calls",
          "The legal name of the lead programmer",
          "An authentication avatar stored in the database"
        ],
        correct: 0
      },
      {
        q: "Why is UCD called an 'iterative' process?",
        qAr: "لماذا تُوصف عملية التصميم المتمحور حول المستخدم بأنها 'عملية تكرارية'؟",
        options: [
          "Because design solutions are continually tested and refined through repeated cycles",
          "Because it only happens once before programming starts",
          "Because code must be compiled in loops",
          "Because users repeat their login passwords"
        ],
        correct: 0
      },
      {
        q: "Which research method directly gathers qualitative insights by observing users in their real work context?",
        qAr: "أي أسلوب بحثي يجمع رؤى نوعية بمراقبة المستخدمين في بيئة عملهم الحقيقية؟",
        options: [
          "Contextual Inquiry / Observation",
          "Automated Server Stress Testing",
          "SQL Database Indexing",
          "Hardware Benchmarking"
        ],
        correct: 0
      }
    ]
  },
  6: {
    titleEn: "Prototyping & Wireframing",
    titleAr: "النماذج الأولية والتخطيط الهيكلي",
    icon: "📱",
    video: {
      title: "Low-Fi vs. High-Fi Prototyping in HCI",
      titleAr: "النماذج منخفضة وعالية الدقة في تفاعل الإنسان والحاسب",
      youtubeId: "vLnPwxZdW4Y",
      description: "How paper sketches, wireframes, and interactive clickable prototypes allow rapid experimentation and defect discovery."
    },
    content: [
      {
        type: "intro",
        titleEn: "Why We Build Prototypes",
        titleAr: "لماذا نبني النماذج الأولية (Prototypes)؟",
        contentEn: "A prototype is an early, experimental model of a software application used to test concepts, validate interactions, and obtain feedback before writing production code. 'Fail early and fail cheaply.'",
        contentAr: "النموذج الأولي هو نسخة تجريبية مبكرة تتيح اختبار المفاهيم وتفاعل المستخدمين واكتشاف الأخطاء مبكراً بأقل تكلفة وجهد قبل كتابة الكود البرمجي الفعلي."
      },
      {
        type: "concept",
        titleEn: "Fidelity Levels: Low-Fidelity vs. High-Fidelity",
        titleAr: "مستويات الدقة: نماذج منخفضة الدقة مقابل عالية الدقة",
        contentEn: "Prototypes vary widely in their degree of visual and functional realism.",
        contentAr: "تتنوع النماذج الأولية في درجة واقعيتها البصرية والوظيفية.",
        keyPoints: [
          { en: "Low-Fidelity (Lo-Fi): Paper sketches, index cards, rough black-and-white wireframes. Quick to make, cheap to throw away, encourages honest critical feedback.", ar: "منخفضة الدقة (Lo-Fi): رسومات ورقية وتخطيطات سريعة بالأبيض والأسود. سريعة، منخفضة التكلفة، وتشجع المستخدم على إبداء النقد الصريح." },
          { en: "High-Fidelity (Hi-Fi): Polished interactive mockups (e.g. in Figma) with realistic colors, fonts, and transitions. Looks like the real product, ideal for usability testing.", ar: "عالية الدقة (Hi-Fi): تصاميم تفاعلية متقنة تحاكي المنتج النهائي تماماً بالألوان والخطوط والأزرار الحية." },
          { en: "Wireframe: A blueprint illustrating page structure, layout, content hierarchy, and functionality without color or graphics.", ar: "المخطط الهيكلي (Wireframe): مخطط يوضح هيكل وتوزيع العناصر والوظائف بالصفحة دون التركيز على الألوان والزخارف." }
        ]
      },
      {
        type: "concept",
        titleEn: "Wizard of Oz & Storyboarding Techniques",
        titleAr: "أساليب المحاكاة: ساحر أوز والقصص المصورة",
        contentEn: "Clever prototyping techniques simulate advanced systems before implementing them.",
        contentAr: "طرق ذكية لاختبار الأنظمة المتقدمة (كالذكاء الاصطناعي) قبل برمجتها فعلياً.",
        keyPoints: [
          { en: "Wizard of Oz: A human simulates backend AI or automated intelligence behind the scenes while the user believes the system is autonomous.", ar: "ساحر أوز (Wizard of Oz): شخص خفي يقوم بتشغيل المنطق واستجابة النظام بينما يظن المستخدم أن النظام يعمل آلياً بالذكاء الاصطناعي." },
          { en: "Storyboarding: A comic-strip series of visual scenes showing the user journey and interaction context.", ar: "القصة المصورة (Storyboarding): تسلسل مشاهد مرئية يوضح رحلة وسياق استخدام التطبيق في مواقف الحياة اليومية." }
        ]
      }
    ],
    exercises: [
      {
        q: "What is the primary advantage of Low-Fidelity paper prototyping?",
        qAr: "ما هي الميزة الأساسية للنماذج الأولية الورقية منخفضة الدقة؟",
        options: [
          "It is very fast and inexpensive to create and modify early in the project",
          "It runs directly on iOS and Android devices",
          "It connects directly to a live PostgreSQL database",
          "It automatically fixes compiler errors"
        ],
        correct: 0
      },
      {
        q: "In a 'Wizard of Oz' testing methodology, who performs the simulated system actions?",
        qAr: "في تجربة 'ساحر أوز' (Wizard of Oz)، من الذي ينفذ الإجراءات والردود آلياً؟",
        options: [
          "A human operator behind the scenes hidden from the user",
          "A quantum computer running neural networks",
          "The user themselves unconsciously",
          "A pre-compiled robotic machine"
        ],
        correct: 0
      },
      {
        q: "What is the purpose of a Wireframe?",
        qAr: "ما هو الهدف الأساسي من المخطط الهيكلي (Wireframe)؟",
        options: [
          "To outline page layout, content placement, and structural hierarchy without visual distractions",
          "To test database query execution latency",
          "To produce the final marketing video",
          "To configure SSL certificates"
        ],
        correct: 0
      }
    ]
  },
  7: {
    titleEn: "Visual Design & UI Layouts",
    titleAr: "التصميم المرئي وتخطيط الواجهات",
    icon: "🎨",
    video: {
      title: "Visual Hierarchy, Fitts's Law, and UI Layouts",
      titleAr: "التسلسل الهرمي البصري، قانون فيتس، وتخطيط الواجهات",
      youtubeId: "vLnPwxZdW4Y",
      description: "Principles of visual contrast, color harmony, typography scales, Fitts's Law, and responsive layout grids."
    },
    content: [
      {
        type: "intro",
        titleEn: "The Role of Visual Design in HCI",
        titleAr: "أهمية التصميم المرئي في تفاعل الإنسان والحاسب",
        contentEn: "Visual design is not merely decoration; it directs the user's attention, conveys information priority, establishes brand credibility, and enhances emotional satisfaction.",
        contentAr: "التصميم المرئي ليس مجرد تجميل، بل يوجه انتباه المستخدم، ويوضح أولويات المعلومات، ويعزز الثقة وسهولة القراءة."
      },
      {
        type: "concept",
        titleEn: "Fitts's Law & Hick's Law",
        titleAr: "قانون فيتس وقانون هيك في تجربة المستخدم",
        contentEn: "Two mathematical laws that govern user speed and decision-making.",
        contentAr: "قانونان علميان يحكمان سرعة المستخدم واتخاذه للقرارات على الواجهة.",
        keyPoints: [
          { en: "Fitts's Law: The time required to rapidly move to a target area is a function of the ratio between the distance to the target and the width of the target (T = a + b * log2(2D/W)).", ar: "قانون فيتس (Fitts's Law): الوقت اللازم للوصول لهدف يعتمد على المسافة وحجم الهدف (الأزرار الأكبر والأقرب تُنقر أسرع)." },
          { en: "Hick's Law: The time it takes to make a decision increases logarithmically with the number and complexity of choices.", ar: "قانون هيك (Hick's Law): يزداد وقت اتخاذ القرار كلما زاد عدد الخيارات المعروضة أمام المستخدم." },
          { en: "Prime Screen Real Estate: Screen edges and corners are easiest to hit because the cursor cannot overshoot.", ar: "حواف وزوايا الشاشة: أسهل الأماكن للنقر بالمؤشر لأن حركة الفأرة تتوقف عند الحافة." }
        ]
      },
      {
        type: "concept",
        titleEn: "Visual Hierarchy & Typography",
        titleAr: "التسلسل الهرمي البصري والطباعة",
        contentEn: "Structuring screen elements so users instinctively scan content effortlessly.",
        contentAr: "تنظيم محتوى الشاشة بطريقة تسمح للمستخدم بالمسح البصري السريع دون إجهاد.",
        keyPoints: [
          { en: "Size & Weight: Larger and bolder elements instantly signal higher importance.", ar: "الحجم وسماكة الخط: العناصر الأكبر والأكثر سماكة تجذب الانتباه أولاً." },
          { en: "Contrast: High contrast between text and background ensures effortless legibility.", ar: "التباين: التباين الكافي بين النصوص والخلفية يضمن راحة القراءة." },
          { en: "White Space (Negative Space): Breathing room around elements reduces visual clutter and increases focus.", ar: "المساحات البيضاء (Negative Space): تمنح التصميم مساحة للتنفس وتقلل الازدحام البصري." }
        ]
      }
    ],
    exercises: [
      {
        q: "According to Fitts's Law, how can you make an important call-to-action button easier to click?",
        qAr: "وفقاً لقانون فيتس (Fitts's Law)، كيف تجعل زر الإجراء الأساسي أسهل في النقر؟",
        options: [
          "Make the button larger and locate it closer to the user's current pointer/touch area",
          "Make the button tiny and hide it inside a sub-menu",
          "Add animated rotating 3D shadows around it",
          "Make it transparent without borders"
        ],
        correct: 0
      },
      {
        q: "What does Hick's Law predict about user decision time?",
        qAr: "ما الذي يتوقعه قانون هيك (Hick's Law) بشأن وقت اتخاذ القرار لدى المستخدم؟",
        options: [
          "Decision time increases as the number of choices increases",
          "Decision time is always constant at 1 second",
          "Users make decisions faster when given 100 options",
          "Screen brightness dictates decision time"
        ],
        correct: 0
      },
      {
        q: "What is the primary role of White Space (Negative Space) in UI design?",
        qAr: "ما هو الدور الرئيسي للمساحات البيضاء (Negative Space) في تصميم الواجهات؟",
        options: [
          "It reduces visual clutter, groups related elements, and focuses user attention",
          "It saves ink when printing web pages",
          "It lowers server hosting costs",
          "It indicates that the page failed to load"
        ],
        correct: 0
      }
    ]
  },
  8: {
    titleEn: "Usability Testing & Evaluation",
    titleAr: "اختبار قابلية الاستخدام وطرق التقييم",
    icon: "🧪",
    video: {
      title: "How to Run a Usability Test and Think-Aloud Protocol",
      titleAr: "كيفية إجراء اختبار قابلية الاستخدام وبروتوكول التفكير بصوت عالٍ",
      youtubeId: "vLnPwxZdW4Y",
      description: "Learn how to recruit users, write task scenarios, conduct Think-Aloud testing sessions, and measure System Usability Scale (SUS)."
    },
    content: [
      {
        type: "intro",
        titleEn: "Evaluating User Interfaces",
        titleAr: "تقييم واجهات المستخدم",
        contentEn: "Evaluation is the crucial phase where interfaces are tested with real representative users to discover usability problems, measure performance metrics, and validate whether design goals were met.",
        contentAr: "التقييم هو المرحلة التي يتم فيها فحص الواجهة مع مستخدمين حقيقيين لاكتشاف عيوب الاستخدام، وقياس الكفاءة، والتحقق من تحقيق أهداف النظام."
      },
      {
        type: "concept",
        titleEn: "The 'Think-Aloud' Protocol",
        titleAr: "بروتوكول التفكير بصوت عالٍ (Think-Aloud)",
        contentEn: "The single most valuable qualitative usability testing technique in HCI.",
        contentAr: "أهم تقنية نوعية مستخدمة في اختبارات قابلية الاستخدام حول العالم.",
        keyPoints: [
          { en: "Participants verbalize their thoughts, expectations, confusions, and feelings while performing specific tasks.", ar: "يتحدث المستخدم بصوت مسموع عما يفكر فيه، يتوقعه، أو يشعر بالإرباك منه أثناء أداء المهام." },
          { en: "Reveals WHY users make mistakes and what their mental model expects.", ar: "يكشف أسباب وقوع المستخدم في الخطأ والنموذج الذهني الذي كان يتوقعه." },
          { en: "Observer role: Listen silently without guiding, coaching, or defending the design.", ar: "دور الملاحظ: الاستماع والتدوين دون توجيه أو مساعدة المستخدم أو الدفاع عن التصميم." }
        ]
      },
      {
        type: "concept",
        titleEn: "Quantitative Usability Metrics & SUS",
        titleAr: "المقاييس الكمية ومقياس قابلية استخدام النظام (SUS)",
        contentEn: "Measuring usability objectively using numbers and standardized surveys.",
        contentAr: "قياس قابلية الاستخدام بأرقام ومعايير استبيانية موحدة وموثوقة.",
        keyPoints: [
          { en: "Task Completion Rate: Percentage of users who successfully complete a scenario task without assistance.", ar: "معدل إنجاز المهام: نسبة المستخدمين الذين أكملوا المهمة بنجاح دون مساعدة." },
          { en: "Time on Task: How long it takes a participant to finish a workflow.", ar: "الوقت المستغرق: المدة الزمنية لإتمام المهمة." },
          { en: "System Usability Scale (SUS): A 10-item survey yielding a score from 0 to 100. Average benchmark is 68.", ar: "مقياس SUS: استبيان عالمي من 10 أسئلة يحسب درجة من 0 إلى 100، ومتوسط المعدل المقبول عالمياً هو 68." }
        ]
      }
    ],
    exercises: [
      {
        q: "What is the core rule for the facilitator during a 'Think-Aloud' usability test?",
        qAr: "ما هي القاعدة الذهبية للمشرف أثناء جلسة اختبار التفكير بصوت عالٍ (Think-Aloud)؟",
        options: [
          "Observe and listen neutrally without guiding the user or justifying the design",
          "Constantly tell the user which button to click next",
          "Argue with the user if they make a mistake",
          "Click the mouse for the user to save time"
        ],
        correct: 0
      },
      {
        q: "What is considered the average benchmark score on the System Usability Scale (SUS)?",
        qAr: "ما هي الدرجة التي تُعتبر المتوسط المعياري المقبول عالمياً في مقياس SUS؟",
        options: ["Approximately 68", "Exactly 100", "Zero", "50% failure mark"],
        correct: 0
      },
      {
        q: "How many test participants are typically sufficient to uncover ~85% of usability issues (Nielsen rule)?",
        qAr: "كم عدد المستخدمين الكافي عادةً لاكتشاف نحو 85% من مشاكل قابلية الاستخدام وفق قاعدة نيلسن؟",
        options: ["5 participants", "1,000 participants", "At least 500 participants", "Only the designer"],
        correct: 0
      }
    ]
  },
  9: {
    titleEn: "Accessibility (a11y) & Inclusivity",
    titleAr: "إمكانية الوصول والتصميم الشامل",
    icon: "♿",
    video: {
      title: "Web Accessibility (WCAG) and Universal Design in HCI",
      titleAr: "إمكانية الوصول الرقمي ومعايير WCAG والتصميم الشامل",
      youtubeId: "vLnPwxZdW4Y",
      description: "Designing for all abilities: Visual impairments, screen readers, keyboard navigation, color contrast, and cognitive considerations."
    },
    content: [
      {
        type: "intro",
        titleEn: "Designing for Every Human (a11y)",
        titleAr: "التصميم الشامل لجميع فئات المجتمع",
        contentEn: "Digital accessibility ensures that websites, tools, and technologies are designed and developed so that people with disabilities can use them equally.",
        contentAr: "إمكانية الوصول (Accessibility أو a11y) تضمن تصميم وتطوير البرمجيات بحيث يستطيع ذوو الإعاقة وكبار السن استخدامها والتفاعل معها بسهولة واستقلالية."
      },
      {
        type: "concept",
        titleEn: "The 4 Core Principles of WCAG (POUR)",
        titleAr: "المبادئ الأربعة لمعايير سهولة الوصول (POUR)",
        contentEn: "The Web Content Accessibility Guidelines (WCAG) are organized under four core pillars.",
        contentAr: "ترتكز المعايير الدولية WCAG على أربعة محاور رئيسية (POUR).",
        keyPoints: [
          { en: "Perceivable: Information and UI components must be presentable to users in ways they can perceive (e.g. alt text for images, transcripts for audio).", ar: "قابل للإدراك (Perceivable): تقديم المحتوى بطرق تناسب حواس المستخدم (نصوص بديلة للصور، تفريغ صوتي للفيديو)." },
          { en: "Operable: UI components and navigation must be operable (e.g. full keyboard accessibility, sufficient time to read).", ar: "قابل للتشغيل (Operable): إمكانية التحكم الكامل بواسطة لوحة المفاتيح دون الحاجة الإجبارية للفأرة." },
          { en: "Understandable: Information and operation of the interface must be clear, predictable, and simple to comprehend.", ar: "مفهوم (Understandable): سهولة فهم النصوص والتعليمات وتوقع سلوك الواجهة." },
          { en: "Robust: Content must be robust enough to be interpreted reliably by assistive technologies like screen readers.", ar: "متين (Robust): توافق الكود مع قارئات الشاشة والتقنيات المساعدة المختلفة." }
        ]
      },
      {
        type: "concept",
        titleEn: "Key Accessibility Implementations",
        titleAr: "أهم التطبيقات العملية لإمكانية الوصول",
        contentEn: "Practical standards every developer and designer must apply.",
        contentAr: "معايير تطبيقية إلزامية يجب مراعاتها في أي تطبيق برمجي.",
        keyPoints: [
          { en: "Color Contrast: Minimum contrast ratio of 4.5:1 for normal body text against background (WCAG AA).", ar: "تباين الألوان: نسبة تباين لا تقل عن 4.5:1 للنصوص العادية مع الخلفية وفق معيار WCAG AA." },
          { en: "Never Rely on Color Alone: Convey errors and status with icons and text labels in addition to colors.", ar: "عدم الاعتماد على الألوان وحدها: دعم حالات التنبيه والأخطاء بأيقونات ونصوص واضحة لمراعاة المصابين بعمى الألوان." },
          { en: "Screen Reader Support: Semantic HTML tags (button, nav, main) and ARIA attributes.", ar: "دعم قارئات الشاشة: استخدام وسوم HTML الدلالية الصحيحة لكي يقرأها برامج المكفوفين بوضوح." }
        ]
      }
    ],
    exercises: [
      {
        q: "What does the 'P' stand for in the WCAG POUR accessibility principles?",
        qAr: "إلى ماذا يرمز حرف P في مبادئ الوصول الدولية POUR؟",
        options: ["Perceivable", "Programmable", "Portable", "Proprietary"],
        correct: 0
      },
      {
        q: "What is the minimum color contrast ratio required by WCAG AA for normal body text?",
        qAr: "ما هو الحد الأدنى لنسبة تباين الألوان المطلوبة في معيار WCAG AA للنصوص العادية؟",
        options: ["4.5:1", "1:1", "100:1", "2:1"],
        correct: 0
      },
      {
        q: "Why should an interface NEVER rely on color alone to indicate an error?",
        qAr: "لماذا يجب عدم الاعتماد على اللون وحده لتوضيح حالة الخطأ في النظام؟",
        options: [
          "Users with color blindness will not perceive the color distinction; text/icons are required",
          "Color pixels consume more battery power",
          "Web servers cannot transmit color values",
          "Search engines penalize red text"
        ],
        correct: 0
      }
    ]
  },
  10: {
    titleEn: "Emerging HCI & AI Interfaces",
    titleAr: "واجهات التفاعل الذكية ومستقبل HCI",
    icon: "🤖",
    video: {
      title: "The Future of Human-Computer Interaction: AI & Beyond",
      titleAr: "مستقبل تفاعل الإنسان والحاسب: الذكاء الاصطناعي وما بعده",
      youtubeId: "vLnPwxZdW4Y",
      description: "Exploration of Conversational AI, Voice interfaces (VUI), Augmented & Virtual Reality (AR/VR), and Ethical HCI."
    },
    content: [
      {
        type: "intro",
        titleEn: "The Post-Screen Era in HCI",
        titleAr: "عصر ما بعد الشاشات في تفاعل الإنسان والحاسب",
        contentEn: "Interaction is transcending keyboards, mice, and glass touchscreens into natural conversations with Artificial Intelligence, spatial computing, wearable sensors, and immersive environments.",
        contentAr: "يتجاوز التفاعل اليوم لوحات المفاتيح والشاشات الزجاجية نحو المحادثات الطبيعية مع نماذج الذكاء الاصطناعي، الحوسبة المكانية، والحواسيب الملبوسة."
      },
      {
        type: "concept",
        titleEn: "Conversational AI & Voice User Interfaces (VUI)",
        titleAr: "واجهات التفاعل الصوتي (VUI) والذكاء الاصطناعي التوليدي",
        contentEn: "Interacting through natural human language rather than buttons and menus.",
        contentAr: "التفاعل باستخدام اللغة البشرية الطبيعية بدلاً من القوائم والأزرار التقليدية.",
        keyPoints: [
          { en: "Transient Nature of Audio: Sound disappears immediately, requiring concise prompts and clear auditory cues.", ar: "الطبيعة العابرة للصوت: الرسائل الصوتية تتلاشى فور سماعها، مما يتطلب إيجازاً وتأكيداً مستمراً." },
          { en: "Intent & Entity Recognition: LLMs and NLP parse user phrasing variations to extract underlying goals.", ar: "استخراج المقاصد والكيانات: فهم مقصود المستخدم مهما اختلفت صياغة الكلمات." },
          { en: "Graceful Fallbacks: When the system does not understand, offering helpful repair strategies.", ar: "التعافي اللبق: تقديم اقتراحات بديلة واضحة عندما يعجز النظام عن فهم الأمر." }
        ]
      },
      {
        type: "concept",
        titleEn: "Spatial Computing (AR/VR) & Ethical HCI",
        titleAr: "الحوسبة المكانية (AR/VR) وأخلاقيات التصميم",
        contentEn: "Merging the digital realm into physical 3D space, and protecting users against deceptive designs.",
        contentAr: "دمج العالم الرقمي في الفضاء ثلاثي الأبعاد وحماية المستخدمين من أساليب التضليل.",
        keyPoints: [
          { en: "Spatial Awareness & Gesture Tracking: Interacting naturally with pinch gestures, eye gaze, and spatial audio.", ar: "الإدراك المكاني وتتبع الإيماءات: التفاعل عبر حركة الأصابع، نظرات العين، والصوت المحيطي ثلاثي الأبعاد." },
          { en: "Cybersickness Prevention: Maintaining high frame rates (90fps+) and matching visual motion to vestibular balance.", ar: "تجنب دوار الحركة: الحفاظ على سلاسة الإطارات ومطابقة الحركة البصرية مع التوازن الداخلي للأذن." },
          { en: "Dark Patterns: Deceptive UI designs created to trick users into unintended actions (e.g. hidden recurring subscriptions). Ethical HCI mandates human-centered transparency.", ar: "الأنماط المظلمة (Dark Patterns): واجهات مخادعة تجبر المستخدم على إجراءات لا يريدها، ويحاربها علم HCI لتعزيز النزاهة والشفافية." }
        ]
      }
    ],
    exercises: [
      {
        q: "What is a 'Dark Pattern' in user interface design?",
        qAr: "ما هو تعريف 'النمط المظلم' (Dark Pattern) في تصميم الواجهات؟",
        options: [
          "A deceptive UI pattern deliberately designed to manipulate or trick users into unintended actions",
          "Enabling dark mode on an operating system",
          "A computer monitor displaying only black pixels",
          "A cyber security firewall rule"
        ],
        correct: 0
      },
      {
        q: "Why do Voice User Interfaces (VUI) require extra concise prompts compared to graphical interfaces?",
        qAr: "لماذا تتطلب واجهات التفاعل الصوتي إيجازاً شديداً مقارنة بالواجهات الرسومية؟",
        options: [
          "Because speech is transient and places heavy demands on the user's auditory working memory",
          "Because microphone hardware fails if text exceeds 10 words",
          "Because AI models cannot speak long sentences",
          "Because internet cables only allow short voice packets"
        ],
        correct: 0
      },
      {
        q: "Which emerging interaction modality combines physical eye gaze and micro-finger pinches for input?",
        qAr: "أي أسلوب تفاعل حديث يجمع بين تتبع نظرة العين ونقرة الأصابع الدقيقة؟",
        options: [
          "Spatial Computing / AR Headsets (e.g. Apple Vision Pro)",
          "Punch Card Mainframes",
          "Analog Rotary Telephones",
          "Text Command Line Terminals"
        ],
        correct: 0
      }
    ]
  }
};
