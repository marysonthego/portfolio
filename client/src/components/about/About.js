export const About = () => {

  return (
    <>
    <main className = 'aboutContainer'>
    <section className = 'aboutSection'>
      <h1 className = "aboutTitle">Who is Mary?</h1>
      <h2 className = "aboutSubtitle">A React full-stack developer looking for a job!</h2>

        <ul className = "ulTopCircle">
          <li className = "aboutText">Specializing in React, NodeJS, & Express</li>
          <li className = "aboutText">A life-long learner</li>
          <li className = "aboutText">Master of Computer Information Systems, 2019, Colorado State University</li>
        </ul>

      <h1 className = "aboutTitle">There's Something about Mary...</h1>
      <h2 className = "aboutSubtitle">Hint: (In the business for 30 years)</h2>
      <ul className = "ulReact">
        <li className = "aboutText">Learning full-stack development <i>by doing</i> for more than 2 years. Has anyone ever learned <i>too much</i> about React?</li>
      </ul>
      <ul className = "ulCA">
        <li className = "aboutText">CA Technologies</li>
      </ul>
      <ul className = "ulSubCircle">
        <li className = "aboutSubText">Java programming</li>
        <li className = "aboutSubText">high-stakes tech support for Fortune 100 companies</li>
        <li className = "aboutSubText">turned disorganized, incomplete documentation into clear, useful information.</li>
      </ul>
      <ul className = "ulNortel">
        <li className = "aboutText">Nortel Networks</li>
      </ul>
      <ul className = "ulTI">
        <li className = "aboutText">Texas Instruments</li>
      </ul>
    </section>
</main>
</>
  )
}
