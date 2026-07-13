import profilePhoto from './assets/profile-photo.jpg';
import {
  resume,
  type Experience,
  type Link,
  type Project,
  type ShowcaseLink,
  type SkillGroup,
  type SummaryItem,
} from './resumeData';

function ExternalLink({ link }: { link: Link }) {
  if (!link.href) {
    return <span>{link.value}</span>;
  }

  return (
    <a href={link.href} target={link.href.startsWith('http') ? '_blank' : undefined} rel="noreferrer">
      {link.value}
    </a>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="section">
      <h2>{title}</h2>
      {children}
    </section>
  );
}

function BulletList({ items }: { items: string[] }) {
  return (
    <ul className="bullet-list">
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
}

function SummaryList({ items }: { items: SummaryItem[] }) {
  return (
    <ul className="bullet-list summary-list">
      {items.map((item) => (
        <li key={item.title}>
          <strong>{item.title}：</strong>
          {item.text}
        </li>
      ))}
    </ul>
  );
}

function SummarySkills({ items }: { items: SkillGroup[] }) {
  return (
    <div className="summary-skills" aria-label="技术栈">
      <strong className="summary-skills-label">技术栈</strong>
      <div className="summary-skill-list">
        {items.map((group) => (
          <p className="summary-skill-group" key={group.title}>
            <strong>{group.title}</strong>
            <span>{group.items.join(' / ')}</span>
          </p>
        ))}
      </div>
    </div>
  );
}

function formatDownloads(downloads: number) {
  return new Intl.NumberFormat('en-US').format(downloads);
}

function ShowcaseList({ items }: { items: ShowcaseLink[] }) {
  return (
    <div className="showcase-list">
      {items.map((item) => (
        <article className="showcase-item" key={item.label}>
          <p className="showcase-line">
            <strong>{item.label}</strong>
            <ExternalLink link={item} />
          </p>
          {item.description || item.image ? (
            <div className="showcase-detail">
              {item.description ? <p className="showcase-description">{item.description}</p> : null}
              {item.image ? <img className="showcase-image" src={item.image.src} alt={item.image.alt} /> : null}
            </div>
          ) : null}
          {item.articles ? (
            <ul className="article-link-list">
              {item.articles.map((article) => (
                <li key={article.href}>
                  <span className="article-title">{article.title}</span>
                  <a className="list-url" href={article.href} target="_blank" rel="noreferrer">
                    {article.href.replace('https://', '')}
                  </a>
                </li>
              ))}
            </ul>
          ) : null}
          {item.packages ? (
            <ul className="article-link-list package-link-list">
              {item.packages.map((packageItem) => (
                <li key={packageItem.href}>
                  <span className="package-summary">
                    <span className="package-name">
                      {packageItem.name}
                      {packageItem.weeklyDownloads !== undefined ? (
                        <span className="package-downloads">
                          {`(weekly downloads: ${formatDownloads(packageItem.weeklyDownloads)})`}
                        </span>
                      ) : null}
                    </span>
                    <span>{packageItem.description}</span>
                  </span>
                  <a className="list-url" href={packageItem.href} target="_blank" rel="noreferrer">
                    {packageItem.href.replace('https://', '')}
                  </a>
                </li>
              ))}
            </ul>
          ) : null}
        </article>
      ))}
    </div>
  );
}

function ProjectBlock({ project }: { project: Project }) {
  return (
    <div className="project-block">
      <h4>{project.name}</h4>
      <p>{project.description}</p>
      <BulletList items={project.contributions} />
    </div>
  );
}

function ExperienceBlock({ experience }: { experience: Experience }) {
  return (
    <article className="experience-block">
      <div className="experience-head">
        <div>
          <h3>
            {experience.company}
            <span>{experience.department}</span>
          </h3>
          <p>{experience.title}</p>
        </div>
        <div className="time-place">
          <strong>{experience.period}</strong>
          <span>{experience.location}</span>
        </div>
      </div>
      <div className="project-list">
        {experience.projects.map((project) => (
          <ProjectBlock key={project.name} project={project} />
        ))}
      </div>
      {experience.highlights ? (
        <div className="project-block minor-block">
          <h4>多个供应链平台搭建与维护</h4>
          <BulletList items={experience.highlights} />
        </div>
      ) : null}
    </article>
  );
}

function App() {
  const [displayName, aliasName] = resume.name.split(' · ');
  const profileMain = resume.profile.slice(0, 3).join(' · ');
  const profileStatus = resume.profile.slice(3).join(' · ');

  return (
    <main className="app-shell">
      <div className="toolbar" aria-label="简历操作">
        <span>Siqi Li‘s CV</span>
        <button type="button" onClick={() => window.print()} aria-label="导出 PDF">
          <span aria-hidden="true">↓</span>
          导出 PDF
        </button>
      </div>

      <article className="resume-sheet" aria-label="黎思奇 2026 简历">
        <a className="print-web-link" href="https://xooone47.github.io/dylan-cv/">
          Web版: https://xooone47.github.io/dylan-cv/
        </a>
        <header className="resume-header">
          <div className="header-main">
            <div className="identity-row">
              <div className="identity-copy">
                <h1 className="name-line">
                  <span>{displayName}</span>
                  {aliasName ? (
                    <>
                      <span className="name-separator">·</span>
                      <span className="name-alias">{aliasName}</span>
                    </>
                  ) : null}
                </h1>
                <p className="profile-line">
                  <span>{profileMain}</span>
                  <span>{profileStatus}</span>
                </p>
              </div>
              <img className="profile-photo" src={profilePhoto} alt="黎思奇证件照" />
            </div>
            <div className="target">
              <span className="target-label">求职意向：</span>
              <p className="target-role">{resume.target}</p>
            </div>
          </div>
          <div className="header-aside">
            <div className="contact-panel">
              {resume.contact.map((item) => (
                <p key={item.label}>
                  <span>{item.label}</span>
                  <ExternalLink link={item} />
                </p>
              ))}
              <p>
                <span>背景</span>
                {resume.background.join('；')}
              </p>
              <p>
                <span>语言</span>
                {resume.languages.join('；')}
              </p>
            </div>
          </div>
        </header>

        <Section title="个人总结">
          <SummaryList items={resume.summary} />
          <SummarySkills items={resume.skills} />
        </Section>

        <Section title="工作经历">
          <div className="experience-list">
            {resume.experiences.map((experience) => (
              <ExperienceBlock key={`${experience.company}-${experience.period}`} experience={experience} />
            ))}
          </div>
        </Section>

        <Section title="教育经历">
          <article className="education-block">
            <div>
              <h3>
                {resume.education.school}
                <span>{resume.education.major}</span>
              </h3>
              <p>
                {resume.education.degree} · {resume.education.period}
              </p>
            </div>
            <BulletList items={resume.education.details} />
          </article>
        </Section>

        <Section title="其他成果">
          <ShowcaseList items={resume.other} />
        </Section>
      </article>
    </main>
  );
}

export default App;
