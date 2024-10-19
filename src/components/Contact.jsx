import linkedInLogo from '../assets/icons/linkedin.svg'
import mailLogo from '../assets/icons/mail.svg'

const Contact = () => { 
  const contacts = [
    { username: 'Bagas Nugraha', url: 'https://www.linkedin.com/in/bagas-nugraha-2a5457324/', logo: linkedInLogo },
    { username: 'Email', url: 'mailto:nugrahabagas1@gmail.com', logo: mailLogo },
  ];

  return (
    <>
      <div>
        <h2 className="mb-1 text-center lg:text-left">Contact Me</h2>
        <div className="mb-5 flex justify-center gap-3 lg:flex-col lg:gap-0">
          {contacts.map((contact, index) => (
            <div key={index}>
              <a href={contact.url} target="_blank" rel="noopener noreferrer" className="hover:bg-accent/50 mb-1 w-fit p-1 rounded-md flex gap-2 align-middle">
                <img src={contact.logo} alt="" className="w-6 h-6"/>
                <p className="font-semibold text-accent">
                  <small>{contact.username}</small>
                </p>
              </a>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Contact;