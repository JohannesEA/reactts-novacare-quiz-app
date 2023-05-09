import "./Homepage.css";

interface HomepageProps {
  title: string;
}

const Homepage = ({ title }: HomepageProps) => {
  const prefix = "homepage";
  return (
    <div className={`${prefix}__wrapper`}>
      <h1 className={`${prefix}__title`}>{title}</h1>
    </div>
  );
};

export default Homepage;
