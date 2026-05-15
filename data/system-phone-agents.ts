export type SystemPhoneAgent = {
  name: string;
  origin: "国内" | "国外";
  platform: string;
  sourceUrl: string;
  sourceLabel: string;
  productSummary: string;
  capabilityDescription: string[];
  technicalSolution: string[];
  strengths: string[];
  weaknesses: string[];
  pricing: string;
  commercialModel: string;
  activityEvidence: string;
  latestSignals: {
    date: string;
    title: string;
    source: string;
  }[];
};

export const systemPhoneAgents: SystemPhoneAgent[] = [
  {
    name: "豆包手机助手 / nubia M153",
    origin: "国内",
    platform: "中兴 nubia M153 工程样机；后续计划与手机厂商系统级合作",
    sourceUrl: "https://o.doubao.com/",
    sourceLabel: "豆包手机助手官网",
    productSummary: "豆包手机助手不是字节自研手机，而是豆包大模型和手机厂商在操作系统层面合作的 AI 助手。它的关键点是获得系统授权后，可以看屏幕、理解当前 App、跨应用执行任务。",
    capabilityDescription: ["跨 App 执行：例如比价、订票、收藏地点、整理信息等连续手机任务", "系统级唤醒：可通过语音、侧边键等入口调起，而不是只待在豆包 App 里", "人工授权边界：涉及支付、登录、隐私等敏感环节时，需要用户确认或手动完成"],
    technicalSolution: ["模型层：豆包大模型负责理解用户目标、屏幕内容和下一步动作", "系统层：需要手机厂商授权，把模型能力接到 OS 操作层", "执行层：在手机上完成打开 App、点击、输入、跳转、读取结果等动作"],
    strengths: ["最接近“系统级手机 GUI Agent”形态", "字节有大模型、内容生态和用户入口", "已经用工程样机验证了跨 App 执行心智"],
    weaknesses: ["目前仍是技术预览和工程样机，不是成熟大众机型", "微信等高风控 App 场景出现过异常反馈", "能否规模化取决于手机厂商合作和平台规则"],
    pricing: "工程样机 nubia M153 售价 3499 元；助手本身尚未公开独立收费。",
    commercialModel: "硬件试水 + 系统级能力合作。用户实际付费买的是 nubia M153 工程样机，豆包手机助手暂未作为独立 App 或 SaaS 单独收费；商业化关键在后续与手机厂商的系统级预装、硬件分成或生态合作。",
    activityEvidence: "2025-12 发布技术预览版，2026 年继续围绕 MWC 展示、首批售罄和正式版传闻发酵。",
    latestSignals:[
      { date: "2025-12-02", title: "首款豆包AI手机nubia M153售罄", source: "DoNews" },
      { date: "2026-05-08", title: "接棒谷歌、叫板苹果，OpenAI的AI手机要来了！", source: "新浪财经" }
    ]
  },
  {
    name: "荣耀 YOYO 智能体",
    origin: "国内",
    platform: "荣耀 MagicOS / Magic8 系列等荣耀手机",
    sourceUrl: "https://www.honor.com/cn/tech/honor-ai-phone/",
    sourceLabel: "荣耀 AI 手机官网",
    productSummary: "YOYO 是荣耀的终端级 AI 智能体。它不是第三方 App，而是嵌在 MagicOS 里的系统助手，目标是把用户一句话变成跨应用、跨系统资源调度的闭环操作。",
    capabilityDescription: ["自动执行手机任务：荣耀官方称 Magic8 系列支持 3000+ 场景自动执行", "多模态感知：可理解屏幕、相册、文档等个人上下文", "隐私安全认证：强调个人信息和用户权益保护能力"],
    technicalSolution: ["感知层：MagicGUI 多模态感知大模型理解界面和上下文", "规划层：YOYO 将用户目标拆成可执行步骤", "执行层：调用系统和应用能力完成打车、整理截图、汇总费用等任务"],
    strengths: ["系统权限和设备入口强", "官方明确提到 UI Agent 和通用场景自动执行", "隐私和安全包装比纯开发者工具成熟"],
    weaknesses: ["主要绑定荣耀生态", "第三方 App 深度执行仍受平台开放程度限制", "外部团队难以直接复用其系统权限"],
    pricing: "随荣耀手机和 MagicOS 提供，未见单独收费。",
    commercialModel: "硬件/系统卖点。YOYO 是荣耀 MagicOS 和荣耀终端的系统能力，不单独向用户订阅收费；它更像提升手机、PC 等硬件竞争力和生态粘性的入口。",
    activityEvidence: "2026-04 荣耀 YOYO 接入 DeepSeek-V4，并扩展到 YOYO Claw 终端侧智能体叙事。",
    latestSignals:[
      { date: "2026-05-12", title: "手机AI要变天了！荣耀YOYO率先接入Deepseek V4", source: "热点科技" },
      { date: "2026-04-30", title: "荣耀YOYO智能体携手蚂蚁阿福,健康服务一步直达", source: "新京报" },
      { date: "2026-04-17", title: "独家专访荣耀AI专家李向东：端侧AI方向未收敛，AI手机为最佳载体", source: "eu.36kr.com" },
      { date: "2025-10-16", title: "从工具到搭子：荣耀MagicOS 10+YOYO智能体定义自进化AI原生手机", source: "新浪财经客户端" }
    ]
  },
  {
    name: "小米超级小爱",
    origin: "国内",
    platform: "小米澎湃 OS / 小米手机 / 人车家全生态",
    sourceUrl: "https://xiaoai.mi.com/",
    sourceLabel: "小爱同学官网",
    productSummary: "超级小爱是小米把小爱同学升级成全生态 AI 助手后的形态。它的优势不只在手机，而在小米手机、车、家居设备和系统服务的联动。",
    capabilityDescription: ["一步直达：官方披露已支持 100 个常用应用、3000+ 一步直达能力", "全生态控制：能连接手机、车、家居设备和系统服务", "高频任务入口：覆盖订票、点餐、预约、设备控制等生活场景"],
    technicalSolution: ["OS 层：澎湃 OS 提供系统入口和场景模板", "生态层：小米账号、人车家设备和应用能力共同组成执行网络", "模型层：超级小爱负责理解意图并选择可直达的功能页或服务"],
    strengths: ["小米生态设备覆盖强", "用户活跃率高", "生活服务和 IoT 场景天然丰富"],
    weaknesses: ["更偏小米生态内体验", "泛化 GUI 操作能力公开信息不如豆包/荣耀明确", "对第三方复杂 App 的可控深度仍需观察"],
    pricing: "随小米设备和系统提供，未见单独收费。",
    commercialModel: "生态硬件增值。超级小爱随小米澎湃 OS、小米手机和人车家设备提供，不是独立收费产品；价值主要体现在提升设备体验、IoT 控制频次和小米生态留存。",
    activityEvidence: "2025-12 小米在合作伙伴大会披露超级小爱“一步直达”支持 100 个常用应用、3000+ 能力。",
    latestSignals:[
      { date: "2026-05-10", title: "小爱同学怎么接入deepseek-太平洋IT百科手机版", source: "新浪财经" },
      { date: "2026-05-06", title: "追剧不用碰遥控器 小米超级小爱新功能上线", source: "搜狐网" },
      { date: "2025-11-12", title: "AI天才少女罗福莉官宣加入小米，小米汽车与小爱同学或有大升级", source: "TOM科技" }
    ]
  },
  {
    name: "OPPO 小布助手",
    origin: "国内",
    platform: "ColorOS / OPPO、一加等机型",
    sourceUrl: "https://www.oppo.com/cn/discover/technology/oppo-ai/",
    sourceLabel: "OPPO AI 官网",
    productSummary: "小布助手是 OPPO 的系统级 AI 助手。它的路线不是先强调“接管手机”，而是把搜索、生成、报告、系统服务和端侧模型逐步放进 ColorOS。",
    capabilityDescription: ["深度执行：OPPO 在 2025 年上线小布深度执行，可自动规划并生成专业报告", "系统入口：覆盖手机助手、搜索、内容生成和系统服务", "用户规模：OPPO 官方披露小布助手月活接近 1.7 亿"],
    technicalSolution: ["模型层：安第斯大模型和端侧 MoE 能力支撑理解与生成", "系统层：ColorOS 给小布提供入口、权限和原生服务连接", "任务层：深度执行把用户目标拆成检索、整理、生成和输出"],
    strengths: ["用户规模大", "手机厂商系统权限强", "端侧模型和云端服务都有布局"],
    weaknesses: ["目前公开案例更偏报告生成和系统服务", "跨第三方 App 的真实点击执行能力公开证据有限", "普通用户难感知其与传统助手的差异边界"],
    pricing: "随 OPPO/一加设备和 ColorOS 提供，未见单独收费。",
    commercialModel: "系统能力 + 终端生态。小布作为 ColorOS 系统助手随 OPPO/一加设备提供，面向消费者未见独立订阅；商业价值在手机差异化、云端服务使用和端侧 AI 能力沉淀。",
    activityEvidence: "OPPO 官方 AI 页面显示 2025.8 小布月活近 1.7 亿，2025 年持续升级 AI 战略。",
    latestSignals:[
      { date: "2025-07-01", title: "手机上的免费Manus来了！OPPO小布助手发布深度执行功能，可一键生成专业报告", source: "品玩" },
      { date: "2025-07-26", title: "OPPO 亮相 2025 世界人工智能大会，刷新端侧AI 性能上限| OPPO 官方网站", source: "OPPO" },
      { date: "2026-05-13", title: "2026年手机系统AI功能横评：ColorOS 16领衔，谁才是最强AI交互与助手体验？", source: "搜狐网" },
      { date: "2026-05-13", title: "OPPO 新一代 ColorOS 16 正式版陆续开推，五月升级一览发布", source: "凤凰网科技" }
    ]
  },
  {
    name: "vivo 蓝心小 V",
    origin: "国内",
    platform: "OriginOS 5 / vivo 手机",
    sourceUrl: "https://www.vivo.com.cn/service/questions/all?categoryId=170&questionId=1746",
    sourceLabel: "vivo 官方功能页",
    productSummary: "蓝心小 V 是 vivo 的系统 AI 助手，依托蓝心大模型和 OriginOS。它更像一个系统级问答、创作、搜索和智能体入口，目前公开资料里“直接代用户操作 App”的证据少于豆包和荣耀。",
    capabilityDescription: ["深度思考和联网搜索：OriginOS 5 全系支持 DeepSeek-R1 最新版", "智能体入口：提供作业助手等智能体", "端侧能力：部分机型支持本地模式写作等端侧 AI 功能"],
    technicalSolution: ["模型层：蓝心大模型 + DeepSeek-R1 提供推理和问答能力", "系统层：OriginOS 提供电源键、语音、搜索框等入口", "应用层：通过智能体和系统服务完成写作、搜索、总结等任务"],
    strengths: ["覆盖 vivo 手机系统入口", "端侧和云端模型都在迭代", "适合作为国产手机 AI 助手用户心智样本"],
    weaknesses: ["公开信息更偏问答/创作/搜索，不是强 GUI 执行叙事", "跨 App 自动执行能力尚不清晰"],
    pricing: "随 vivo 设备和 OriginOS 提供，未见单独收费。",
    commercialModel: "系统预装能力。蓝心小 V 随 vivo / OriginOS 提供，消费者不单独付费；它更多承担系统 AI 入口、搜索/创作/问答和智能体能力展示。",
    activityEvidence: "2025-06 OriginOS 5 全系支持蓝心小 V 接入 DeepSeek-R1 最新版。",
    latestSignals:[
      { date: "2025-10-14", title: "vivo 智能助手「蓝心小 V」再升级，豆包大模型让 AI 原生体验拉满", source: "极客公园" },
      { date: "2025-10-11", title: "“隐形”科技，“放大”体验：vivo重新定义下一代操作系统", source: "DoNews" },
      { date: "2025-10-10", title: "“动态透彩”+本地AI，vivo OriginOS 6更新汇总：新锁屏、新动效", source: "爱搞机" }
    ]
  },
  {
    name: "华为小艺",
    origin: "国内",
    platform: "HarmonyOS / HarmonyOS NEXT / 华为终端生态",
    sourceUrl: "https://consumer.huawei.com/cn/mobileservices/celia/",
    sourceLabel: "华为小艺官网",
    productSummary: "小艺是华为在鸿蒙生态里的系统级智慧助手。它覆盖手机、平板、穿戴、车机等多终端，重点是鸿蒙原生智能、智能体广场和全场景服务。",
    capabilityDescription: ["智能体广场：HarmonyOS NEXT 小艺 App 接入 DeepSeek-R1 等智能体", "全场景设备协同：适配华为手机、平板、穿戴、车机等终端", "系统级交互：支持识屏、圈选、问答、创作和设备控制"],
    technicalSolution: ["模型层：盘古大模型与 DeepSeek 等外部智能体结合", "系统层：HarmonyOS 提供原生智能、元服务和设备互联能力", "生态层：通过鸿蒙原生应用和元服务扩大可调用范围"],
    strengths: ["鸿蒙生态和设备协同强", "系统级入口成熟", "用户规模和终端覆盖大"],
    weaknesses: ["公开资料偏智能体广场和系统服务，不等同于开放 GUI 点击执行", "第三方 App 执行边界受鸿蒙生态适配影响"],
    pricing: "随华为设备和 HarmonyOS 提供，未见单独收费。",
    commercialModel: "鸿蒙生态入口。小艺随华为设备、HarmonyOS 和鸿蒙服务提供，不单独按助手收费；商业价值主要来自设备生态、元服务分发和鸿蒙原生应用能力调用。",
    activityEvidence: "2024-10 HarmonyOS NEXT 发布，2025-02 小艺接入 DeepSeek-R1，2025-08 全新小艺众测升级。",
    latestSignals:[
      { date: "2026-04-20", title: "华为Pura双旗舰登场，首发HarmonyOS 6.1与伴随式AI", source: "新华网" },
      { date: "2026-05-14", title: "华为Pura X Max上手半个月 小艺伴随式AI真是把主动服务玩明白了", source: "驱动之家" },
      { date: "2026-05-13", title: "华为 MateBook 14 / Pro 笔记本推 HarmonyOS 6.1.0.117SP68 版本", source: "xw.qq.com" }
    ]
  },
  {
    name: "Google Gemini / Samsung Galaxy AI",
    origin: "国外",
    platform: "Android / Pixel / Samsung Galaxy S25 等 Android 设备",
    sourceUrl: "https://www.android.com/galaxy-gemini/",
    sourceLabel: "Android Gemini 官网",
    productSummary: "Gemini 正在变成 Android 默认 AI 助手的一部分。它可以通过 Utilities 控制部分手机功能，也能在 Galaxy S25 上做跨应用 seamless actions，但它更多依赖系统开放能力和 Google/Samsung 合作。",
    capabilityDescription: ["手机功能控制：可管理闹钟、计时器、打开 App、读写通知、控制媒体等", "跨应用动作：Galaxy S25 演示过搜索信息并发送消息等跨应用流程", "Google 生态连接：可连接 Search、YouTube、Maps、Gmail 等服务"],
    technicalSolution: ["助手层：Gemini 作为 Android 默认助手理解用户指令", "工具层：Utilities 和应用扩展暴露可调用动作", "生态层：Google 服务与 Samsung Galaxy AI 合作提供跨应用体验"],
    strengths: ["Android 生态入口强", "Google 服务连接丰富", "国际市场心智强"],
    weaknesses: ["对中国本地 App 场景帮助有限", "很多能力是 API/工具调用，不是通用屏幕点击", "权限和地区可用性差异大"],
    pricing: "基础随 Gemini/Android 使用；高级能力可能随 Google AI Pro/Ultra 或设备权益提供。",
    commercialModel: "免费基础入口 + 高级订阅/设备权益。基础 Gemini/Android 助手能力随系统和 Google 服务提供；更高模型、容量或高级 AI 功能可能归入 Google AI 订阅或设备权益。",
    activityEvidence: "Google 官方 Gemini Utilities 文档仍在维护，Samsung Galaxy AI 继续把 Gemini 作为跨应用动作入口。",
    latestSignals:[
      { date: "2026-05-13", title: "谷歌在安卓上全面强化Gemini AI；宇树发布全球首款载人机甲，售价390 万元；追觅高管回应「崩老头」", source: "极客公园" },
      { date: "2026-05-12", title: "谷歌将Gemini植入安卓底层：打造跨设备“智能系统”，苹果WWDC面临压力", source: "新浪财经客户端" },
      { date: "2026-05-15", title: "约 3.6GB：三星已向 Galaxy S26 系列手机推送首个 One UI 9 固件", source: "新浪财经" },
      { date: "2026-05-14", title: "焕新界面 AI升级 三星向更多Galaxy设备推送Samsung One UI 8.5更新", source: "中华网" }
    ]
  },
  {
    name: "Apple Intelligence / Siri App Intents",
    origin: "国外",
    platform: "iPhone / iPad / Mac；Apple Intelligence 与 App Intents",
    sourceUrl: "https://www.apple.com/apple-intelligence/",
    sourceLabel: "Apple Intelligence 官网",
    productSummary: "苹果的方向不是让 AI 随意点击屏幕，而是让 App 通过 App Intents 把可执行动作暴露给 Siri 和 Apple Intelligence。它更安全、更平台化，但泛化控制能力上线节奏较慢。",
    capabilityDescription: ["App 动作开放：开发者用 App Intents 把应用能力交给 Siri 调用", "个人上下文：Siri 未来会结合个人上下文、屏幕理解和应用动作", "跨端系统体验：能力会进入 Siri、Spotlight、快捷指令等系统入口"],
    technicalSolution: ["接口层：App Intents 定义应用可调用动作和内容实体", "智能层：Apple Intelligence 理解用户上下文和请求", "系统层：Siri 在系统体验中触发应用动作，而不是直接模拟点击"],
    strengths: ["隐私、安全和开发者接口体系强", "一旦落地会成为 iOS 侧强入口", "适合高可信系统级任务"],
    weaknesses: ["关键的个人上下文、屏幕感知和 in-app actions 仍标注为未来更新", "对无法适配 App Intents 的 App 不具备通用控制能力"],
    pricing: "随 Apple 设备和系统提供，未见单独收费。",
    commercialModel: "硬件/系统能力。Apple Intelligence 和 Siri 随兼容设备与系统提供，不单独按助手收费；App Intents 是开发者接入系统入口的技术框架，商业价值回到 iPhone/Mac 设备生态。",
    activityEvidence: "Apple Developer 文档仍标注个人上下文、屏幕感知和 in-app actions 为未来软件更新；2026 年仍面临 Siri 延期和诉讼压力。",
    latestSignals:[
      { date: "2025-08-12", title: "「有嘴就行！」明年的新 Siri 可以让你真正解放双手的使用 iPhone", source: "爱范儿" },
      { date: "2026-05-03", title: "继“液态玻璃”之后：苹果 iOS 27 将重心转向 AI，Siri 迎来独立 App 并将深度整合到相机应用中", source: "17173" }
    ]
  }
];
