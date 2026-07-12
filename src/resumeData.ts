import agentStackPreferencesImage from './assets/agent-stack-preferences.png';
import liveFlightRulesImage from './assets/liveflightrules-profile.png';

export type Link = {
  label: string;
  value: string;
  href?: string;
};

export type ArticleLink = {
  title: string;
  href: string;
};

export type PackageLink = {
  name: string;
  description: string;
  href: string;
};

export type ShowcaseLink = Link & {
  articles?: ArticleLink[];
  description?: string;
  image?: {
    src: string;
    alt: string;
  };
  packages?: PackageLink[];
};

export type SkillGroup = {
  title: string;
  items: string[];
};

export type Project = {
  name: string;
  description: string;
  contributions: string[];
};

export type Experience = {
  period: string;
  company: string;
  location: string;
  department: string;
  title: string;
  projects: Project[];
  highlights?: string[];
};

export type SummaryItem = {
  title: string;
  text: string;
};

export type Education = {
  period: string;
  school: string;
  degree: string;
  major: string;
  details: string[];
};

export type ResumeData = {
  name: string;
  profile: string[];
  target: string;
  contact: Link[];
  background: string[];
  languages: string[];
  summary: SummaryItem[];
  skills: SkillGroup[];
  experiences: Experience[];
  education: Education;
  other: ShowcaseLink[];
};

