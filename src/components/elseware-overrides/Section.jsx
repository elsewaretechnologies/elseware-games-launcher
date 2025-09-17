import { Section as EUISection } from "elseware-ui";

function Section({ children }) {
  return (
    <div className="pt-3">
      <EUISection>{children}</EUISection>
    </div>
  );
}

export default Section;
