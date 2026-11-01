import { contacts, education, experience, languages, profile, skills } from "./data";

const photoUrl = `${import.meta.env.BASE_URL}${profile.photo}`;

export default function App() {
  return (
    <div className="page">
      <div className="sheet">
        <header className="top">
          <img className="top__photo" src={photoUrl} alt={`${profile.firstName} ${profile.lastName}`} />
          <h1>
            {profile.firstName} {profile.lastName}
          </h1>
          <p className="top__role">{profile.role}</p>
          <ul className="links">
            {contacts.map((c) => (
              <li key={c.text}>{"href" in c ? <a href={c.href}>{c.text}</a> : c.text}</li>
            ))}
          </ul>
        </header>

        <section>
          <h2>Обо мне</h2>
          <p>{profile.about}</p>
        </section>

        <section>
          <h2>Опыт работы</h2>
          {experience.map((j) => (
            <div key={j.title} className="row">
              <div className="row__date">{j.period}</div>
              <div>
                <h3>{j.title}</h3>
                <p className="sub">{j.company}</p>
                <ul className="bullets">
                  {j.bullets.map((b) => (
                    <li key={b}>{b}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </section>

        <section>
          <h2>Образование</h2>
          {education.map((e) => (
            <div key={e.title} className="row">
              <div className="row__date">{e.period}</div>
              <div>
                <h3>{e.title}</h3>
                {e.lines.map((l) => (
                  <p key={l} className="sub">{l}</p>
                ))}
              </div>
            </div>
          ))}
        </section>

        <div className="cols">
          <section>
            <h2>Навыки</h2>
            <ul className="tags">
              {skills.map((s) => (
                <li key={s}>{s}</li>
              ))}
            </ul>
          </section>
          <section>
            <h2>Языки</h2>
            <ul className="tags">
              {languages.map((l) => (
                <li key={l}>{l}</li>
              ))}
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
}
