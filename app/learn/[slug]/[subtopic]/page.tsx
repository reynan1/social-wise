import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Quiz, SubtopicInsightCards, TopicIcon } from '@/components/site';
import { topics } from '@/components/topics';

export function generateStaticParams() {
  return topics.flatMap((topic) =>
    (topic.subtopics ?? []).map((subtopic) => ({
      slug: topic.slug,
      subtopic: subtopic.slug,
    })),
  );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string; subtopic: string }>;
}): Promise<Metadata> {
  const { slug, subtopic: subtopicSlug } = await params;
  const topic = topics.find((item) => item.slug === slug);
  const subtopic = topic?.subtopics?.find((item) => item.slug === subtopicSlug);

  return {
    title: subtopic ? `${subtopic.title} | ${topic?.title}` : 'Subtopic',
  };
}

export default async function SubtopicLesson({
  params,
}: {
  params: Promise<{ slug: string; subtopic: string }>;
}) {
  const { slug, subtopic: subtopicSlug } = await params;
  const topic = topics.find((item) => item.slug === slug);
  const siblings = topic?.subtopics ?? [];
  const subtopic = siblings.find((item) => item.slug === subtopicSlug);

  if (!topic || !subtopic) notFound();

  const index = siblings.indexOf(subtopic);
  const next = siblings[(index + 1) % siblings.length];

  return (
    <main id="main">
      <section className={'lesson-heading ' + subtopic.color}>
        <div className="lesson-heading-inner">
          <Link href={'/learn/' + topic.slug + '/'} className="back-link">
            Back to {topic.title}
          </Link>
          <span className="lesson-meta">
            SUBTOPIC 0{index + 1} / 0{siblings.length} - {subtopic.time.toUpperCase()} READ
          </span>
          <span className="topic-icon">
            <TopicIcon name={subtopic.icon} size={30} />
          </span>
          <h1>{subtopic.title}</h1>
          <p>{subtopic.intro}</p>
          <div className="subtopic-hero-stats" aria-label="Lesson progress">
            <span className="subtopic-hero-progress">0{index + 1}/0{siblings.length}</span>
            <span>
              <strong>{subtopic.cards.length} ideas</strong>
              <small>{subtopic.time} lesson - quick check at the end</small>
            </span>
          </div>
        </div>
      </section>

      <div className="lesson-layout">
        <article>
          <div className="subtopic-context">
            <span className="eyebrow">TOPIC SNAPSHOT</span>
            <p>{subtopic.overview}</p>
            <ul>
              {subtopic.keyPoints.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
          </div>

          {subtopic.informationSections.map((section, sectionIndex) => (
            <section
              className="information-section participation-loop"
              aria-labelledby={'information-section-' + sectionIndex}
              key={section.label}
            >
              <span className="eyebrow">{section.label}</span>
              <h2 id={'information-section-' + sectionIndex}>{section.title}</h2>
              <p className="participation-loop-intro">{section.intro}</p>
              <div className="participation-loop-grid">
                {section.cards.map((card) => (
                  <article className="participation-card" key={card.number + card.title}>
                    <div className="participation-card-top">
                      <span className="participation-number">{card.number}</span>
                      <span>INFO CARD</span>
                    </div>
                    {card.audience && <span className="information-card-audience">{card.audience}</span>}
                    <h3>{card.title}</h3>
                    <p>{card.explanation}</p>
                    <div className="participation-example">
                      <strong>Example</strong>
                      <span>{card.example}</span>
                    </div>
                    <div className="participation-tip">
                      <strong>Helpful habit</strong>
                      <span>{card.tip}</span>
                    </div>
                    {card.url && (
                      <a className="information-card-link" href={card.url} target="_blank" rel="noreferrer">
                        Read the official guide
                      </a>
                    )}
                  </article>
                ))}
              </div>
            </section>
          ))}

          <section className="subtopic-learning-grid" aria-labelledby="learn-by-doing-title">
            <div>
              <span className="eyebrow">FOCUSED INFORMATION</span>
              <h2 id="learn-by-doing-title">{subtopic.cardSectionTitle}</h2>
              <p className="subtopic-section-intro">
                {subtopic.cardSectionIntro} Tap a card to open the explanation and a practical example.
              </p>
              <SubtopicInsightCards cards={subtopic.cards} />
            </div>
            <aside className="subtopic-glance" aria-labelledby="glance-title">
              <span className="eyebrow">AT A GLANCE</span>
              <h2 id="glance-title">Build this skill.</h2>
              <p>Small habits make the lesson easier to use in real life.</p>
              <ol>
                {subtopic.cards.map((card) => (
                  <li key={card.label}>
                    <span>{card.label.slice(0, 2)}</span>
                    <div>
                      <strong>{card.title}</strong>
                      <small>{card.prompt}</small>
                    </div>
                  </li>
                ))}
              </ol>
            </aside>
          </section>

          {subtopic.lessons.map(([title, body], i) => (
            <section className="lesson-section" key={title}>
              <span className="lesson-number">0{i + 1}</span>
              <div>
                <h2>{title}</h2>
                <p>{body}</p>
              </div>
            </section>
          ))}

          <div className="takeaway">
            <span className="eyebrow">ONE THING TO TRY TODAY</span>
            <h3>{subtopic.action}</h3>
          </div>

          <Quiz topic={subtopic} />

          <section className="lesson-sources" aria-labelledby="subtopic-sources-title">
            <span className="eyebrow">READ MORE</span>
            <h2 id="subtopic-sources-title">Research behind this subtopic.</h2>
            <ul>
              {subtopic.sources.map((source) => (
                <li key={source.url}>
                  <a href={source.url} target="_blank" rel="noreferrer">
                    {source.label}
                  </a>
                </li>
              ))}
            </ul>
          </section>

          <Link className="next-lesson" href={'/learn/' + topic.slug + '/' + next.slug + '/'}>
            <span>EXPLORE ANOTHER SUBTOPIC</span>
            <strong>{next.title}</strong>
          </Link>
        </article>

        <aside className="lesson-sidebar subtopic-sidebar">
          <span className="eyebrow">SUBTOPICS</span>
          {siblings.map((item, i) => (
            <Link
              aria-current={item.slug === subtopic.slug ? 'page' : undefined}
              className={item.slug === subtopic.slug ? 'current' : ''}
              key={item.slug}
              href={'/learn/' + topic.slug + '/' + item.slug + '/'}
            >
              <span>0{i + 1}</span>
              {item.title}
            </Link>
          ))}
          <p>
            Each subtopic connects back to the bigger skill:
            <br />
            learn, think, participate.
          </p>
        </aside>
      </div>
    </main>
  );
}
