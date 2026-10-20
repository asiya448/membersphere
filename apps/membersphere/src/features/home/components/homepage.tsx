import styles from "./homepage.module.css";

const features = [
  { number: "01", symbol: "↗", title: "Find your people", text: "Meet members who share your interests, your curiosity, and your next big idea." },
  { number: "02", symbol: "✳", title: "Make room for ideas", text: "Start a conversation, share what you know, and discover a fresh perspective." },
  { number: "03", symbol: "◎", title: "Turn moments into connections", text: "Bring people together through thoughtful events and shared experiences." },
];

export default function Homepage() {
  return (
    <div className={styles.page}>
      <section className={styles.hero} aria-labelledby="welcome-title">
        <div className={styles.heroCopy}>
          <span className={styles.eyebrow}><span /> A LITTLE CONNECTION GOES A LONG WAY</span>
          <h1 id="welcome-title">Good things grow<br />when we <em>connect.</em></h1>
          <p>A place to find your people, exchange ideas, and feel part of something. Welcome to your corner of Membersphere.</p>
          <div className={styles.buttons}><a className={styles.primary} href="#community">Explore the community <span aria-hidden="true">↗</span></a><a className={styles.secondary} href="#features">See how it works <span aria-hidden="true">→</span></a></div>
          <div className={styles.people}><div className={styles.avatars} aria-hidden="true"><span>AL</span><span>JK</span><span>MS</span><span>RD</span></div><span>Different stories.<br /><strong>One shared space.</strong></span></div>
        </div>
        <div className={styles.heroArt} aria-label="A preview of the Membersphere community">
          <div className={styles.orbit} aria-hidden="true" />
          <span className={styles.spark} aria-hidden="true">✳</span>
          <div className={styles.board}>
            <div className={styles.boardTop}><span className={styles.boardLogo}>m.</span><span>YOUR COMMUNITY, AT A GLANCE</span><span className={styles.live}>Preview</span></div>
            <h2>A good day to connect.</h2><p>There’s a place for every kind of you.</p>
            <div className={styles.previewEvent}><span className={styles.eventIcon} aria-hidden="true">☕</span><div><small>COME AS YOU ARE</small><h3>Coffee & fresh perspectives</h3><p>A conversation worth making time for.</p></div><span aria-hidden="true">↗</span></div>
            <div className={styles.previewBottom}><div><span className={styles.miniAvatar}>AL</span><span><strong>A little hello.</strong><small>The start of something good.</small></span></div><span className={styles.wave} aria-hidden="true">✺</span></div>
            <div className={styles.boardFoot}><span aria-hidden="true">●</span> A space to share, learn, and belong.</div>
          </div>
          <div className={styles.floating}><span aria-hidden="true">♡</span><div><strong>Better, together.</strong><small>That’s the Membersphere spirit.</small></div></div>
          <span className={styles.artCaption}>A GLIMPSE OF WHAT’S POSSIBLE · SAMPLE CONTENT</span>
        </div>
      </section>

      <div className={styles.values}><span>BUILT AROUND WHAT MATTERS</span><strong>Real conversations</strong><span aria-hidden="true">✳</span><strong>Shared interests</strong><span aria-hidden="true">✳</span><strong>A sense of belonging</strong></div>

      <section id="features" className={styles.section} aria-labelledby="features-title">
        <div className={styles.sectionHeading}><div><span className={styles.eyebrow}>MORE THAN A MEMBER DIRECTORY</span><h2 id="features-title">Your people. Your possibilities.</h2></div><p>Less scrolling past each other.<br />More finding common ground.</p></div>
        <div className={styles.cards}>{features.map((feature) => <article className={styles.card} key={feature.number}><div className={styles.cardTop}><span>{feature.symbol}</span><small>{feature.number}</small></div><h3>{feature.title}</h3><p>{feature.text}</p></article>)}</div>
      </section>

      <section id="community" className={styles.community} aria-labelledby="community-title">
        <div className={styles.communityArt} aria-hidden="true"><span className={styles.centerMark}>m.</span><span className={styles.personOne}>AL</span><span className={styles.personTwo}>JK</span><span className={styles.personThree}>MS</span><span className={styles.personFour}>RD</span><span className={styles.connectionLabel}>A world of common ground.</span></div>
        <div><span className={styles.eyebrow}>A COMMUNITY WITH YOU IN IT</span><h2 id="community-title">Belonging starts<br />with a simple hello.</h2><p>You don’t need to have it all figured out. Bring your interests, your questions, and yourself. There’s always something to learn from each other.</p><ul><li>A welcoming space for different perspectives</li><li>Conversations built around shared interests</li><li>Connections that go beyond a screen</li></ul><a href="#questions" className={styles.textLink}>Get to know Membersphere <span aria-hidden="true">→</span></a></div>
      </section>

      <section id="questions" className={styles.faq} aria-labelledby="questions-title"><div><span className={styles.eyebrow}>A FEW THINGS TO KNOW</span><h2 id="questions-title">Curious? You’re<br />in good company.</h2></div><div className={styles.questions}>
        <details><summary>What is Membersphere?<span aria-hidden="true">+</span></summary><p>Membersphere is a shared home for a member community, designed around discovering people, exchanging ideas, and building connections.</p></details>
        <details><summary>What can I explore here?<span aria-hidden="true">+</span></summary><p>This homepage introduces the community experience. Member directories, events, and account features are being developed.</p></details>
        <details><summary>Is the community preview live?<span aria-hidden="true">+</span></summary><p>The preview is sample content illustrating the experience. It does not show live members or scheduled events.</p></details>
      </div></section>
      <section className={styles.callout}><span className={styles.eyebrow}>MAKE SPACE FOR SOMETHING GOOD</span><h2>Your next connection<br />could start right here.</h2><a className={styles.primary} href="#welcome-title">Find your common ground <span aria-hidden="true">↗</span></a><span className={styles.calloutFlower} aria-hidden="true">✳</span></section>
    </div>
  );
}