export const resume: ResumeData = {
  name: '黎思奇 · Dylan',
  profile: ['31岁', '9年工作经验', '离职状态', '中山大学本科(软件工程)', '优才获批'],
  target: 'Frontend Engineer (Web) / Fullstack Engineer',
  contact: [
    { label: '电话', value: '+86 17620754747', href: 'tel:+8617620754747' },
    { label: '邮箱', value: 'insidethe47s@gmail.com', href: 'mailto:insidethe47s@gmail.com' },
    { label: 'Github', value: 'github.com/Xooone47', href: 'https://github.com/Xooone47' },
  ],
  background: ['籍贯：广西'],
  languages: ['普通话', '粤语（母语级）', '英语（日常交流）'],
  summary: [
    {
      title: '专业背景',
      text: '软件工程专业，9年研发经验（百度、Shopee），资深前端工程师，有全栈经验（Web、H5、BFF），深耕前端工程化。',
    },
    {
      title: '复杂架构能力',
      text: 'TODO',
    },
    {
      title: '团队贡献',
      text: '长期担任前端组长，至多时虚线带5人，主导多个前端工时100~200人天的复杂需求落地；职责含项目管理、架构设计、方案把控等；担任面试官完成30+场面试。',
    },
    {
      title: 'AI应用',
      text: '离职后持续关注前沿技术，使用AI搭建股市量化项目及运营自媒体；自研agent技术栈管理工具等。',
    },
  ],
  skills: [
    {
      title: '前端',
      items: ['HTML', 'JS', 'TS', 'React', 'Vue', 'Webpack', 'Vite', 'H5', '微前端'],
    },
    {
      title: '后端',
      items: ['BFF', 'NodeJS', 'Golang', 'Chassis', 'SQL', 'Nginx', 'Apollo', 'Grpc'],
    },
    {
      title: '工程化',
      items: ['性能优化', '监控', 'Docker', 'K8S', 'CI/CD'],
    },
    {
      title: 'AI',
      items: ['Codex', 'Claude Code', 'MCP', 'Skills', 'RAG', 'Superpowers', 'Code graph'],
    },
  ],
  experiences: [
    {
      period: '2020.8 ~ 2026.1',
      company: 'Shopee',
      location: '深圳',
      department: '供应链部门',
      title: '高级研发工程师（前端/全栈）',
      projects: [
        {
          name: 'Shopee Management App',
          description:
            'Shopee供应链全场景管理应用，覆盖物流运营、仓储和站点管理、出入库、关键指标、员工管理等，面向8个国家的一线运营、仓库员工、区域管理、中高层等多角色使用。',
          contributions: [
            '主导搭建双端页面（H5+PC）+ BFF服务（Golang+Chassis），支持Web、Android、IOS三平台。',
            '设计H5/PC双端组件方案，一份代码双端可用，组件内部抹平差异，构建层隔离产物，节省100+人天工时。',
            '设计双端灰度版本功能，支持按region、user等多维度灰度发布，移动端离线包性能优化等。',
            'BFF服务实现流量分发与权限体系、对接6个后端服务、配置型CRUD数据管理、离线包版本管理与灰度、全流程监控日志等功能。',
          ],
        },
        {
          name: 'Assets Management System',
          description:
            'Shopee供应链资产管理系统，8国数千站点和仓库使用，覆盖资产采购、出入库、调拨、盘点等全流程管理。',
          contributions: [
            '主导在老项目vue+webpack技术栈基础上，自研向react+vite渐进式迁移方案，收敛部门技术栈，复用react组件和页面级实践，节省50+人天工时，项目上线后月均净资产损失约减少4.8%（数十万美金）。',
            '解决双技术栈共存的工程问题，包括JSX编译隔离、组件样式隔离、目录分层和边界限制、路由转换、状态通信等全套方案。',
          ],
        },
      ],
      highlights: ['主导跨3～4系统（100+人天）复杂需求落地、微前端项目架构迁移、vue > react 全项目重构（总工时400+人天）、时序图可视化平台搭建等。'],
    },
    {
      period: '2017.7 ~ 2020.5',
      company: '百度',
      location: '北京',
      department: '工程效能部',
      title: '高级研发工程师（前端）',
      projects: [
        {
          name: '百度基础架构工具和平台',
          description: '包括公司级代码、模型托管平台，CI/CD Pipeline平台，敏捷管理平台，图标库平台等。',
          contributions: [
            '有系统持续集成、云架构、构建打包优化、项目开发和管理流程、编码规范设计、性能监控等工程化能力相关的经验和思考，注重自身工程师素质建设。',
          ],
        },
      ],
    },
  ],
  education: {
    period: '2013 ~ 2017',
    school: '中山大学',
    degree: '本科',
    major: '软件工程专业',
    details: [
      '修读计算机相关课程，包括计算机原理、计算机网络、数据结构、操作系统、数据库、C/C++、python编程等。',
      '中国计算机协会CCF软件能力认证（成绩Top 15%）。',
      '曾作为交换生赴台湾中原大学交流。',
    ],
  },
  other: [
    {
      label: '掘金 | 10+文章',
      value: 'juejin.cn/user/3069492195765597/posts',
      href: 'https://juejin.cn/user/3069492195765597/posts',
      articles: [
        {
          title: '做了这个可视化工具，Coding Agent们终于懂我的技术栈偏好了',
          href: 'https://juejin.cn/post/7650754200507514914',
        },
        {
          title: '「前端数据流」发展简史',
          href: 'https://juejin.cn/post/7216147029230321701',
        },
        {
          title: '「前端数据流」理解RxJS',
          href: 'https://juejin.cn/post/7189575760191946810',
        },
        {
          title: '2021年的React状态管理',
          href: 'https://juejin.cn/post/7026232873233416223',
        },
        {
          title: '【Docker】镜像打造指南',
          href: 'https://juejin.cn/post/7003216070949650439',
        },
        {
          title: 'Yarn Workspace使用指南',
          href: 'https://juejin.cn/post/6974967455114362888',
        },
        {
          title: 'npm和yarn的lockfile杂谈',
          href: 'https://juejin.cn/post/6949896105597337631',
        },
        {
          title: '【Webpack进阶】less-loader、css-loader、style-loader实现原理',
          href: 'https://juejin.cn/post/6944668149849522213',
        },
        {
          title: '【Webpack进阶】Loader深入解析',
          href: 'https://juejin.cn/post/6944349196539396133',
        },
        {
          title: 'Vue调试技巧：在Devtool中一键打开组件源码',
          href: 'https://juejin.cn/post/6943571484409331719',
        },
      ],
    },
    {
      label: 'NPM | 5自研包',
      value: 'npmjs.com/~neverland7',
      href: 'https://www.npmjs.com/~neverland7',
      packages: [
        {
          name: 'eslint-rich-reporter',
          description: 'An eslint html reporter with several useful features.',
          href: 'https://www.npmjs.com/package/eslint-rich-reporter',
        },
        {
          name: 'eslint-plugin-dirs',
          description: 'Eslint Rules for ensure directory names and file names to be coincident.',
          href: 'https://www.npmjs.com/package/eslint-plugin-dirs',
        },
        {
          name: 'build-records-webpack-plugin',
          description:
            'A webpack plugin aiming to collect the build stats, including build type, build speed, build time, user information, add so on.',
          href: 'https://www.npmjs.com/package/build-records-webpack-plugin',
        },
        {
          name: 'eslint-plugin-import-limits',
          description: 'Limit the import statements.',
          href: 'https://www.npmjs.com/package/eslint-plugin-import-limits',
        },
        {
          name: 'vite-plugin-deadcodes',
          description: 'Vite plugin to detect unused files. JS, TS, React, Vue projects are supported.',
          href: 'https://www.npmjs.com/package/vite-plugin-deadcodes',
        },
      ],
    },
    {
      label: 'AI x 量化自媒体',
      value: '抖音号：LiveFlightRules',
      description:
        '使用AI基于Next、Python、Node Server、Pnpm MonoRepo等技术栈，搭建包含数据采集与分析、web可视化、量化信号提醒等功能的量化回测项目，并将生成视频口播、封面和插图，以及量化分析等流程沉淀成skill，提升生产效率。一个月涨粉1200+。',
      image: {
        src: liveFlightRulesImage,
        alt: 'LiveFlightRules 抖音主页截图',
      },
    },
    {
      label: '开源工具 | Agent Stack Preferences',
      value: 'github.com/Xooone47/agent-stack-preferences',
      href: 'https://github.com/Xooone47/agent-stack-preferences/tree/main',
      description:
        '面向AI Coding Agent的技术栈偏好管理工具，支持可视化配置Frontend、Backend、Others等偏好块，并将个人常用技术选择同步到Codex、Claude Code等agent instruction文件。工具提供预设值、字段校验和自定义包名输入，减少在不同项目中反复维护AGENTS.md/CLAUDE.md技术偏好的成本。',
      image: {
        src: agentStackPreferencesImage,
        alt: 'Agent Stack Preferences README 截图',
      },
    },
  ],
};
