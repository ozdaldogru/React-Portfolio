import p1 from "../image/p1.png";
import p2 from "../image/p1.png";
import p3 from "../image/p1.png";
import p4 from "../image/p1.png";
import p5 from "../image/p1.png";
import p6 from "../image/p1.png";

function Portfolio() {
  return (
    <div>
      <section id="work" className="jobs">
        <div className="flex-row">
          <h2 className="section-title secondary-border">Portfolio</h2>
        </div>

        <div className="job">
          <div className="job-info">
            <div className="job-img">
              <a href="">
                {" "}
                <img
                  src={p1}
                  className="my-2"
                  style={{ width: "100%" }}
                  alt="project image"
                />
              </a>
            </div>
            <div className="job-text">
              <h4>Project-1</h4>
              <p>
                Project-1 description
              </p>
            </div>
          </div>
        </div>

        <div className="job">
          <div className="job-info">
            <div className="job-img">
              <a href="">
                {" "}
                <img
                  src={p2}
                  className="my-2"
                  style={{ width: "100%" }}
                  alt="project image"
                />
              </a>
            </div>
            <div className="job-text">
              <h4>Project-2</h4>
              <p>
              Project-2 description
              </p>
            </div>
          </div>
        </div>

        <div className="job">
          <div className="job-info">
            <div className="job-img">
              <a href="">
                {" "}
                <img
                  src={p3}
                  className="my-2"
                  style={{ width: "100%" }}
                  alt="project image"
                />
              </a>
            </div>
            <div className="job-text">
              <h4>Project-3</h4>
              <p>
              Project-3 description
              </p>
            </div>
          </div>
        </div>

        <div className="job">
          <div className="job-info">
            <div className="job-img">
              <a href="">
                {" "}
                <img
                  src={p4}
                  className="my-2"
                  style={{ width: "100%" }}
                  alt="project image"
                />
              </a>
            </div>
            <div className="job-text">
              <h4>Project-4</h4>
              <p>
              Project-4 description
              </p>
            </div>
          </div>
        </div>

        <div className="job">
          <div className="job-info">
            <div className="job-img">
              <a href="">
                {" "}
                <img
                  src={p5}
                  className="my-2"
                  style={{ width: "100%" }}
                  alt="project image"
                />
              </a>
            </div>
            <div className="job-text">
              <h4>Project-5</h4>
              <p>
              Project-5 description
              </p>
            </div>
          </div>
        </div>

        <div className="job">
          <div className="job-info">
            <div className="job-img">
              <a href="">
                {" "}
                <img
                  src={p6}
                  className="my-2"
                  style={{ width: "100%" }}
                  alt="project image"
                />
              </a>
            </div>
            <div className="job-text">
              <h4>Project-6</h4>
              <p>
              Project-6 description
              </p>
            </div>
          </div>
        </div>


      </section>
    </div>
  );
}

export default Portfolio;
