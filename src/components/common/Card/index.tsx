import "./style.css";
type CardProps = {
  id: number;
  author: string;
  download_url: string;
  url: string;
};
const Card = ({ id, author, download_url, url }: CardProps) => {
  return (
    <div key={id} className="card">
      <h2>{author}</h2>
      <img src={download_url} height="200px" />
      <p>{url}</p>
    </div>
  );
};
export default Card;
