import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Quiz, SubtopicCards, TopicIcon } from '@/components/site';
import { topics } from '@/components/topics';

export function generateStaticParams() {
  return topics.map((topic) => ({ slug: topic.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  return { title: topics.find((topic) => topic.slug === slug)?.title || 'Lesson' };
}

export default async function Lesson({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const topic = topics.find((item) => item.slug === slug);

  if (!topic) notFound();

  const index = topics.indexOf(topic);
  const next = topics[(index + 1) % topics.length];

  return (
    <main id="main">
      <section className={'lesson-heading ' + topic.color}>
        <div className="lesson-heading-inner">
          <Link href="/learn/" className="back-link">
            All learning topics
          </Link>
          <span className="lesson-meta">
            TOPIC 0{index + 1} / 0{topics.length} · {topic.time.toUpperCase()} READ
          </span>
          <span className="topic-icon">
            <TopicIcon name={topic.icon} size={30} />
          </span>
          <h1>{topic.title}</h1>
          <p>{topic.intro}</p>
        </div>
      </section>

      <div className="lesson-layout">
        <article>
          {topic.subtopics && (
            <section className="subtopic-library" aria-labelledby="subtopic-heading">
              <span className="eyebrow">THE {topic.title.toUpperCase()} TOOLKIT</span>
              <h2 id="subtopic-heading">
                {topic.slug === 'parental-guidance-digital-parenting'
                  ? 'Choose a parenting skill.'
                  : 'Choose a subtopic.'}
              </h2>
              <p>
                Each card opens its own lesson, practical action, quick check, and research notes.
              </p>
              <SubtopicCards items={topic.subtopics} topicSlug={topic.slug} />
            </section>
          )}

          {topic.lessons.map(([title, body], i) => (
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
            <h3>{topic.action}</h3>
          </div>

          <Quiz topic={topic} />

          {topic.sources && (
            <section className="lesson-sources" aria-labelledby="sources-title">
              <span className="eyebrow">READ MORE</span>
              <h2 id="sources-title">Research behind this lesson.</h2>
              <ul>
                {topic.sources.map((source) => (
                  <li key={source.url}>
                    <a href={source.url} target="_blank" rel="noreferrer">
                      {source.label}
                    </a>
                  </li>
                ))}
              </ul>
            </section>
          )}

          <Link className="next-lesson" href={'/learn/' + next.slug + '/'}>
            <span>EXPLORE ANOTHER TOPIC</span>
            <strong>{next.title}</strong>
          </Link>
        </article>

        <aside className="lesson-sidebar">
          <span className="eyebrow">YOUR DIGITAL TOOLKIT</span>
          {topics.map((item, i) => (
            <Link
              aria-current={item.slug === slug ? 'page' : undefined}
              className={item.slug === slug ? 'current' : ''}
              key={item.slug}
              href={'/learn/' + item.slug + '/'}
            >
              <span>0{i + 1}</span>
              {item.title}
            </Link>
          ))}
          <p>
            Take your time.
            <br />
            Awareness is a habit, not a race.
          </p>
        </aside>
      </div>
    </main>
  );
}
