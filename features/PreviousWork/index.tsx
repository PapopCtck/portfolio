import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@ppaop/components/ui/accordion";

export const PreviousWork = () => {
  return (
    <section>
      <div className="font-black text-2xl md:text-5xl lg:text-[60px]">
        <div>
          <span>PRE</span>
          <span className="text-outline">VIOUS</span>
        </div>
        <div>
          <span className="text-outline">EX</span>
          <span>PERIEN</span>
          <span className="text-outline">CES</span>
        </div>
      </div>
      <Accordion type="single" collapsible>
        <AccordionItem value="almond-digital-group">
          <AccordionTrigger>
            ALM<u>OND DIGI</u>TAL GROUP
          </AccordionTrigger>
          <AccordionContent>
            Developed and delivered multiple customer-facing and internal
            platforms for BigC, Amway, Shell, and SPU—spanning LINEOA/LIFF apps,
            React Native mobile apps, and custom back-office tools. Leveraged
            React, Redux, Express, and PostgreSQL to build scalable UIs and
            RESTful services. Delivered all projects within compressed
            timelines, often shortened mid-development, without compromising
            stability or functionality.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="miax">
          <AccordionTrigger>
            M<u>I</u>AX
          </AccordionTrigger>
          <AccordionContent>
            Led a team of 2 frontend developers and 2 interns to architect and
            build a video streaming platform for Robinhood Thailand using
            Next.js, TypeScript, and Redux. Which supported content scheduling,
            real-time chat, and user engagement analytics. The platform launched
            on time with incredibly short development cycle of only 4 months
            with no significant latency or crashes.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="gideon-one">
          <AccordionTrigger>
            GIDE<u>ON ON</u>E
          </AccordionTrigger>
          <AccordionContent>
            Led frontend development and optimization of CCXT, a carbon credit
            exchange platform enabling trading, portfolio tracking, and market
            visualization. Rebuilt major UI flows using React, react-hook-form,
            and TradingView, cutting page load time by half. Also initiated
            backend WebSocket infrastructure in Golang for live market feeds.
            <br />
            Later Initiated and led frontend architecture for Zplify, a carbon
            accounting platform that transforms user activity into carbon
            emission reports. Built using React, TypeScript, React Query, React
            Hook Form, and NX monorepo for modular scalability. Authored the
            CI/CD pipeline deployed via Cloudflare Pages. Occasionally help
            develop a RESTFUL API when needed.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="blockf">
          <AccordionTrigger>
            BLOC<u>KFINT</u>
          </AccordionTrigger>
          <AccordionContent>
            Directed frontend team to build and maintain a reusable component
            library adopted across multiple internal projects, initially built
            with MUI and later migrated to Mantine for improved customization
            and modernization. Simultaneously co-led development of
            Thinker-Core, a Loan Origination System used by financial clients to
            streamline loan approvals. Utilizing React, react-query, nx
            monorepo, and react-hook-form.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </section>
  );
};
