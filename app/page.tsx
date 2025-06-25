import type React from "react"
import Image from "next/image"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Layers, Users, Briefcase, GraduationCap, Phone } from "lucide-react"

// Helper component for section titles
const SectionTitle = ({ children, className }: { children: React.ReactNode; className?: string }) => (
  <div className={`text-center mb-12 ${className}`}>
    <h2 className="text-3xl font-bold text-brand-near-black">{children}</h2>
    <div className="w-16 h-1 bg-brand-blue mx-auto mt-2"></div>
  </div>
)

export default function IfinDPage() {
  const coreFeatures = [
    {
      title: "全面覆盖中国市场各类资产",
      content: "沪深京A股、港股通、银行间及交易所债券、场内外基金、股票ETF期权、股指期货、期货衍生品、国债期货等。",
    },
    {
      title: "自定义竞赛与锦标赛",
      content: "支持自定义竞赛规则、时间、参与者等，灵活设置锦标赛模式，满足不同场景需求。",
    },
    {
      title: "实时市场仿真",
      content: "高度还原真实市场交易环境，提供实时行情数据，确保模拟交易的真实性和有效性。",
    },
    {
      title: "机构级工具",
      content: "提供专业级的分析工具、风险管理模块和绩效评估系统，助力机构提升投研能力。",
    },
  ]

  const scenarios = [
    {
      icon: <Layers className="w-12 h-12 text-brand-blue" />,
      title: "内部团队协作",
      description: "组织跨部门交易竞赛，促进交易员、量化分析师与风控人员的跨职能协作与策略优化。",
    },
    {
      icon: <Users className="w-12 h-12 text-brand-blue" />,
      title: "客户市场教育",
      description: "举办品牌定制赛事，引导机构客户或零售投资者通过模拟交易认知中国市场机遇与规则。",
    },
    {
      icon: <Briefcase className="w-12 h-12 text-brand-blue" />,
      title: "人才招募与培训",
      description: "通过模拟交易竞赛筛选顶尖人才，实战检验候选人的策略构建与风险管理能力。",
    },
    {
      icon: <GraduationCap className="w-12 h-12 text-brand-blue" />,
      title: "学术教育与研究",
      description: "设计中国主题金融科技挑战赛、组合管理竞赛等，助力高校培养实战型金融人才。",
    },
  ]

  const partners = [
    { name: "Zhongtian Securities", logo: "/zhongtian-securities-logo.png" },
    { name: "CZBank", logo: "/generic-bank-logo.png" },
    { name: "China Construction Bank", logo: "/china-construction-bank-logo.png" },
    { name: "China Cinda", logo: "/china-cinda-logo.png" },
  ]

  return (
    <div className="min-h-screen bg-brand-white text-brand-dark-gray">
      {/* Header */}
      <header className="bg-brand-very-dark-gray text-brand-white relative">
        <div className="absolute inset-0 bg-hero-pattern opacity-30"></div>
        <div className="container mx-auto px-6 py-4 flex justify-between items-center relative z-10">
          <div className="text-3xl font-bold">iFinD</div>
          <nav>
            <a href="#" className="text-sm hover:text-brand-light-gray">
              EN
            </a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-brand-very-dark-gray text-brand-white py-20 md:py-32 relative">
        <div className="absolute inset-0 bg-hero-pattern opacity-30"></div>
        <div className="container mx-auto px-6 text-center relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">iFinD模拟交易大赛</h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto text-brand-light-gray">
            iFinD
            模拟交易大赛旨在帮助投资经理/交易员投资交易，验证投资策略；同时促进机构内部或机构间互相交流，分享投资经验，共同进步成长。
          </p>
        </div>
      </section>

      {/* Mock Trading Competition Section */}
      <section className="py-16 md:py-24 bg-brand-very-light-gray">
        <div className="container mx-auto px-6">
          <SectionTitle>模拟交易大赛</SectionTitle>
          <p className="text-center max-w-3xl mx-auto mb-12 text-brand-medium-gray">
            模拟交易大赛可支持比赛的自动创建，并设置事前、事后风控指标；交易下单时，可实时联动市场行情进行撮合成交，高度仿真真实盘交易；同时管理员可实时查看比赛排名及选手数据，高效进行比赛管理。支持投资标的：沪深京A股、银行间/交易所债券、场内、外基金、股票ETF期权、期权、期货衍生品。
          </p>
          <div className="bg-brand-white p-4 shadow-xl rounded-lg">
            <Image
              src="/generic-financial-platform.png"
              alt="iFinD Platform Screenshot"
              width={1200}
              height={700}
              className="rounded-md object-cover w-full"
            />
          </div>
        </div>
      </section>

      {/* Core Features Section */}
      <section className="py-16 md:py-24 bg-brand-white">
        <div className="container mx-auto px-6">
          <SectionTitle>核心功能</SectionTitle>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <Image
                src="/placeholder.svg?width=500&height=400"
                alt="Core Features Illustration"
                width={500}
                height={400}
                className="rounded-lg shadow-lg object-cover"
              />
            </div>
            <Accordion type="single" collapsible className="w-full" defaultValue="item-0">
              {coreFeatures.map((feature, index) => (
                <AccordionItem value={`item-${index}`} key={index} className="border-b border-brand-light-gray">
                  <AccordionTrigger className="py-6 text-lg font-semibold text-brand-near-black hover:no-underline hover:text-brand-blue data-[state=open]:text-brand-blue">
                    {feature.title}
                  </AccordionTrigger>
                  <AccordionContent className="pb-6 text-brand-medium-gray">{feature.content}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* Competition Scenario Applications Section */}
      <section className="py-16 md:py-24 bg-brand-very-light-purplish-gray">
        <div className="container mx-auto px-6">
          <SectionTitle>竞赛场景应用</SectionTitle>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {scenarios.map((scenario, index) => (
              <Card key={index} className="bg-brand-white shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardHeader className="items-center text-center">
                  {scenario.icon}
                  <CardTitle className="mt-4 text-xl text-brand-near-black">{scenario.title}</CardTitle>
                </CardHeader>
                <CardContent className="text-center text-sm text-brand-medium-gray">
                  <p>{scenario.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Cooperation Cases Section */}
      <section className="py-16 md:py-24 bg-brand-white">
        <div className="container mx-auto px-6">
          <SectionTitle>合作案例</SectionTitle>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center">
            {partners.map((partner) => (
              <div key={partner.name} className="flex justify-center">
                <Image
                  src={partner.logo || "/placeholder.svg"}
                  alt={partner.name}
                  width={150}
                  height={50}
                  className="object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-brand-dark-gray text-brand-light-gray py-16">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div>
              <h5 className="font-semibold text-brand-white mb-4">联系热线</h5>
              <div className="flex items-center text-2xl text-brand-white">
                <Phone className="w-6 h-6 mr-2 text-brand-blue" />
                952555
              </div>
            </div>
            <div>
              <h5 className="font-semibold text-brand-white mb-4">友情链接</h5>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="#" className="hover:text-brand-white">
                    同花顺数据接口
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-brand-white">
                    同花顺私募之家
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-brand-white">
                    同花顺上市公司服务平台
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-brand-white">
                    同花顺翻译
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-brand-white">
                    同花顺AI平台
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h5 className="font-semibold text-brand-white mb-4">公司总部</h5>
              <p className="text-sm">浙江省杭州市余杭区五常街道同顺街18号同花顺大厦</p>
              <div className="mt-4">
                <Image
                  src="/placeholder.svg?width=100&height=100"
                  alt="iFinD QR Code"
                  width={100}
                  height={100}
                  className="bg-brand-white p-1 rounded"
                />
                <p className="text-xs mt-1">扫描关注iFinD</p>
              </div>
            </div>
          </div>
          <div className="border-t border-brand-medium-gray/50 pt-8 text-center text-xs">
            <p>
              Copyright©HangZhou TongHuaShun Data Processing Co.,Ltd.All rights
              reserved.杭州同花顺数据开发有限公司版权所有 浙ICP备15046002号 浙金信备【2021】1号
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
