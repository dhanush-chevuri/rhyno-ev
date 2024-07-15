import React from 'react';
import 'C:/Users/DELL/rhyno-ev/src/styles/Rentals.css';
import androidIcon from 'C:/Users/DELL/rhyno-ev/src/assets/images/android-icon.png';
import appleIcon from 'C:/Users/DELL/rhyno-ev/src/assets/images/apple-icon.png';

const Rentals = () => {
  return (
    <div className="rentals">
      <h1>Rentals</h1>
      
      <p>
        Explore the roars of Rhyno at your own pace with our rental options! Test the waters with our flexible rental model, available for a week or a month, allowing you to experience the Rhyno first hand before committing. Simply visit our authorized dealerships to unlock this opportunity.
      </p>
      <p>
        Additionally, we're redefining campus commuting with our rental fleet tailored for college students. Navigate your daily commute effortlessly by renting Rhyno vehicles on an hourly basis through our user-friendly mobile app. Embrace the freedom to ride and explore a new dimension in sustainable and convenient transportation.
      </p>
      <div className="download-buttons">
        <p>Download our rental app:</p>
        <a href="https://play.google.com/store/apps/details?id=com.example.android" className="btn android">
          <img src={androidIcon} alt="Android" /> Android
        </a>
        <a href="https://apps.apple.com/app/apple-store/id123456789" className="btn apple">
          <img src={appleIcon} alt="Apple" /> Apple
        </a>
      </div>
    </div>
  );
};

export default Rentals;
