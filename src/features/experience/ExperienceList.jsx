import { dateRange } from "@/lib/dates";
export function ExperienceList({ experiences }) {
  return (
    <ol className="experience-list">
      {experiences.map((exp) => (
        <li key={exp.id}>
          <article className="experience-entry">
            <div className="experience-date">
              <span className="timeline-dot" aria-hidden="true" />
              {dateRange(exp.startDate, exp.endDate)}
            </div>
            <div>
              <p className="eyebrow">{exp.organization}</p>
              <h3>{exp.role}</h3>
              <p>{exp.summary}</p>
              {exp.contributions.length > 0 && (
                <ul className="contributions">
                  {exp.contributions.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              )}
            </div>
          </article>
        </li>
      ))}
    </ol>
  );
}
