import './About.css';
import Header from '../../components/header';


function About() {
  return (
    <>
      <Header/>
      <div className="About">
        <article>
          <p>
            An aspiring software engineer. Learning to learn deeply and appreciate the finer details.
          </p>
        </article>
        <article>
          <p>
            <b>github: </b>
            <a href='https://github.com/traceylum1'>github.com/traceylum1</a>
          </p>

          <p>
            <b>email: </b>
              <a href='mailto:traceylum@gmail.com'>traceylum@gmail.com</a>
            </p>
        </article>
      </div>
    </>

  );
}

export default About;
