import React from 'react';
import './FundraiserCard.css';

interface FundraiserCardProps {
  title: string;
  organizerName: string;
  amountRaised: number;
  goalAmount: number;
  imageUrl: string;
  tag: string;
  url: string;
  onClick?: (event: React.MouseEvent<HTMLAnchorElement>) => void;
}

const FundraiserCard: React.FC<FundraiserCardProps> = ({
  title,
  organizerName,
  amountRaised,
  goalAmount,
  imageUrl,
  tag,
  url,
  onClick,
}) => {
  return (
    <a href={url} className="card-container" onClick={onClick}>
      <div className="card-image-container">
        <img src={imageUrl} alt="" className="card-image" />
        <span className="card-tag-desktop">{tag}</span>
      </div>
      <div className="card-content">
        <span className="card-tag-mobile">{tag}</span>
        <div className="card-title">{title}</div>
        <div className="card-organizer">By {organizerName}</div>
        <div className="card-progress">
          ${amountRaised.toLocaleString()} raised of ${goalAmount.toLocaleString()} goal
        </div>
      </div>
    </a>
  );
};

export default FundraiserCard;
