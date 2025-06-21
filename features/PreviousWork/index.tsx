import { TextAnimate } from "@ppaop/components/magicui/text-animate";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
} from "@ppaop/components/shadcn-ui/accordion";
import {
  Header,
  ContentContainer,
  FloatingBackgroundText,
  ClientList,
  Trigger,
} from "@ppaop/components/ui/previousWork";
import Image from "next/image";

export const PreviousWork = () => {
  return (
    <section className="mt-48 mb-4">
      <div className="mb-4 px-7 font-black text-2xl tracking-[32%] md:flex md:gap-3 md:px-16 md:text-5xl lg:text-[60px]">
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
          <Trigger>
            <Header
              header={
                <TextAnimate
                  animation="slideLeft"
                  by="character"
                  textClassByIndex={[
                    "",
                    "",
                    "",
                    "underline",
                    "underline",
                    "underline",
                    "underline",
                    "underline",
                    "underline",
                    "underline",
                    "underline",
                    "",
                    "",
                    "",
                    "",
                    "",
                    "",
                    "",
                  ]}
                >
                  ALMOND DIGITAL GROUP
                </TextAnimate>
              }
              headerClassName="flex-1"
              background={
                <TextAnimate
                  className="whitespace-nowrap"
                  animation="slideUp"
                  by="character"
                >
                  ALMOND DIGITAL GROUP
                </TextAnimate>
              }
              backgroundClassName="left-[30%]"
            />
          </Trigger>
          <AccordionContent className="border-foreground border-t">
            <div className="relative flex flex-col items-center p-16 md:items-end md:px-[15%] md:py-24">
              <ContentContainer
                className="mb-44"
                yearMarker="Jun 2020 - Dec 2020"
                yearMarkerClassName="rotate-[-10deg]"
              >
                Developed and delivered multiple customer-facing and internal
                platforms for BigC, Amway, Shell, and SPU—spanning LINEOA/LIFF
                apps, React Native mobile apps, and custom back-office tools.
                Leveraged React, Redux, Express, and PostgreSQL to build
                scalable UIs and RESTful services. Delivered all projects within
                compressed timelines, often shortened mid-development, without
                compromising stability or functionality.
              </ContentContainer>
              <FloatingBackgroundText
                marqueeClassName=" top-[20%]"
                marqueeProps={{ repeat: 5 }}
              >
                ALMOND DIGITAL GROUP
              </FloatingBackgroundText>
            </div>
            <ClientList>
              <Image src="/clients/bigc.png" alt="BigC" width={70} height={100} className="object-none" />
              <Image src="/clients/amway.png" alt="Amway" width={232} height={79} className="object-none" />
              <Image src="/clients/shell.png" alt="Shell" width={124} height={124} className="object-none" />
              <Image src="/clients/spu.png" alt="SPU" width={160} height={96} className="object-none" />
              <Image src="/clients/toyota.png" alt="TOYOTA" width={140} height={101} className="object-none" />
            </ClientList>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="miax">
          <Trigger triggerClassName="items-end">
            <Header
              header={
                <TextAnimate
                  animation="slideLeft"
                  by="character"
                  textClassByIndex={["", "underline", "underline", ""]}
                >
                  MIAX
                </TextAnimate>
              }
              headerClassName="flex-1 text-right"
              background={
                <TextAnimate
                  className="whitespace-nowrap"
                  animation="slideUp"
                  by="character"
                >
                  MIAX
                </TextAnimate>
              }
              backgroundClassName="left-[5%]"
            />
          </Trigger>
          <AccordionContent className="border-foreground border-t">
            <div className="relative flex flex-col items-center p-16 md:items-start md:px-[15%] md:py-24">
              <ContentContainer
                className="mb-44"
                yearMarker="Jan 2021 - Jul 2021"
                yearMarkerClassName="rotate-[10deg]"
              >
                Led a team of 2 frontend developers and 2 interns to architect
                and build a video streaming platform for Robinhood Thailand
                using Next.js, TypeScript, and Redux. Which supported content
                scheduling, real-time chat, and user engagement analytics. The
                platform launched on time with incredibly short development
                cycle of only 4 months with no significant latency or crashes.
              </ContentContainer>
              <FloatingBackgroundText
                marqueeClassName="top-[10%]"
                marqueeProps={{ repeat: 10 }}
              >
                MIAX
              </FloatingBackgroundText>
            </div>
            <ClientList marqueeProps={{ repeat: 20 }}>
              <Image src="/clients/robinhood.png" alt="Robinhood" width={120} height={120} className="object-none" />
            </ClientList>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="gideon-one">
          <Trigger>
            <Header
              header={
                <TextAnimate
                  animation="slideLeft"
                  by="character"
                  textClassByIndex={[
                    "",
                    "",
                    "",
                    "",
                    "underline",
                    "underline",
                    "underline",
                    "underline",
                    "underline",
                    "",
                    "",
                  ]}
                >
                  GIDEON ONE
                </TextAnimate>
              }
              headerClassName="flex-1"
              background={
                <TextAnimate
                  className="whitespace-nowrap"
                  animation="slideUp"
                  by="character"
                >
                  GIDEON ONE
                </TextAnimate>
              }
              backgroundClassName="left-[20%]"
            />
          </Trigger>
          <AccordionContent className="border-foreground border-t">
            <div className="relative flex flex-col items-center p-16 md:items-end md:px-[15%] md:py-24">
              <ContentContainer>
                Led frontend development and optimization of CCXT, a carbon
                credit exchange platform enabling trading, portfolio tracking,
                and market visualization. Rebuilt major UI flows using React,
                react-hook-form, and TradingView, cutting page load time by
                half. Also initiated backend WebSocket infrastructure in Golang
                for live market feeds.
              </ContentContainer>
              <ContentContainer
                className="mt-16 mb-44"
                yearMarker="Aug 2022 - Jul 2024"
                yearMarkerClassName="rotate-[-14deg]"
              >
                Later Initiated and led frontend architecture for Zplify, a
                carbon accounting platform that transforms user activity into
                carbon emission reports. Built using React, TypeScript, React
                Query, React Hook Form, and NX monorepo for modular scalability.
                Authored the CI/CD pipeline deployed via Cloudflare Pages.
                Occasionally help develop a RESTFUL API when needed.
              </ContentContainer>
              <FloatingBackgroundText
                marqueeClassName="top-[40%]"
                marqueeProps={{ repeat: 8 }}
              >
                GIDEON ONE
              </FloatingBackgroundText>
            </div>
            <ClientList marqueeProps={{ repeat: 6 }}>
              <Image src="/clients/fti.png" alt="FTI" width={240} height={109} className="object-none" />
              <Image src="/clients/big.png" alt="BIG" width={260} height={124} className="object-none" />
              <Image src="/clients/tvo.png" alt="TVO" width={90} height={118} className="object-none" />
              <Image src="/clients/gkbi.png" alt="GKBI" width={304} height={127} className="object-none" />
            </ClientList>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="thinkerfint">
          <Trigger triggerClassName="items-start">
            <Header
              header={
                <TextAnimate
                  animation="slideLeft"
                  by="character"
                  textClassByIndex={[
                    "",
                    "",
                    "",
                    "",
                    "",
                    "underline",
                    "underline",
                    "underline",
                    "underline",
                    "underline",
                    "underline",
                  ]}
                >
                  THINKERFINT
                </TextAnimate>
              }
              headerClassName="flex-1 text-right"
              background={
                <TextAnimate
                  className="whitespace-nowrap"
                  animation="slideUp"
                  by="character"
                >
                  THINKERFINT
                </TextAnimate>
              }
              backgroundClassName="right-[20%]"
            />
          </Trigger>
          <AccordionContent className="border-foreground border-t">
            <div className="relative flex flex-col items-center p-16 md:items-start md:px-[15%] md:py-24">
              <ContentContainer
                className="mb-40"
                yearMarker="Since Jul 2024"
                yearMarkerClassName="rotate-[-4deg]"
              >
                Directed frontend team to build and maintain a reusable
                component library adopted across multiple internal projects,
                initially built with MUI and later migrated to Mantine for
                improved customization and modernization. Simultaneously co-led
                development of Thinker-Core, a Loan Origination System used by
                financial clients to streamline loan approvals. Utilizing React,
                react-query, nx monorepo, and react-hook-form.
              </ContentContainer>
              <FloatingBackgroundText
                marqueeClassName="top-[50%]"
                marqueeProps={{ repeat: 6 }}
              >
                THINKERFINT
              </FloatingBackgroundText>
            </div>
            <ClientList marqueeProps={{ repeat: 8 }}>
              <Image src="/clients/kbank.png" alt="KBANK" width={124} height={124} className="object-none" />
              <Image src="/clients/kkp.png" alt="KKP" width={124} height={124} className="object-none" />
            </ClientList>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </section>
  );
};
