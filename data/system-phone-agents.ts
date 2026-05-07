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
  activityEvidence: string;
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
    activityEvidence: "2025-12 发布技术预览版，M153 软件承诺至 2026 Q1 末约每两周更新一次。"
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
    activityEvidence: "荣耀 2025-09 发布 YOYO 安全认证新闻，2025-10 Magic8 系列发布时继续强化 YOYO Agent。"
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
    activityEvidence: "2025-12 小米披露超级小爱一步直达支持 100 个应用、3000+ 能力。"
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
    activityEvidence: "OPPO 官方 AI 页面显示 2025.8 小布月活近 1.7 亿，2025 年持续升级 AI 战略。"
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
    activityEvidence: "2025-06 OriginOS 5 全系支持蓝心小 V 接入 DeepSeek-R1 最新版。"
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
    activityEvidence: "2024-10 HarmonyOS NEXT 发布，2025-02 小艺接入 DeepSeek-R1，2025-08 全新小艺众测升级。"
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
    activityEvidence: "Google 官方 Gemini Utilities 文档仍在维护，Samsung 2025 年公开 Galaxy S25 跨应用操作教程。"
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
    activityEvidence: "Apple Developer 文档仍在维护，App Intents / Siri 与 Apple Intelligence 集成是 WWDC24 后持续推进方向。"
  }
];
