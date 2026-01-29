import { Users, ArrowRight } from 'lucide-react';
import './Billboard.css';
import calendarImg from '../../assets/calendar.png';

export interface BillboardProps {
  title?: string;
  bodyText?: string;
  onButtonClick?: () => void;
}

export const Billboard = ({
  title = 'Ready to kickstart your career?',
  bodyText = "You're just a few clicks away. <b>Complete our quick application</b> to get started. Don't wait, roles fill quickly!",
  onButtonClick,
}: BillboardProps) => {
  return (
    <div className="billboard__container">
      <div className="billboard__header-row">
        <div className="billboard__icon-wrapper">
          <Users aria-hidden="true" />
        </div>
        <p className="billboard__category-text">interview for a role with us</p>
      </div>

      <div className="billboard__content-wrapper">
        <div className="billboard__text-section">
          <div className="billboard__main-text-container">
            <div className="billboard__main-text--title">{title}</div>
            <span
              className="billboard__main-text--regular"
              dangerouslySetInnerHTML={{
                __html: bodyText,
              }}
            />
          </div>

          <button className="billboard__button" onClick={onButtonClick}>
            <div className="billboard__button-text-container">
              Apply Now
              <ArrowRight className="billboard__cta-icon" />
            </div>
          </button>
        </div>

        <div className="billboard__image-section">
          <img src={calendarImg} alt="" aria-hidden="true" />
        </div>
      </div>
    </div>
  );
};
