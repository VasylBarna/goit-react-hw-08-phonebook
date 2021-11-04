import { Link } from 'react-router-dom';
export default function HomePage() {
  return (
    <section>
   <h1>PhoneBook!</h1>
<h2>The application is designed to store and edit contacts</h2>
      <p>
        To get started with this application, please register to save and edit
        contacts <Link to="/registration">register</Link>.
      </p>
    </section>
  );
}