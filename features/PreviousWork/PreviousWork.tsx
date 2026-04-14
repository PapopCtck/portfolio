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
  Trigger,
} from "@ppaop/components/ui/previousWork";
import { SectionHeading } from "@ppaop/components/ui/section-heading";

import { generateTextClassByIndex } from "./utils";
import { WorkExperience, workExperiences } from "./content";

const WorkExperienceItem = ({ experience }: { experience: WorkExperience }) => {
  const textClassByIndex = generateTextClassByIndex(
    experience.companyName,
    experience.underlineRanges,
  );
  return (
    <AccordionItem value={experience.id}>
      <Trigger
        triggerClassName={experience.triggerClassName}
        hoverProps={experience.hoverProps}
      >
        <Header
          header={
            <TextAnimate
              animation="slideLeft"
              by="character"
              textClassByIndex={textClassByIndex}
            >
              {experience.companyName}
            </TextAnimate>
          }
          headerClassName={experience.headerClassName}
          background={
            <TextAnimate
              className="whitespace-nowrap"
              animation="slideUp"
              by="character"
            >
              {experience.companyName}
            </TextAnimate>
          }
          backgroundClassName={experience.backgroundClassName}
        />
      </Trigger>
      <AccordionContent className="border-foreground border-t">
        <div className="relative flex flex-col p-8 md:px-[8%] md:py-20">
          {experience.contentBlocks.map((block, index) => (
            <ContentContainer
              key={index}
              className={block.className}
              yearMarker={block.yearMarker}
              yearMarkerClassName={block.yearMarkerClassName}
              story={block.story}
              responsibilities={block.responsibilities}
              contentAlignment={experience.contentAlignment}
            >
              {block.text}
            </ContentContainer>
          ))}
          <FloatingBackgroundText
            marqueeClassName={experience.floatingText.marqueeClassName}
            marqueeProps={{ repeat: experience.floatingText.repeat }}
          >
            {`// ${experience.companyName}`}
          </FloatingBackgroundText>
        </div>
      </AccordionContent>
    </AccordionItem>
  );
};

export const PreviousWork = () => {
  return (
    <section className="mt-16 mb-4 md:mt-48" id="previous-work">
      <SectionHeading className="mb-4 px-7 md:px-16">
        <div>
          <span>PRE</span>
          <span className="text-outline">VIOUS</span>
        </div>
        <div>
          <span className="text-outline">EX</span>
          <span>PERIEN</span>
          <span className="text-outline">CES</span>
        </div>
      </SectionHeading>
      <Accordion type="single" collapsible>
        {workExperiences.map((experience) => (
          <WorkExperienceItem key={experience.id} experience={experience} />
        ))}
      </Accordion>
    </section>
  );
};
