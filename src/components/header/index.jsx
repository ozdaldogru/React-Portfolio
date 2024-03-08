import Navbar from "../navbar";

function Header(props) {
  const { currentTab, handleTabChange } = props;

  return (
    <div>
      <section>
        <header className="flex-row px-1">
          <div>
            <h1>Ozdal Dogru</h1>
          </div>
          <div>
            <Navbar
              currentTab={currentTab}
              handleTabChange={handleTabChange}
            ></Navbar>
          </div>
        </header>
      </section>
    </div>
  );
}

export default Header;
