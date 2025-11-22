const Profile = () => {
  return (
    <>
      <div className="grid gap-5">
        <div className="w-fit">
          <h1>Hello!</h1>
        </div>
        <p className="indent-5 text-justify">
          My name is {""}
          <span className="font-mono font-semibold text-accent">
            Bagas Nugraha
          </span>
          , an Information Systems student interested in the field of technology
          and how it integrates with business to create innovative solutions.
          With knowledges and skills in Programming and System Development, I am
          always open to learning opportunities and eager to explore how
          technology can improve efficiency and make a positive impact on the
          environment.
        </p>
      </div>
    </>
  );
};

export default Profile;
