import myImage from "../image/myImage.png";

function About() {
  return (
    <section id="about-me" className="my-5 intro">
      <div class="flex-row">
        <h1 id="about" className="section-title primary-border">
          About Me
        </h1>
      </div>
      <div className="flex-row">
        <div class="intro-info">
          <div class="intro-img">
            <img src={myImage} style={{ width: "100%" }} alt="profile" />
          </div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
            blandit ligula metus, dapibus molestie nunc iaculis scelerisque.
            Pellentesque sed nunc egestas, ullamcorper metus eget, sodales
            nulla. Integer sed est eu lacus vehicula pulvinar. Curabitur velit
            felis, semper eget nibh congue, pulvinar ultricies dui. In malesuada
            accumsan nulla sed tempor. Duis pulvinar suscipit vestibulum. Aenean
            at vehicula nunc, vitae porttitor diam. Aliquam erat volutpat.
            Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
            posuere cubilia curae; Pellentesque cursus urna in eros iaculis
            rhoncus. Nullam ex dui, sodales in efficitur vel, maximus et arcu.
          </p>
          <p>
            Ut vel mi vitae augue hendrerit interdum in nec augue. Donec
            bibendum, ligula vitae pulvinar convallis, metus quam consequat
            turpis, volutpat porttitor sem neque ac mauris. Class aptent taciti
            sociosqu ad litora torquent per conubia nostra, per inceptos
            himenaeos. Sed cursus, nulla vel hendrerit tempor, eros odio mollis
            odio, sit amet iaculis orci lacus a enim. Praesent ullamcorper orci
            in commodo pulvinar. Nullam ante risus, suscipit at venenatis nec,
            pharetra id orci. Nunc rutrum turpis quis tempus venenatis. Vivamus
            faucibus urna id imperdiet rutrum.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
