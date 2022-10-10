export const About = () => {
  let PageTitle = "Who is Mary?";
  let PageSubtitle = "a React full-stack developer looking for a job";

  return (
    <main className = 'aboutContainer'>
      <h1 className = "aboutTitle">{PageTitle}</h1>
      <h2 className = "aboutSubtitle">{PageSubtitle}</h2>
      <ul >
        <li className = "aboutText">Mary is a full-stack developer specializing in React, NodeJS, & Express</li>
        <li className = "aboutText">she is a life-long learner who enjoys new technologies</li>
        <li className = "aboutText">2019, Master of Computer Information Systems, Colorado State University</li>
      </ul>
      <h1 className = "aboutTitle">There's Something about Mary</h1>
      <h2 className = "aboutSubtitle">Hint: (She's been in the business for 30 years)</h2>
      <ul >

        <li className = "aboutText">she's been learning full-stack development for over 2 years now, but before that...</li>

        <li className = "aboutText">
        <img
          src="media/ca.png"
          title="CA Technologies"
          className="pic rounded-circle"
          alt="CA Technologies"
          onContextMenu={(e) => {
            e.preventDefault();
          }}
        />she did Java programming, high-stakes tech support for Fortune 100 companies, and turned disorganized, incomplete documentation into clear, useful information.</li>
        <li className = "aboutText">2019, Master of Computer Information Systems, Colorado State University</li>
      </ul>
    </main>
  )
}
