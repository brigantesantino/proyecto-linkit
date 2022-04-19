import React from "react";
import "../componentStyles/popup.css";

export default function Popup() {
  return (
    <div className="popup">
      <a  className="arrow" href="/candidatos">🠔</a>
      <h2 className="designer">
        UX Designer <span className="google">en Google</span>
      </h2>
      <div className="adress">
        <h2 className="adress">
          Ubicación: <span className="date">Buenos Aires,Argentina</span>
        </h2>
      </div>

      <h3>Description</h3>
      <div>
        <p>
          Hey there! We're looking for an Account Manager that has experience
          with managing clients, digital marketing strategies, and managing
          complex projects. Someone organized, detail-oriented, great at working
          with and communicating with clients, and skilled at prioritizing tasks
          and project deliverable
        </p>

        <p>Does this feel like you? Then go ahead and hit apply!</p>
        <h3 className="location">
          Location:{" "}
          <span className="remote">100% Remote, reporting to Los Angeles</span>
        </h3>
        <h3 className="engagement">
          Engagement:{" "}
          <span className="date">Full-time role (40 hours per week)</span>
        </h3>
        <div>
          <h3>About us:</h3>
          <p>Athyna is a remote recruitment agency.</p>
          <p>
            We exist to reimagine the workplace, by ethically sourcing highly
            skilled employees from a global pool of talent and giving businesses
            the tools they need to become successful, reinvest their time and
            bring value to their communities.
          </p>

          <p>
            We are also proudly carbon neutral and members of 1% for the Planet,
            pledging 1% of our annual sales to fight for environmental causes.
            We’re also keen on social impact - we truly care about everyone on
            our team, and we want to make the world a better place for all of
            us.
          </p>
        </div>
        <div>
          <h3>About the client:</h3>
          <p>
            Our client is a rapidly growing Los Angeles based Digital Marketing
            Agency seeking hungry and ambitious candidates. They pride
            themselves on their work ethic, dedication to their clients, and
            curiosity. They offer their services to small and medium-sized
            businesses in the home services industry. Their team is growing
            quickly and there is room for growth!
          </p>
        </div>
        <div>
          <h3>Day-to-Day Responsibilities:</h3>
          <p>
            In this position, you are responsible for maintaining happy,
            well-informed, clients. You are also responsible for:
          </p>

          <p>
            <h4>Creating Client Marketing Strategies</h4>
            <h4>Managing Client Projects through the CRM</h4>
            <h4>Maintaining all Communications with the Client</h4>
            <h4>Make sure Client Receives all Deliverables each month</h4>
            <h4>Requirements</h4>
            <h4>
              You are a people person and the people who work with you
              appreciate your talents and look to you for guidance
            </h4>
            <h4>
              You are hard-working and thrive when faced with new challenges
            </h4>
            <h4>
              Creativity and outside the box thinking is your second nature
            </h4>
            <h4>
              You’ve worked remotely or with clients in other countries and are
              comfortable being your own manager
            </h4>
          </p>
        </div>
      </div>
      <button type="submit" className="apply">
        Apply
      </button>
      <form>
        <div className="inputs">
          <h3>Nombre</h3>
          <input type="text" />
          <h3>Email</h3>
          <input type="email" />
          <h3>Dirección</h3>
          <input type="text" />
          <h3>Linkedin*</h3>
          <input type="text" />
          <h3>Experiencia</h3>
          <select name="info" className="experience">
            <option value="0"></option>
            <option value="1">xxxxxx</option>
            <option value="2">xxxxxx</option>
            <option value="3">xxxxxx</option>
            <option value="4">xxxxxx</option>
          </select>
        </div>
        <div className="details">
          <h3>Carga tu CV</h3>
          <div className="file">
            <label for="archive">
              +
              <input type="file" id="archive" />
            </label>
          </div>
          <h3>Remuneracion pretendida</h3>
          <select name="info">
            <option value="0"></option>
            <option value="1">xxxxxx</option>
            <option value="2">xxxxxx</option>
            <option value="3">xxxxxx</option>
            <option value="4">xxxxxx</option>
          </select>
          <h3>Cómo nos conociste</h3>
          <select name="info">
            <option value="0"></option>
            <option value="1">xxxxxx</option>
            <option value="2">xxxxxx</option>
            <option value="3">xxxxxx</option>
            <option value="4">xxxxxx</option>
          </select>
          <h3>Tecnologías</h3>
          <select name="info">
            <option value="0"></option>
            <option value="1">xxxxxx</option>
            <option value="2">xxxxxx</option>
            <option value="3">xxxxxx</option>
            <option value="4">xxxxxx</option>
          </select>

          <div className="condition">
            <div className="acept-conditions">
              <input type="checkbox" className="terms" />
              <h3>Aceptar condiciones legales</h3>
            </div>
            <button type="submit" className="send-button">
              Enviar
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
